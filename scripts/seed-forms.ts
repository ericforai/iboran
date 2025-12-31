import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const seed = async () => {
  // Dynamically import config after dotenv to ensure env vars are loaded
  const { default: configPromise } = await import('../src/payload.config')
  const payload = await getPayload({ config: configPromise })

  console.log('Seeding Forms...')

  // 1. Expert Demo Form
  const existingDemo = await payload.find({
    collection: 'forms',
    where: {
      title: {
        equals: 'Expert Demo',
      },
    },
  })

  if (existingDemo.docs.length === 0) {
    await payload.create({
      collection: 'forms',
      data: {
        title: 'Expert Demo',
        fields: [
          {
            blockType: 'text',
            name: 'name',
            label: '姓名',
            required: true,
            width: 50,
          },
          {
            blockType: 'text',
            name: 'company',
            label: '公司名称',
            required: true,
            width: 50,
          },
          {
            blockType: 'text',
            name: 'phone',
            label: '手机号',
            required: true,
            width: 50,
          },
          {
            blockType: 'email',
            name: 'email',
            label: '邮箱',
            required: false,
            width: 50,
          },
          {
            blockType: 'select',
            name: 'industry',
            label: '所属行业',
            options: [
              { label: '制造业', value: 'manufacturing' },
              { label: '零售业', value: 'retail' },
              { label: '金融业', value: 'finance' },
              { label: '服务业', value: 'service' },
              { label: '其他', value: 'other' },
            ],
            required: false,
            width: 100,
          },
          {
            blockType: 'textarea',
            name: 'message',
            label: '备注',
            required: false,
            width: 100,
          },
          {
            blockType: 'text',
            name: 'source',
            label: '来源',
            required: false,
            width: 100,
          },
        ],
        submitButtonLabel: '提交预约',
        confirmationType: 'message',
        confirmationMessage: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '感谢您的预约！我们将尽快联系您。',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        emails: [
          {
            emailTo: 'admin@boran.cn',
            subject: 'New Expert Demo Request',
            message: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [{ type: 'text', text: 'You have a new demo request.', version: 1 }],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1,
                        }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1
                }
            }
          },
        ],
      },
    })
    console.log('Created "Expert Demo" form.')
  } else {
    console.log('"Expert Demo" form already exists.')
  }

  // 2. Questionnaire Form
  const existingSurvey = await payload.find({
    collection: 'forms',
    where: {
      title: {
        equals: 'Questionnaire',
      },
    },
  })

  if (existingSurvey.docs.length === 0) {
    await payload.create({
      collection: 'forms',
      data: {
        title: 'Questionnaire',
        fields: [
          {
            blockType: 'text',
            name: 'name',
            label: 'Name',
            required: true,
          },
          {
            blockType: 'textarea',
            name: 'feedback',
            label: 'Your Feedback',
            required: true,
          },
        ],
        submitButtonLabel: 'Submit Feedback',
        confirmationType: 'message',
        confirmationMessage: {
           root: {
            type: 'root',
            children: [{
                 type: 'paragraph',
                 children: [{ type: 'text', text: 'Thank you for your feedback!', version: 1 }],
                 direction: 'ltr',
                 format: '',
                 indent: 0,
                 version: 1,
            }],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1
           }
        },
      },
    })
    console.log('Created "Questionnaire" form.')
  } else {
    console.log('"Questionnaire" form already exists.')
  }

  console.log('Seeding completed.')
  process.exit(0)
}

seed()
