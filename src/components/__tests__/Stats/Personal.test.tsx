import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Personal from '../../Stats/Personal';

describe('Personal', () => {
  it('renders the resume-backed personal stats table', () => {
    render(<Personal />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Atlanta, GA')).toBeInTheDocument();
    expect(screen.getByText('3.87 / 4.00')).toBeInTheDocument();
    expect(screen.getByText('3.72 / 4.00')).toBeInTheDocument();
    expect(
      screen.getByText('Software engineering internships'),
    ).toBeInTheDocument();
  });
});
