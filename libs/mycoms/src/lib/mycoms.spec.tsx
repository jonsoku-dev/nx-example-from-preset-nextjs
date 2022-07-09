import { render } from '@testing-library/react';

import Mycoms from './mycoms';

describe('Mycoms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mycoms />);
    expect(baseElement).toBeTruthy();
  });
});
