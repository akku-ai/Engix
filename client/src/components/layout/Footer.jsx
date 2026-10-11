import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

function Linkedin({ size = 22, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <rect x="3" y="8" width="4" height="13" rx=".5" />
      <circle cx="5" cy="4" r="2" />
      <path d="M11 21V8h4v2c1-2 6-3 6 3v8h-4v-7c0-3-2-3-2 0v7Z" />
    </svg>
  );
}

function Instagram({ size = 22, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r=".8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function Github({ size = 22, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 21v-3c-4 1-4-2-6-3m12 6v-4c0-1-.3-1.6-.8-2 3-.3 5.8-1.4 5.8-6a5 5 0 0 0-1.4-3.5c.1-1 .1-2-.4-3.5 0 0-1.2-.3-3.8 1.4a13 13 0 0 0-6.8 0C5 1.7 3.8 2 3.8 2c-.5 1.5-.5 2.5-.4 3.5A5 5 0 0 0 2 9c0 4.6 2.8 5.7 5.8 6-.5.4-.8 1-.8 2v4" />
    </svg>
  );
}

const companyLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/portfolio' },
  { label: 'Blog & Resources', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const capabilities = [
  'Custom Software Development',
  'Web & Mobile Development',
  'UI/UX Design',
  'AI & Workflow Automation',
  'Backend & API Engineering',
  'Cloud & DevOps',
];

const marketingServices = [
  'Search Engine Optimisation',
  'Paid Advertising',
  'Social Media Marketing',
  'Content & Email Marketing',
  'Branding & Creative Design',
];

const defaultLocations = [
  {
    id: 'india',
    label: 'Varanasi, India',
    address:
      '552 Sahityanaka Mod, Ramnagar, Varanasi',
  },
  {
    id: 'usa-one',
    label: 'Las Vegas, USA',
    address:
      '4617 Calderwood St, Las Vegas, NV 89103, USA',
  },
  {
    id: 'usa-two',
    label: 'Austin, USA',
    address:
      '223 TX-343 Loop, Austin, TX 78701, USA',
  },
  {
    id: 'canada',
    label: 'Calgary, Canada',
    address:
      '618-640 5 Ave SW, Calgary, AB, Canada',
  },
];

// Add your actual public profile URLs.
// Empty URLs remain hidden, avoiding non-working links.
const defaultSocialLinks = {
  linkedin: '',
  github: '',
  instagram: '',
};

const socialPlatforms = [
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'github', label: 'GitHub', icon: Github },
  { key: 'instagram', label: 'Instagram', icon: Instagram },
];

function isWebUrl(value) {
  try {
    return ['https:', 'http:'].includes(
      new URL(value).protocol
    );
  } catch {
    return false;
  }
}

export default function Footer({
  locations = defaultLocations,
  socialLinks = defaultSocialLinks,
}) {
  const visibleLocations = locations.filter(
    (location) => location.address?.trim()
  );

  const visibleSocials = socialPlatforms.filter(
    (platform) => isWebUrl(socialLinks[platform.key])
  );

  return (
    <>
      <footer className="engix-footer">
        <div className="engix-footer-shell">
          <div className="engix-footer-top">
            <div className="engix-footer-brand">
              <Link
                to="/"
                className="engix-footer-logo"
                aria-label="Engix Home"
              >
                <span className="engix-footer-logo-icon">
                  <img
                    src="/logo.png"
                    alt="Engix"
                    className="engix-footer-logo-image"
                  />
                </span>

                <strong className="engix-footer-logo-name">
                  Engix
                </strong>
              </Link>

              <p className="engix-footer-description">
                Engix Tech Private Limited provides IT
                services, custom software development and
                digital marketing for businesses in India
                and international markets.
              </p>

              <p className="engix-footer-description">
                From websites and applications to automation
                and marketing campaigns, we shape our work
                around your requirements, customers and
                business priorities.
              </p>

              {visibleSocials.length > 0 && (
                <div
                  className="engix-footer-socials"
                  aria-label="Engix social profiles"
                >
                  {visibleSocials.map((platform) => {
                    const Icon = platform.icon;

                    return (
                      <a
                        key={platform.key}
                        href={socialLinks[platform.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Engix on ${platform.label} (opens in a new tab)`}
                      >
                        <Icon
                          size={22}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <nav
              className="engix-footer-column"
              aria-label="Footer company navigation"
            >
              <h3>Company</h3>

              {companyLinks.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav
              className="engix-footer-column"
              aria-label="Footer IT services"
            >
              <h3>IT Services</h3>

              {capabilities.map((item) => (
                <Link key={item} to="/services">
                  {item}
                </Link>
              ))}
            </nav>

            <nav
              className="engix-footer-column"
              aria-label="Footer digital marketing services"
            >
              <h3>Digital Marketing</h3>

              {marketingServices.map((item) => (
                <Link key={item} to="/services">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <section
            className="engix-footer-connect"
            aria-labelledby="engix-footer-connect-title"
          >
            <h3 id="engix-footer-connect-title">
              Connect with Engix
            </h3>

            <div className="engix-footer-contact-grid">
              <a
                href="mailto:hello@engix.world"
                className="engix-footer-contact-item"
              >
                <Mail size={22} aria-hidden="true" />

                <span>
                  <span className="engix-footer-contact-label">
                    Email
                  </span>
                  <strong>hello@engix.world</strong>
                </span>
              </a>

              <a
                href="tel:+917355985134"
                className="engix-footer-contact-item"
              >
                <Phone size={22} aria-hidden="true" />

                <span>
                  <span className="engix-footer-contact-label">
                    Phone
                  </span>
                  <strong>+91 7355985134</strong>
                </span>
              </a>

              <a
                href="tel:+918960958818"
                className="engix-footer-contact-item"
              >
                <Phone size={22} aria-hidden="true" />

                <span>
                  <span className="engix-footer-contact-label">
                    Phone
                  </span>
                  <strong>+91 8960958818</strong>
                </span>
              </a>
            </div>
          </section>

          {visibleLocations.length > 0 && (
            <section
              className="engix-footer-locations"
              aria-labelledby="engix-footer-locations-title"
            >
              <h3 id="engix-footer-locations-title">
                Locations
              </h3>

              <div className="engix-footer-location-grid">
                {visibleLocations.map((location) => (
                  <article
                    key={location.id}
                    className="engix-footer-location-card"
                  >
                    <MapPin
                      size={23}
                      aria-hidden="true"
                    />

                    <div>
                      <h4>{location.label}</h4>
                      <address>{location.address}</address>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section
            className="engix-footer-cta"
            aria-labelledby="engix-footer-cta-title"
          >
            <div className="engix-footer-cta-copy">
              <span>
                LET’S DISCUSS YOUR REQUIREMENTS
              </span>

              <h2 id="engix-footer-cta-title">
                Plan Your Next Digital Initiative with Engix.
              </h2>

              <p>
                Tell us what you need to build, improve or
                promote. We will discuss the relevant
                services, scope and next steps.
              </p>
            </div>

            <Link
              to="/contact"
              className="engix-footer-cta-button"
            >
              Discuss your project
              <ArrowUpRight
                size={22}
                aria-hidden="true"
              />
            </Link>
          </section>

          <div className="engix-footer-bottom">
            <p>
              © {new Date().getFullYear()} Engix Tech Private
              Limited. All rights reserved.
            </p>

            <nav
              className="engix-footer-bottom-links"
              aria-label="Legal information"
            >
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
            </nav>
          </div>
        </div>
      </footer>

      <style>{`
        .engix-footer {
          --ef-ink: #111318;
          --ef-muted: #c5c9cd;
          --ef-line: #34383d;
          --ef-yellow: #fff14f;
          --ef-green: #dff5df;

          padding: 48px 0 22px;
          background: var(--ef-ink);
          color: #ffffff;
          font-family: inherit;
          font-size: 16px;
          line-height: 1.7;
          overflow-wrap: anywhere;
          border-top: 4px solid var(--ef-yellow);
        }

        .engix-footer *,
        .engix-footer *::before,
        .engix-footer *::after {
          box-sizing: border-box;
        }

        .engix-footer .engix-footer-shell {
          width: min(1260px, calc(100% - 56px));
          margin: 0 auto;
        }

        .engix-footer .engix-footer-top {
          display: grid;
          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(0, .65fr)
            repeat(2, minmax(0, 1fr));
          gap: 28px;
          padding-bottom: 32px;
        }

        .engix-footer .engix-footer-brand {
          min-width: 0;
        }

        .engix-footer .engix-footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffffff;
          text-decoration: none;
        }

        .engix-footer .engix-footer-logo-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          overflow: hidden;
          background: transparent;
          border: 0;
        }

        .engix-footer .engix-footer-logo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: transparent;
          margin: 0;
          padding: 0;
        }

        .engix-footer .engix-footer-logo-name {
          color: #ffffff;
          font-size: 27px;
          font-weight: 750;
          line-height: 1.1;
          letter-spacing: -.035em;
        }

        .engix-footer .engix-footer-description {
          margin: 18px 0 0;
          color: var(--ef-muted);
          font-size: 16px;
          line-height: 1.75;
        }

        .engix-footer .engix-footer-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .engix-footer .engix-footer-socials a {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          color: var(--ef-green);
          border: 1px solid var(--ef-line);
          border-radius: 6px;
          text-decoration: none;
        }

        .engix-footer .engix-footer-socials a:hover {
          background: var(--ef-yellow);
          color: var(--ef-ink);
          border-color: var(--ef-yellow);
        }

        .engix-footer h3 {
          margin: 0 0 16px;
          color: #ffffff;
          font-size: 21px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -.01em;
        }

        .engix-footer .engix-footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
        }

        .engix-footer .engix-footer-column > a {
          display: flex;
          align-items: center;
          min-height: 44px;
          padding: 8px 0;
          color: var(--ef-muted);
          font-size: 16px;
          line-height: 1.5;
          text-decoration: none;
        }

        .engix-footer a:hover {
          color: var(--ef-yellow);
        }

        .engix-footer .engix-footer-column > a:hover {
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .engix-footer .engix-footer-connect,
        .engix-footer .engix-footer-locations {
          padding: 28px 0;
          border-top: 1px solid var(--ef-line);
        }

        .engix-footer .engix-footer-contact-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .engix-footer .engix-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-height: 64px;
          padding: 14px 16px;
          background: #1b2025;
          border: 1px solid var(--ef-line);
          border-radius: 6px;
          color: #ffffff;
          text-decoration: none;
        }

        .engix-footer .engix-footer-contact-item svg {
          color: var(--ef-green);
          margin-top: 4px;
        }

        .engix-footer .engix-footer-contact-label {
          display: block;
          color: var(--ef-muted);
          font-size: 14px;
        }

        .engix-footer .engix-footer-contact-item strong {
          font-size: 17px;
          font-weight: 600;
        }

        .engix-footer .engix-footer-location-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .engix-footer .engix-footer-location-card {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr);
          align-items: start;
          gap: 12px;
          padding: 20px;
          border: 1px solid var(--ef-line);
          border-radius: 6px;
          background: #1b2025;
        }

        .engix-footer .engix-footer-location-card > svg {
          margin-top: 3px;
          color: var(--ef-yellow);
        }

        .engix-footer .engix-footer-location-card h4 {
          margin: 0 0 8px;
          color: #ffffff;
          font-size: 19px;
          font-weight: 650;
          line-height: 1.4;
        }

        .engix-footer .engix-footer-location-card address {
          color: var(--ef-muted);
          font-size: 16px;
          line-height: 1.65;
          font-style: normal;
        }

        .engix-footer .engix-footer-cta {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 28px;
          padding: 32px 0;
          border-top: 1px solid var(--ef-line);
          border-bottom: 1px solid var(--ef-line);
        }

        .engix-footer .engix-footer-cta-copy > span {
          display: inline-block;
          padding: 6px 10px;
          background: var(--ef-green);
          color: #253c29;
          font-size: 13px;
          font-weight: 750;
          line-height: 1.5;
          letter-spacing: .065em;
        }

        .engix-footer .engix-footer-cta h2 {
          max-width: 830px;
          margin: 16px 0;
          color: #ffffff;
          font-size: clamp(29px, 2.85vw, 42px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -.025em;
          text-wrap: balance;
        }

        .engix-footer .engix-footer-cta p {
          max-width: 780px;
          margin: 0;
          color: var(--ef-muted);
          font-size: 17px;
          line-height: 1.7;
        }

        .engix-footer .engix-footer-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 13px 18px;
          border-radius: 6px;
          background: var(--ef-yellow);
          color: var(--ef-ink);
          font-size: 16px;
          font-weight: 650;
          line-height: 1.5;
          text-decoration: none;
        }

        .engix-footer .engix-footer-cta-button:hover {
          background: var(--ef-green);
          color: var(--ef-ink);
        }

        .engix-footer .engix-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px 24px;
          padding-top: 20px;
        }

        .engix-footer .engix-footer-bottom p {
          margin: 0;
          color: var(--ef-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .engix-footer .engix-footer-bottom-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 24px;
        }

        .engix-footer .engix-footer-bottom-links a {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          color: var(--ef-muted);
          font-size: 14px;
          text-decoration: none;
        }

        .engix-footer .engix-footer-bottom-links a:hover {
          color: var(--ef-yellow);
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .engix-footer svg {
          flex-shrink: 0;
        }

        .engix-footer a:focus-visible {
          outline: 3px solid var(--ef-yellow);
          outline-offset: 4px;
        }

        @media (max-width: 1100px) {
          .engix-footer .engix-footer-top {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
          }

          .engix-footer .engix-footer-brand {
            grid-column: 1 / -1;
            max-width: 820px;
          }

          .engix-footer .engix-footer-location-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 820px) {
          .engix-footer .engix-footer-shell {
            width: calc(100% - 40px);
          }

          .engix-footer .engix-footer-contact-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .engix-footer .engix-footer-cta {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .engix-footer .engix-footer-cta-button {
            justify-self: start;
          }
        }

        @media (max-width: 540px) {
          .engix-footer {
            padding-top: 36px;
          }

          .engix-footer .engix-footer-shell {
            width: calc(100% - 32px);
          }

          .engix-footer .engix-footer-top,
          .engix-footer .engix-footer-location-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .engix-footer .engix-footer-brand {
            grid-column: auto;
          }

          .engix-footer .engix-footer-logo-icon {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
          }

          .engix-footer .engix-footer-logo-name {
            font-size: 24px;
          }

          .engix-footer .engix-footer-cta-copy > span {
            font-size: 11px;
            letter-spacing: .045em;
          }

          .engix-footer .engix-footer-cta-button {
            width: 100%;
            justify-content: space-between;
          }

          .engix-footer .engix-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}