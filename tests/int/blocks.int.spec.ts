import { describe, it, expect } from 'vitest';
import { Block } from 'payload/types';
import { PainPointsBlock } from '../../src/blocks/PainPoints/config';
import { MethodologyBlock } from '../../src/blocks/Methodology/config';
import { BenefitMetricsBlock } from '../../src/blocks/BenefitMetrics/config';
import { Code } from '../../src/blocks/Code/config';

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

  it('should have a valid BenefitMetricsBlock configuration', () => {
    // Basic validation to ensure the block config object is structured correctly
    expect(BenefitMetricsBlock).toBeDefined();
    expect(BenefitMetricsBlock.slug).toBe('benefitMetrics');
    expect(BenefitMetricsBlock.fields).toBeInstanceOf(Array);
  });

  it('should have a valid Code block with a type field', () => {
    expect(Code).toBeDefined();
    expect(Code.slug).toBe('code');
    const typeField = Code.fields.find(field => 'name' in field && field.name === 'type');
    expect(typeField).toBeDefined();
  });
});
