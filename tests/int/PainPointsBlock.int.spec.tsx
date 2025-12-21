import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { PainPointsBlock } from '../../src/blocks/PainPoints/Component';

describe('PainPointsBlock', () => {
  it('should render title and points', () => {
    const mockProps: any = {
      title: 'Our Challenges',
      points: [
        { title: 'Point 1', description: 'Description 1' },
        { title: 'Point 2', description: 'Description 2' },
      ],
    };

    const { getByText } = render(<PainPointsBlock {...mockProps} />);
    
    expect(getByText('Our Challenges')).toBeDefined();
    expect(getByText('Point 1')).toBeDefined();
    expect(getByText('Description 1')).toBeDefined();
    expect(getByText('Point 2')).toBeDefined();
    expect(getByText('Description 2')).toBeDefined();
  });
});
