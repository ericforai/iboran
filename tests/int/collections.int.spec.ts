import { describe, it, expect } from 'vitest';
import { CollectionConfig } from 'payload/types';
import { IndustrySolutions } from '../../src/collections/IndustrySolutions'; // This will fail

describe('Collection Configurations', () => {
  it('should have a valid IndustrySolutions configuration', () => {
    // Basic validation to ensure the collection config object is structured correctly
    expect(IndustrySolutions).toBeDefined();
    expect(IndustrySolutions.slug).toBe('industry-solutions');
    expect(IndustrySolutions.fields).toBeInstanceOf(Array);

    // Check for the 'layout' field specifically
    const layoutField = IndustrySolutions.fields.find(field => 'name' in field && field.name === 'layout');
    expect(layoutField).toBeDefined();
    expect(layoutField.type).toBe('blocks');
  });
});
