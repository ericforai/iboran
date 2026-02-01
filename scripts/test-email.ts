import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const testEmail = async () => {
  try {
    const { default: configPromise } = await import('../src/payload.config')
    const payload = await getPayload({ config: configPromise })

    console.log('--- Email Configuration Test ---')
    console.log(`SMTP Host: ${process.env.SMTP_HOST}`)
    console.log(`SMTP User: ${process.env.SMTP_USER}`)
    console.log(`SMTP Port: ${process.env.SMTP_PORT}`)
    console.log(`From Address: ${process.env.SMTP_FROM || 'info@boran.cn'}`)
    console.log('--------------------------------')

    const recipient = process.env.SMTP_USER || 'hzwyz@qq.com'
    console.log(`Sending test email to: ${recipient}...`)

    const result = await payload.sendEmail({
      to: recipient,
      subject: 'Payload SMTP Test - Success',
      html: `
        <h1>SMTP Test Successful!</h1>
        <p>This email was sent from your Payload CMS application using the new QQ Mail SMTP settings.</p>
        <p><strong>Config Details:</strong></p>
        <ul>
          <li>Host: ${process.env.SMTP_HOST}</li>
          <li>User: ${process.env.SMTP_USER}</li>
        </ul>
        <p>Sent at: ${new Date().toLocaleString()}</p>
      `,
    })

    console.log('Email sent successfully!')
    console.log('Result:', JSON.stringify(result, null, 2))
    
    process.exit(0)
  } catch (error) {
    console.error('Failed to send test email:')
    console.error(error)
    process.exit(1)
  }
}

testEmail()
