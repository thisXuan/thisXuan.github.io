import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import HomePage from '../page';

describe('homepage featured projects', () => {
  it('links both featured projects to their GitHub repositories', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('link', { name: /community review on github/i }),
    ).toHaveAttribute('href', 'https://github.com/thisXuan/community_review');

    expect(
      screen.getByRole('link', { name: /pokermind on github/i }),
    ).toHaveAttribute(
      'href',
      'https://github.com/Neptunian-shushu/PokerMind-LoRA-Tuned-LLM-for-Texas-Hold-em-Poker',
    );
  });
});
