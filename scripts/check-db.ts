import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const checkSubmissions = async () => {
  try {
    const { default: configPromise } = await import('../src/payload.config')
    const payload = await getPayload({ config: configPromise })

    console.log('--- Checking Form Submissions ---')
    
    // Check form-submissions (from plugin-form-builder)
    try {
        const submissions = await payload.find({
            collection: 'form-submissions',
            limit: 5,
            sort: '-createdAt',
        })
        console.log(`Found ${submissions.totalDocs} form-submissions.`) 
        submissions.docs.forEach((doc: any, i: number) => {
            console.log(`[${i+1}] ID: ${doc.id}, Form: ${typeof doc.form === 'object' ? doc.form.title : doc.form}, Created: ${doc.createdAt}`)
        })
    } catch (e) {
        console.log('form-submissions collection not found or error.')
    }

    console.log('\n--- Checking Leads ---')
    // Check leads collection
    const leads = await payload.find({
      collection: 'leads',
      limit: 5,
      sort: '-createdAt',
    })
    console.log(`Found ${leads.totalDocs} leads.`) 
    leads.docs.forEach((doc: any, i: number) => {
      console.log(`[${i+1}] Name: ${doc.name}, Company: ${doc.company}, Phone: ${doc.phone}, Created: ${doc.createdAt}`)
    })

    process.exit(0)
  } catch (error) {
    console.error('Error checking database:')
    console.error(error)
    process.exit(1)
  }
}

checkSubmissions()
