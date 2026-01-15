#!/usr/bin/env node
/**
 * PSEO Skill 04 — AI Content Generator
 * 
 * Uses OpenAI to generate unique, high-quality content and images for the blog post.
 * Output is a raw_data.json file that fills the schema, plus an optional image file.
 * 
 * Usage:
 *   tsx scripts/pseo-ai-generator.ts [options]
 * 
 * Options:
 *   --schema <path>        Path to schema.yaml
 *   --keyword <text>       Target keyword
 *   --output-dir <path>    Where to save raw_data.json and images
 *   --skip-image           Skip image generation
 */

import * as fs from 'fs';
import * as path from 'path';
import yaml from 'js-yaml';
import { chatCompletion, generateImage } from './ai/openai-client';
import { SYSTEM_PROMPT, IMAGE_PROMPT_TEMPLATE } from './ai/prompts';

function parseArgs() {
  const args: {
    schema?: string;
    keyword?: string;
    outputDir?: string;
    skipImage?: boolean;
  } = {};

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i];
    const next = process.argv[i + 1];

    switch (arg) {
      case '--schema':
        if (next && !next.startsWith('--')) {
          args.schema = next;
          i++;
        }
        break;
      case '--keyword':
        if (next && !next.startsWith('--')) {
          args.keyword = next;
          i++;
        }
        break;
      case '--output-dir':
        if (next && !next.startsWith('--')) {
          args.outputDir = next;
          i++;
        }
        break;
      case '--skip-image':
        args.skipImage = true;
        break;
    }
  }
  return args;
}

async function main() {
  try {
    const args = parseArgs();
    if (!args.schema || !args.keyword || !args.outputDir) {
      throw new Error('Missing required arguments: --schema, --keyword, --output-dir');
    }

    if (!fs.existsSync(args.outputDir)) {
      fs.mkdirSync(args.outputDir, { recursive: true });
    }

    console.log(`🤖 Generating AI content for: "${args.keyword}"`);

    // 1. Load Schema to understand structure
    const schemaContent = fs.readFileSync(args.schema, 'utf-8');
    const schema = yaml.load(schemaContent) as any;

    // 2. Prepare Prompt
    // Extract required fields to guide the AI
    const structureHint = JSON.stringify(schema.modules, null, 2);
    
    const userPrompt = `
Context:
- Theme/Keyword: "${args.keyword}"
- Goal: Create a high-quality B2B consultancy article.

Task:
Generate a valid JSON object that matches the required fields for the following modules.
Do NOT output Markdown. Output ONLY the JSON data.

Schema Modules & Requirements:
${structureHint}

The Output JSON must have a "kb" object containing keys for ALL required fields listed above (e.g. "kb.direct_answer_text", "kb.howto_steps", etc.).
For "kb.howto_steps", "kb.faq_items" etc., return arrays of objects as per standard structure.
`;

    // 3. Generate Content
    console.log('   ... Requesting text completion ...');
    let contentJsonStr = await chatCompletion(
      [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt }
      ],
      {
        model: 'gpt-4o',
        temperature: 0.7,
        jsonMode: true
      }
    );

    // Parse and Validate
    let rawData: any;
    try {
      rawData = JSON.parse(contentJsonStr);
    } catch (e) {
      console.error('Failed to parse JSON response:', contentJsonStr);
      throw new Error('AI returned invalid JSON');
    }

    // Save Content
    const contentPath = path.join(args.outputDir, 'raw_data.json');
    fs.writeFileSync(contentPath, JSON.stringify(rawData, null, 2));
    console.log(`   ✓ Content saved to ${contentPath}`);

    // 4. Generate Image (Optional)
    if (!args.skipImage) {
      console.log('   ... Generating image ...');
      const imagePrompt = IMAGE_PROMPT_TEMPLATE.replace('{scenario_description}', args.keyword);
      
      try {
        const b64Json = await generateImage(imagePrompt);
        if (b64Json) {
           const buffer = Buffer.from(b64Json, 'base64');
           const imagePath = path.join(args.outputDir, 'hero-image.png');
           fs.writeFileSync(imagePath, buffer);
           console.log(`   ✓ Image saved to ${imagePath}`);
        }
      } catch (e) {
        console.error('   ⚠️  Image generation failed:', e);
        // Don't fail the whole process if image fails
      }
    }

  } catch (error) {
    console.error('❌ AI Generator Failed:', error);
    process.exit(1);
  }
}

main();
