import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('describes Minxuan with resume-backed facts', () => {
    expect(aboutMarkdown).toContain('Minxuan Jin');
    expect(aboutMarkdown).toContain('Georgia Tech');
    expect(aboutMarkdown).toContain('South China University of Technology');
    expect(aboutMarkdown).toContain('backend systems');
  });

  it('includes the personal interests in the introduction', () => {
    expect(aboutMarkdown.match(/^# .+$/gm)).toEqual(['# Intro']);
    expect(aboutMarkdown).toContain('museums and historical sites');
  });
});
