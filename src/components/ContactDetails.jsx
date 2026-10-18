import { CONTACT, SOCIALS } from '../data/contact.js';

// Shared contact block used on the Contact page and the Enquiry page.
// Layout and sizes are set inline so they always render the same.

const BROWN = '#5B3A21';
const MAROON = '#6B1F2E';
const CREAM = '#FFF6E8';
const MUTED = '#8A6F5A';

function Icon({ name, size = 22 }) {
  const base = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    style: { width: size, height: size, flexShrink: 0 },
  };
  const line = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (name) {
    case 'phone':
      return (
        <svg {...base} {...line}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...base} {...line}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case 'building':
      return (
        <svg {...base} {...line}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...base} {...line}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...base} {...line}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...base} {...line}>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg {...base} fill="currentColor" stroke="none">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactDetails({
  mailSubject = 'Enquiry from the website',
  mailBody = '',
}) {
  const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    mailSubject
  )}&body=${encodeURIComponent(mailBody)}`;

  const cards = [
    {
      icon: 'building',
      label: 'Company',
      value: CONTACT.companyName,
      note: CONTACT.companyTagline,
    },
    {
      icon: 'phone',
      label: 'Call us',
      value: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phoneLink}`,
      note: 'Tap to call from your phone.',
    },
    {
      icon: 'mail',
      label: 'Email us',
      value: CONTACT.email,
      href: mailHref,
      note: 'Tap to open an email with the details ready.',
    },
  ];

  const socials = SOCIALS.filter(s => s.url);

  return (
    <div>
      {/* INFO CARDS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 20,
        }}
      >
        {cards.map(c => (
          <div
            key={c.label}
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(43,29,20,0.10)',
              borderRadius: 20,
              padding: '26px 24px',
              boxShadow: '0 8px 28px rgba(43,29,20,0.06)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 6,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: CREAM,
                color: MAROON,
                border: '1px solid rgba(91,58,33,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 8,
              }}
            >
              <Icon name={c.icon} />
            </div>

            <span
              className="font-mono uppercase"
              style={{ fontSize: 11, letterSpacing: '0.14em', color: MUTED }}
            >
              {c.label}
            </span>

            {c.href ? (
              <a
                href={c.href}
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  color: MAROON,
                  textDecoration: 'none',
                  wordBreak: 'break-word',
                }}
              >
                {c.value}
              </a>
            ) : (
              <span style={{ fontSize: 19, fontWeight: 700, color: MAROON }}>
                {c.value}
              </span>
            )}

            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: BROWN }}>
              {c.note}
            </p>
          </div>
        ))}
      </div>

      {/* CLOSING BANNER + SOCIAL ICONS */}
      <div
        style={{
          marginTop: 28,
          borderRadius: 24,
          padding: '38px 24px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #6B1F2E 0%, #4A1522 100%)',
          boxShadow: '0 14px 36px rgba(74,21,34,0.28)',
        }}
      >
        <h3
          style={{
            margin: 0,
            color: '#FFFFFF',
            fontSize: 'clamp(22px, 2.6vw, 30px)',
            lineHeight: 1.2,
          }}
        >
          We'd love to hear from you
        </h3>

        <p
          style={{
            margin: '12px auto 0',
            maxWidth: 580,
            fontSize: 15.5,
            lineHeight: 1.7,
            color: '#F3DADD',
          }}
        >
          Feel free to contact us — we are always happy to serve you. Whether
          it's a single handcrafted piece, corporate gifting or a custom order,
          our team is here to help.
        </p>

        {socials.length > 0 && (
          <>
            <div
              aria-hidden="true"
              style={{
                margin: '24px auto 16px',
                width: 60,
                height: 1,
                background: 'rgba(255,255,255,0.35)',
              }}
            />
            <p
              className="font-mono uppercase"
              style={{
                margin: '0 0 14px',
                fontSize: 12,
                letterSpacing: '0.18em',
                color: '#E8B7C0',
              }}
            >
              Follow us
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              {socials.map(s => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.45)',
                    background: 'rgba(255,255,255,0.08)',
                    textDecoration: 'none',
                  }}
                >
                  <Icon name={s.key} size={20} />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
