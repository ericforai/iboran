const fs = require('fs')
const path = require('path')

const routesManifestPath = path.join(process.cwd(), '.next', 'routes-manifest.json')
const imagesManifestPath = path.join(process.cwd(), '.next', 'images-manifest.json')

// Sanitize routes-manifest.json
if (fs.existsSync(routesManifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(routesManifestPath, 'utf8'))
  console.log('Sanitizing routes-manifest.json. Root keys:', Object.keys(manifest));
  if (manifest.dynamicRoutes) console.log(`Found ${manifest.dynamicRoutes.length} dynamicRoutes`);
  if (manifest.staticRoutes) console.log(`Found ${manifest.staticRoutes.length} staticRoutes`);
  if (manifest.dataRoutes) console.log(`Found ${manifest.dataRoutes.length} dataRoutes`);
  else console.warn('WARNING: No dataRoutes found in manifest!');

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

        // Remove global headers that use catch-all paths (potential regex source)
        if (item && item.source === '/:path*' && item.headers) {
           console.log('Removing global catch-all header:', item.source);
           obj.splice(i, 1);
           modified = true;
           continue;
        }

        sanitizeRoutesManifest(item)
      }
    } else if (typeof obj === 'object' && obj !== null) {
      // Remove named regexes
      if ('namedRegex' in obj) delete obj.namedRegex;
      if ('namedDataRouteRegex' in obj) delete obj.namedDataRouteRegex;

      // Define keys to sanitize
      const keysToSanitize = ['regex', 'dataRouteRegex'];

      for (const key of keysToSanitize) {
        if (key in obj && typeof obj[key] === 'string') {
          let originalRegex = obj[key];
          let pRegex = obj[key];

          // 1. Aggressively remove optional trailing slash groups/modifiers
          //    Simplify ^...(/)?$ or ^...(?:/)?$ or ^.../?$ to ^...$
          //    The router likely dislikes the ? modifier on the slash
          const originalLen = pRegex.length;
          
          if (pRegex.endsWith('(?:/)?$')) {
            pRegex = pRegex.substring(0, pRegex.length - 7) + '$';
          } else if (pRegex.endsWith('(/)?$')) {
            pRegex = pRegex.substring(0, pRegex.length - 5) + '$';
          } else if (pRegex.endsWith('(\\/)?$')) {
             pRegex = pRegex.replace(/\(\\\/\)\?\$$/, '$')
          } else if (pRegex.endsWith('/?$')) {
             pRegex = pRegex.substring(0, pRegex.length - 3) + '$';
          }

          // 2. Remove lazy quantifiers
          if (pRegex.includes('+?') || pRegex.includes('*?')) {
            pRegex = pRegex.replace(/\+\?/g, '+').replace(/\*\?/g, '*')
          }
          
          // 3. Replace remaining non-capturing groups (?: with capturing groups (
          if (pRegex.includes('(?:')) {
            pRegex = pRegex.replace(/\(\?:/g, '(')
          }

          if (pRegex !== originalRegex) {
              console.log(`Sanitized ${key} for source "${obj.source || obj.page || 'unknown'}":`)
              console.log(`  Before: ${originalRegex}`)
              console.log(`  After:  ${pRegex}`)
              obj[key] = pRegex
              modified = true
          } else if (key === 'dataRouteRegex') {
             // Debug log to confirm we are seeing dataRouteRegex even if not modified
             console.log(`Checked dataRouteRegex for ${obj.page}: ${originalRegex} (No changes needed)`);
          }
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
    // Clear remotePatterns entirely if they look suspicious to avoid regex issues
    // Or strictly sanitize them
    manifest.images.remotePatterns = manifest.images.remotePatterns.map((pattern) => {
        if (pattern.pathname && pattern.pathname.includes('(?!')) {
             console.log(`Simplifying complex pathname for ${pattern.hostname}`);
             pattern.pathname = '^/.*$';
             modified = true;
        }
        if (pattern.hostname && pattern.hostname.startsWith('^')) {
             console.log(`Simplifying hostname regex for ${pattern.hostname}`);
             pattern.hostname = pattern.hostname.replace(/[\^\$\(\)\?\:\\\|]/g, '');
             modified = true;
        }
        return pattern;
    });
    
    // Safety check: if modification didn't catch specific 'Unexpected MODIFIER' issues
    // We might want to just set pathname to something super simple if it was regex
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
