import { describe, it, expect } from 'vitest';
import { Resources } from '../../src/collections/Resources'; // This will fail

describe('Resources Collection', () => {
  it('should have a valid Resources configuration', () => {
    expect(Resources).toBeDefined();
    expect(Resources.slug).toBe('resources');
    expect(Resources.upload).toBeDefined();
    
    const fields = Resources.fields.map(f => 'name' in f ? f.name : '');
    expect(fields).toContain('title');
    expect(fields).toContain('category');
    expect(fields).toContain('relatedSolutions');
  });
});
