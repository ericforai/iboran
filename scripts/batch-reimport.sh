
#!/bin/bash
# Batch Re-Import Script to Update SEO Fields
# Usage: ./scripts/batch-reimport.sh

# Directory containing generated outputs
BATCH_DIR="output/batch"
COUNTER=0
TOTAL=$(ls -d "$BATCH_DIR"/*/ | wc -l)

echo "🚀 Starting Batch Re-Import of $TOTAL articles..."

# Loop through each subdirectory in output/batch
for dir in "$BATCH_DIR"/*/; do
  if [ -d "$dir" ]; then
    ((COUNTER++))
    PAGE_FILE="${dir}page.md"
    
    if [ -f "$PAGE_FILE" ]; then
        echo "[$COUNTER/$TOTAL] Processing: $dir"
        
        # Run import script
        npx tsx scripts/pseo-import-to-blog.ts \
          --page "$PAGE_FILE" \
          --category industry-insights \
          --status draft
          
    else
        echo "⚠️  Skipping $dir (page.md not found)"
    fi
  fi
done

echo "✅ Batch Re-Import Completed for $COUNTER articles!"
