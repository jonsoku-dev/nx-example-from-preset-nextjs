import { render } from '@testing-library/react';

import Jonsoku from './jonsoku';

describe('Jonsoku', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Jonsoku />);
    expect(baseElement).toBeTruthy();
  });
});
