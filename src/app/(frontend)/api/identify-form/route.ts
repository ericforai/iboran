import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title')

  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }

  const payload = await getPayload({ config: configPromise })

  try {
    const forms = await payload.find({
      collection: 'forms',
      where: {
        title: {
          equals: title,
        },
      },
      limit: 1,
    })

    if (forms.docs.length === 0) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 })
    }

    return NextResponse.json({ id: forms.docs[0].id })
  } catch (error) {
    console.error('Error finding form:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
