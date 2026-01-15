
const keyword = "预测性维护：设备还没坏，为什么要修？";
const slug = keyword
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fa5-]/gu, '') // Moved - to end, added u flag
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 100);

console.log('Original: ' + keyword);
console.log('Slug (Original): ' + slug);

const inputs = [
    keyword,
    "Test English",
    "Mixed 中文 English"
];

for (const k of inputs) {
    const s1 = k.replace(/[^\w\s\u4e00-\u9fa5-]/g, ''); // no u
    const s2 = k.replace(/[^\w\s\u4e00-\u9fa5-]/gu, ''); // with u
    
    console.log(`Input: ${k}`);
    console.log(`  Regex 1 (no u): ${s1}`);
    console.log(`  Regex 2 (with u): ${s2}`);
}
