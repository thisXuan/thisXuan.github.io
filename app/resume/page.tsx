import type { Metadata } from 'next';

import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description: `${AUTHOR_NAME}'s resume: Georgia Tech, AWS, Meituan, Momenta, distributed systems, backend engineering, and applied AI.`,
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Software engineer and Georgia Tech M.S. student focused on backend
            systems, distributed infrastructure, and applied AI. Experience
            includes production engineering at AWS, Meituan, Momenta, and the
            National University of Singapore Research Institute.
          </p>
          {/* Print-only, but real markup rather than CSS `content`, so it is
              selectable, linkable, and reads from the shared profile. The
              screen layout carries these in the footer, which print hides. */}
          <address className="resume-print-contact">
            <a href={`${SITE_URL}/`}>{SITE_URL.replace(/^https?:\/\//, '')}</a>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden="true"> · </span>
            <a href={profile.github}>github.com/thisXuan</a>
          </address>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
