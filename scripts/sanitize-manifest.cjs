const fs = require('fs')
const path = require('path')

const routesManifestPath = path.join(process.cwd(), '.next', 'routes-manifest.json')
const imagesManifestPath = path.join(process.cwd(), '.next', 'images-manifest.json')

// Sanitize routes-manifest.json
if (fs.existsSync(routesManifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(routesManifestPath, 'utf8'))
  let modified = false

  // Recursive function to sanitize manifest
  function sanitizeRoutesManifest(obj) {
    if (Array.isArray(obj)) {
      // Iterate backwards to allow removal
      for (let i = obj.length - 1; i >= 0; i--) {
        const item = obj[i]
        
        // Remove default Next.js trailing slash redirect which causes regex issues
        if (item && item.source === '/:path+/' && item.destination === '/:path+') {
          console.log('Removing problematic trailing slash redirect:', item.source)
          obj.splice(i, 1)
          modified = true
          continue
        }

        sanitizeRoutesManifest(item)
      }
    } else if (typeof obj === 'object' && obj !== null) {
      // Remove namedRegex
      if ('namedRegex' in obj) {
        delete obj.namedRegex
        modified = true
      }

      // Simplify regex
      if ('regex' in obj && typeof obj.regex === 'string') {
        let originalRegex = obj.regex;
        let pRegex = obj.regex;

        // Specific fix for catch-all header regex
        if (obj.source === '/:path*') {
             pRegex = '^/.*$';
        } else {
            // Remove lazy quantifiers
            if (pRegex.includes('+?') || pRegex.includes('*?')) {
              pRegex = pRegex.replace(/\+\?/g, '+').replace(/\*\?/g, '*')
            }
            
            // Replace non-capturing groups (?: with capturing groups (
            if (pRegex.includes('(?:')) {
              pRegex = pRegex.replace(/\(\?:/g, '(')
            }

            // OPTIMIZATION: Simplify optional slash group (\/)?$ to \/?$
            // This handles the common pattern ^\/...(\/)?$ avoiding the group modifier 
            if (pRegex.endsWith('(\\/)?$')) {
               pRegex = pRegex.replace(/\(\\\/\)\?\$$/, '\\/?$')
            }
        }

        if (pRegex !== originalRegex) {
            console.log(`Sanitized regex for source "${obj.source || 'unknown'}":`)
            console.log(`  Before: ${originalRegex}`)
            console.log(`  After:  ${pRegex}`)
            obj.regex = pRegex
            modified = true
        }
      }

      Object.values(obj).forEach(sanitizeRoutesManifest)
    }
  }

  sanitizeRoutesManifest(manifest)

  if (modified) {
    fs.writeFileSync(routesManifestPath, JSON.stringify(manifest, null, 2))
    console.log('Sanitized routes-manifest.json: removed namedRegex and simplified regex')
  } else {
    console.log('No namedRegex or complex regex found in routes-manifest.json')
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

      // Check for regex in hostname (starts with ^)
      if (pattern.hostname && pattern.hostname.startsWith('^')) {
        console.log(`Found complex regex in hostname for ${pattern.hostname}, simplifying...`)
        // Strip regex characters: ^, $, (, ), ?, :, \, |
        pattern.hostname = pattern.hostname.replace(/[\^\$\(\)\?\:\\\|]/g, '')
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
