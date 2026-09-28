import { describe, expect, it } from 'vitest';

import data from '../../stats/personal';

describe('personal stats data', () => {
  it('exports supported resume facts', () => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ key: 'location', value: 'Atlanta, GA' }),
        expect.objectContaining({
          key: 'graduate-gpa',
          value: '3.87 / 4.00',
        }),
        expect.objectContaining({
          key: 'undergraduate-gpa',
          value: '3.72 / 4.00',
        }),
        expect.objectContaining({ key: 'internships', value: 4 }),
      ]),
    );
  });

  it('gives every stat a key, label, and value', () => {
    for (const stat of data) {
      expect(stat.key).toBeTruthy();
      expect(stat.label).toBeTruthy();
      expect(stat.value).toBeDefined();
    }
  });
});
