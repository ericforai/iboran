const fs = require('fs')
const path = require('path')

const routesManifestPath = path.join(process.cwd(), '.next', 'routes-manifest.json')
const imagesManifestPath = path.join(process.cwd(), '.next', 'images-manifest.json')

// Sanitize routes-manifest.json
if (fs.existsSync(routesManifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(routesManifestPath, 'utf8'))
  let modified = false

  // Recursive function to remove namedRegex
  function removeNamedRegex(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(removeNamedRegex)
    } else if (typeof obj === 'object' && obj !== null) {
      if ('namedRegex' in obj) {
        delete obj.namedRegex
        modified = true
      }
      Object.values(obj).forEach(removeNamedRegex)
    }
  }

  removeNamedRegex(manifest)

  if (modified) {
    fs.writeFileSync(routesManifestPath, JSON.stringify(manifest, null, 2))
    console.log('Sanitized routes-manifest.json: removed namedRegex properties')
  } else {
    console.log('No namedRegex properties found in routes-manifest.json')
  }
} else {
  console.log('routes-manifest.json not found')
}

// Sanitize images-manifest.json
if (fs.existsSync(imagesManifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(imagesManifestPath, 'utf8'))
  let modified = false

  if (manifest.images && Array.isArray(manifest.images.remotePatterns)) {
    manifest.images.remotePatterns.forEach((pattern) => {
      // Check for regex containing negative lookaheads (?!...)
      if (pattern.pathname && pattern.pathname.includes('(?!')) {
        console.log(`Found complex regex in images manifest for ${pattern.hostname}, simplifying...`)
        // Replace with a simple catch-all regex that matches anything starting with /
        pattern.pathname = '^/.*$'
        modified = true
      }
    })
  }

  if (modified) {
    fs.writeFileSync(imagesManifestPath, JSON.stringify(manifest, null, 2))
    console.log('Sanitized images-manifest.json: simplified remotePatterns regex')
  } else {
    console.log('No complex regex found in images-manifest.json')
  }
} else {
  console.log('images-manifest.json not found')
}
