import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`engix-navbar ${
          scrolled ? 'engix-navbar-scrolled' : ''
        }`}
      >
        <div className="engix-navbar-container">
          <Link
            to="/"
            className="engix-navbar-logo"
            onClick={() => setOpen(false)}
            aria-label="Engix Home"
          >
            <span className="engix-navbar-logo-icon">
              <img
                src="/logo.png"
                alt="Engix"
                className="engix-navbar-logo-image"
              />
            </span>

            <strong className="engix-navbar-logo-name">
              Engix
            </strong>
          </Link>

          <nav className="engix-navbar-desktop">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'engix-navbar-link active'
                    : 'engix-navbar-link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="engix-navbar-actions">
            <Link
              to="/contact"
              className="engix-navbar-contact"
            >
              Contact Us
            </Link>

            <button
              type="button"
              className="engix-navbar-mobile-button"
              onClick={() => setOpen((previous) => !previous)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? (
                <X size={29} strokeWidth={1.8} />
              ) : (
                <Menu size={29} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        <div
          className={`engix-mobile-navigation ${
            open ? 'engix-mobile-navigation-open' : ''
          }`}
        >
          <div className="engix-mobile-navigation-inner">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'engix-mobile-navigation-link active'
                    : 'engix-mobile-navigation-link'
                }
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={23} strokeWidth={1.7} />
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="engix-mobile-contact"
              onClick={() => setOpen(false)}
            >
              <span>Start a conversation</span>
              <ArrowUpRight size={23} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        .engix-navbar {
          --nav-ink: #111318;
          --nav-muted: #565c63;
          --nav-line: #dedfe2;
          --nav-yellow: #fff14f;
          --nav-green: #dff5df;

          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          font-family: inherit;
          background: #ffffff;
          border-bottom: 1px solid var(--nav-line);
          transition:
            background .2s ease,
            box-shadow .2s ease;
        }

        .engix-navbar *,
        .engix-navbar *::before,
        .engix-navbar *::after {
          box-sizing: border-box;
        }

        .engix-navbar.engix-navbar-scrolled {
          background: rgba(255, 255, 255, .97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 6px 22px rgba(17, 19, 24, .06);
        }

        .engix-navbar .engix-navbar-container {
          width: min(1260px, calc(100% - 56px));
          min-height: 78px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: clamp(18px, 2.5vw, 34px);
        }

        .engix-navbar .engix-navbar-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: max-content;
          color: var(--nav-ink);
          text-decoration: none;
          white-space: nowrap;
        }

        .engix-navbar .engix-navbar-logo-icon {
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          display: grid;
          place-items: center;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: transparent;
          border: 0;
        }

        .engix-navbar .engix-navbar-logo-image {
          display: block;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          object-fit: contain;
          object-position: center;
        }

        .engix-navbar .engix-navbar-logo-name {
          margin: 0;
          padding: 0;
          color: var(--nav-ink);
          font-size: 27px;
          font-weight: 750;
          line-height: 1.1;
          letter-spacing: -.035em;
        }

        .engix-navbar .engix-navbar-desktop {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 1.6vw, 24px);
          min-width: 0;
        }

        .engix-navbar .engix-navbar-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 10px 8px;
          color: var(--nav-muted);
          text-decoration: none;
          white-space: nowrap;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          border-radius: 5px;
          transition:
            color .2s ease,
            background .2s ease;
        }

        .engix-navbar .engix-navbar-link:hover {
          color: var(--nav-ink);
          background: #f3faf1;
        }

        .engix-navbar .engix-navbar-link.active {
          color: var(--nav-ink);
          background: var(--nav-green);
        }

        .engix-navbar .engix-navbar-link.active::after {
          content: '';
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: 4px;
          height: 2px;
          border-radius: 2px;
          background: #66845b;
        }

        .engix-navbar .engix-navbar-actions {
          display: flex;
          align-items: center;
          justify-self: end;
          gap: 12px;
        }

        .engix-navbar .engix-navbar-contact {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 10px 20px;
          border: 1px solid var(--nav-ink);
          border-radius: 6px;
          background: var(--nav-ink);
          color: #ffffff;
          text-decoration: none;
          white-space: nowrap;
          font-size: 16px;
          font-weight: 650;
          line-height: 1.5;
          transition:
            background .2s ease,
            color .2s ease;
        }

        .engix-navbar .engix-navbar-contact:hover {
          background: var(--nav-yellow);
          color: var(--nav-ink);
        }

        .engix-navbar .engix-navbar-mobile-button {
          display: none;
          width: 46px;
          height: 46px;
          padding: 0;
          border: 1px solid var(--nav-line);
          border-radius: 6px;
          background: #f3faf1;
          color: var(--nav-ink);
          cursor: pointer;
        }

        .engix-navbar .engix-navbar-mobile-button:hover {
          background: var(--nav-green);
        }

        .engix-navbar .engix-mobile-navigation {
          display: none;
        }

        .engix-navbar a:focus-visible,
        .engix-navbar button:focus-visible {
          outline: 3px solid #66845b;
          outline-offset: 3px;
        }

        .engix-navbar svg {
          flex-shrink: 0;
        }

        @media (min-width: 901px) and (max-width: 1050px) {
          .engix-navbar .engix-navbar-container {
            gap: 14px;
          }

          .engix-navbar .engix-navbar-desktop {
            gap: 6px;
          }

          .engix-navbar .engix-navbar-link {
            padding-inline: 6px;
          }

          .engix-navbar .engix-navbar-contact {
            padding-inline: 14px;
          }
        }

        @media (max-width: 900px) {
          .engix-navbar .engix-navbar-container {
            width: calc(100% - 40px);
            min-height: 72px;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 16px;
          }

          .engix-navbar .engix-navbar-desktop,
          .engix-navbar .engix-navbar-contact {
            display: none;
          }

          .engix-navbar .engix-navbar-logo-icon {
            width: 43px;
            height: 43px;
            flex-basis: 43px;
          }

          .engix-navbar .engix-navbar-logo-name {
            font-size: 25px;
          }

          .engix-navbar .engix-navbar-mobile-button {
            display: grid;
            place-items: center;
          }

          .engix-navbar .engix-mobile-navigation {
            display: block;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            background: #ffffff;
            border-top: 1px solid transparent;
            transition:
              max-height .3s ease,
              opacity .2s ease,
              visibility .2s ease;
          }

          .engix-navbar .engix-mobile-navigation-open {
            max-height: calc(100vh - 73px);
            max-height: calc(100dvh - 73px);
            overflow-y: auto;
            overscroll-behavior: contain;
            opacity: 1;
            visibility: visible;
            border-color: var(--nav-line);
            box-shadow: 0 12px 22px rgba(17, 19, 24, .06);
          }

          .engix-navbar .engix-mobile-navigation-inner {
            width: calc(100% - 40px);
            margin: 0 auto;
            padding: 8px 0 20px;
          }

          .engix-navbar .engix-mobile-navigation-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            min-height: 54px;
            padding: 12px;
            color: var(--nav-ink);
            text-decoration: none;
            border-bottom: 1px solid var(--nav-line);
            font-size: 17px;
            font-weight: 600;
            line-height: 1.5;
            overflow-wrap: anywhere;
          }

          .engix-navbar .engix-mobile-navigation-link:hover {
            background: #f3faf1;
          }

          .engix-navbar .engix-mobile-navigation-link.active {
            background: var(--nav-green);
          }

          .engix-navbar .engix-mobile-contact {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            min-height: 50px;
            margin-top: 16px;
            padding: 12px 16px;
            background: var(--nav-yellow);
            color: var(--nav-ink);
            border: 1px solid var(--nav-yellow);
            border-radius: 6px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 650;
            line-height: 1.5;
          }

          .engix-navbar .engix-mobile-contact:hover {
            background: #fff9ce;
          }
        }

        @media (max-width: 540px) {
          .engix-navbar .engix-navbar-container,
          .engix-navbar .engix-mobile-navigation-inner {
            width: calc(100% - 32px);
          }

          .engix-navbar .engix-navbar-container {
            min-height: 68px;
          }

          .engix-navbar .engix-navbar-logo {
            gap: 8px;
          }

          .engix-navbar .engix-navbar-logo-icon {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
          }

          .engix-navbar .engix-navbar-logo-name {
            font-size: 24px;
          }

          .engix-navbar .engix-navbar-mobile-button {
            width: 44px;
            height: 44px;
          }

          .engix-navbar .engix-mobile-navigation-open {
            max-height: calc(100vh - 69px);
            max-height: calc(100dvh - 69px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .engix-navbar,
          .engix-navbar a,
          .engix-navbar button,
          .engix-navbar .engix-mobile-navigation {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}