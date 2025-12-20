import { describe, it, expect } from 'vitest';
import { Block } from 'payload/types';
import { PainPointsBlock } from '../../src/blocks/PainPoints/config';

describe('Block Configurations', () => {
  it('should have a valid PainPointsBlock configuration', () => {
    // Basic validation to ensure the block config object is structured correctly
    expect(PainPointsBlock).toBeDefined();
    expect(PainPointsBlock.slug).toBe('painPoints');
    expect(PainPointsBlock.fields).toBeInstanceOf(Array);
  });
});
