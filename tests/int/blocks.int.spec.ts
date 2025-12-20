import { describe, it, expect } from 'vitest';
import { Block } from 'payload/types';
import { PainPointsBlock } from '../../src/blocks/PainPoints/config';
import { MethodologyBlock } from '../../src/blocks/Methodology/config'; // This will fail

describe('Block Configurations', () => {
  it('should have a valid PainPointsBlock configuration', () => {
    // Basic validation to ensure the block config object is structured correctly
    expect(PainPointsBlock).toBeDefined();
    expect(PainPointsBlock.slug).toBe('painPoints');
    expect(PainPointsBlock.fields).toBeInstanceOf(Array);
  });

  it('should have a valid MethodologyBlock configuration', () => {
    // Basic validation to ensure the block config object is structured correctly
    expect(MethodologyBlock).toBeDefined();
    expect(MethodologyBlock.slug).toBe('methodology');
    expect(MethodologyBlock.fields).toBeInstanceOf(Array);
  });
});
