import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import profile from '@/data/profile.json';
import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  it('renders the verified address as a mailto link', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link', {
      name: `Email ${profile.email}`,
    });
    expect(link).toHaveAttribute('href', `mailto:${profile.email}`);
  });
});
