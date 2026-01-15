import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function updateForm() {
  const payload = await getPayload({ config: configPromise })

  console.log('正在查找 Expert Demo 表单...')
  
  const forms = await payload.find({
    collection: 'forms',
    where: {
      title: {
        equals: 'Expert Demo',
      },
    },
  })

  if (forms.docs.length === 0) {
    console.error('错误: 未找到名为 "Expert Demo" 的表单。请确认后台表单标题是否完全一致。')
    process.exit(1)
  }

  const form = forms.docs[0]
  const existingFields = form.fields || []
  const existingNames = new Set(existingFields.map((f: any) => f.name))

  const newFields = [
    { name: 'utm_source', label: 'UTM Source', blockType: 'text' },
    { name: 'utm_medium', label: 'UTM Medium', blockType: 'text' },
    { name: 'utm_campaign', label: 'UTM Campaign', blockType: 'text' },
    { name: 'utm_term', label: 'UTM Term', blockType: 'text' },
    { name: 'referrer', label: 'Referrer', blockType: 'text' },
    { name: 'landing_page', label: 'Landing Page', blockType: 'text' },
    { name: 'viewed_pages', label: 'Viewed Pages History', blockType: 'text' },
  ]

  let updated = false
  const fieldsToAppend = []

  for (const field of newFields) {
    if (!existingNames.has(field.name)) {
      console.log(`添加字段: ${field.name}`)
      fieldsToAppend.push(field)
      updated = true
    } else {
      console.log(`字段已存在: ${field.name}，跳过`)
    }
  }

  if (updated) {
    await payload.update({
      collection: 'forms',
      id: form.id,
      data: {
        fields: [...existingFields, ...fieldsToAppend],
      },
    })
    console.log('表单更新成功！追踪字段已添加。')
  } else {
    console.log('无需更新，所有追踪字段已在表单中。')
  }

  process.exit(0)
}

updateForm().catch((err) => {
  console.error('更新失败:', err)
  process.exit(1)
})
