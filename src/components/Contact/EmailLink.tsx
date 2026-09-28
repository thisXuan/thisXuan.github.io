import profile from '@/data/profile.json';

export default function EmailLink() {
  return (
    <div className="contact-email-container">
      <a
        href={`mailto:${profile.email}`}
        className="contact-email-link"
        aria-label={`Email ${profile.email}`}
      >
        {profile.email}
      </a>
    </div>
  );
}
