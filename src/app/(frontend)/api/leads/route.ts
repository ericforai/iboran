import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export interface LeadRequestData {
  name: string
  company: string
  phone: string
  source?: string
  resourceTitle?: string
  // UTM 归因数据
  utmData?: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_content?: string
    utm_term?: string
    referrer?: string
    landingPage?: string
    pageHistory?: string[]
  }
}

export async function POST(req: Request) {
  try {
    const body: LeadRequestData = await req.json()

    // Validate required fields
    if (!body.name || !body.company || !body.phone) {
      return NextResponse.json(
        { error: '姓名、公司名称和联系电话为必填项' },
        { status: 400 }
      )
    }

    // Validate phone format (Chinese mobile number)
    const phoneRegex = /^1[3-9]\d{9}$/
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { error: '请输入有效的手机号码' },
        { status: 400 }
      )
    }

    const payload = await getPayload({ config: configPromise })

    // Check if phone already exists in last 30 days (prevent spam)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const existingLeads = await payload.find({
      collection: 'leads',
      where: {
        and: [
          {
            phone: {
              equals: body.phone,
            },
          },
          {
            source: {
            equals: body.source || '',
            },
          },
          {
            createdAt: {
              greater_than: thirtyDaysAgo.toISOString(),
            },
          },
        ],
      },
      limit: 1,
    })

    // If already submitted for this resource, allow but don't create duplicate
    // Just return success (idempotent)
    if (existingLeads.docs.length > 0) {
      return NextResponse.json({
        success: true,
        message: '您已经解锁过此内容',
        existing: true,
      })
    }

    // Create the lead with UTM data
    await payload.create({
      collection: 'leads',
      data: {
        name: body.name,
        company: body.company,
        phone: body.phone,
        source: body.source || 'unknown',
        resourceTitle: body.resourceTitle || '',
        utmData: body.utmData || {
          utm_source: '',
          utm_medium: '',
          utm_campaign: '',
          utm_content: '',
          utm_term: '',
          referrer: '',
          landingPage: '',
          pageHistory: [],
        },
      },
    })

    return NextResponse.json({
      success: true,
      message: '提交成功',
    })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: '提交失败，请稍后重试' },
      { status: 500 }
    )
  }
}
