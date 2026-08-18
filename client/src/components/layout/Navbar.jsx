import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/portfolio' },
  { label: 'Contact', path: '/contact' }
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

  return (
    <>
      <header
        className={`engix-navbar ${
          scrolled ? 'engix-navbar-scrolled' : ''
        }`}
      >
        <div className="engix-navbar-container">

          {/* =====================================
              LOGO
          ====================================== */}
          <Link
            to="/"
            className="engix-navbar-logo"
            onClick={() => setOpen(false)}
            aria-label="Engix Home"
          >
            <span className="engix-navbar-logo-icon">
              ✣
            </span>

            <strong className="engix-navbar-logo-name">
              Engix
            </strong>
          </Link>

          {/* =====================================
              DESKTOP NAVIGATION
          ====================================== */}
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

          {/* =====================================
              RIGHT SIDE
          ====================================== */}
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
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? (
                <X
                  size={30}
                  strokeWidth={1.8}
                />
              ) : (
                <Menu
                  size={30}
                  strokeWidth={1.8}
                />
              )}
            </button>

          </div>
        </div>

        {/* =====================================
            MOBILE MENU
        ====================================== */}
        {open && (
          <div className="engix-mobile-navigation">

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
                  <span>
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={24}
                    strokeWidth={1.7}
                  />
                </NavLink>
              ))}

              <Link
                to="/contact"
                className="engix-mobile-contact"
                onClick={() => setOpen(false)}
              >
                <span>
                  Start a conversation
                </span>

                <ArrowUpRight
                  size={24}
                  strokeWidth={1.7}
                />
              </Link>

            </div>

          </div>
        )}
      </header>

      <style>{`

        /* =====================================================
           NAVBAR ROOT
        ====================================================== */

        .engix-navbar {
          position: sticky;
          top: 0;

          z-index: 1000;

          width: 100%;

          background: #ffffff;

          border-bottom:
            1px solid transparent;

          transition:
            box-shadow 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .engix-navbar-scrolled {
          border-bottom:
            1px solid rgba(5, 5, 5, 0.07);

          background:
            rgba(255, 255, 255, 0.98);

          backdrop-filter:
            blur(18px);

          -webkit-backdrop-filter:
            blur(18px);

          box-shadow:
            0 6px 26px rgba(0, 0, 0, 0.04);
        }

        /* =====================================================
           CONTAINER
        ====================================================== */

        .engix-navbar-container {
          width:
            min(1240px, calc(100% - 56px));

          min-height: 82px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            1fr auto 1fr;

          align-items: center;

          gap: 42px;
        }

        /* =====================================================
           LOGO
        ====================================================== */

        .engix-navbar-logo {
          width: max-content;

          display: inline-flex;

          align-items: center;

          gap: 11px;

          color: #111318;

          text-decoration: none;

          transition:
            opacity 0.2s ease;
        }

        .engix-navbar-logo:hover {
          opacity: 0.78;
        }

        .engix-navbar-logo-icon {
          width: 44px;
          height: 44px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          color: #050505;

          font-size: 38px;
          font-weight: 800;

          line-height: 1;

          letter-spacing: -0.05em;
        }

        .engix-navbar-logo-name {
          color: #111318;

          font-size: 24px;

          font-weight: 750;

          line-height: 1;

          letter-spacing: -0.045em;
        }

        /* =====================================================
           DESKTOP NAV
        ====================================================== */

        .engix-navbar-desktop {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 39px;
        }

        .engix-navbar-link {
          position: relative;

          padding:
            31px 0;

          color: #4e5057;

          text-decoration: none;

          font-size: 14px;

          font-weight: 520;

          line-height: 1;

          transition:
            color 0.2s ease;
        }

        .engix-navbar-link:hover {
          color: #050505;
        }

        .engix-navbar-link.active {
          color: #050505;

          font-weight: 650;
        }

        .engix-navbar-link.active::after {
          content: '';

          position: absolute;

          left: 50%;
          bottom: 20px;

          width: 5px;
          height: 5px;

          transform:
            translateX(-50%);

          border-radius: 50%;

          background: #050505;
        }

        /* =====================================================
           RIGHT ACTION
        ====================================================== */

        .engix-navbar-actions {
          justify-self: end;

          display: flex;

          align-items: center;

          gap: 12px;
        }

        .engix-navbar-contact {
          min-height: 43px;

          padding:
            0 22px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          border-radius: 999px;

          background: #050505;

          color: #ffffff;

          text-decoration: none;

          font-size: 13px;

          font-weight: 650;

          white-space: nowrap;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .engix-navbar-contact:hover {
          background: #242424;

          transform:
            translateY(-1px);
        }

        /* =====================================================
           MOBILE MENU BUTTON
        ====================================================== */

        .engix-navbar-mobile-button {
          display: none;

          width: 48px;
          height: 48px;

          padding: 0;

          border: 0;

          background: transparent;

          color: #050505;

          cursor: pointer;
        }

        /* =====================================================
           MOBILE NAVIGATION
        ====================================================== */

        .engix-mobile-navigation {
          display: none;
        }

        /* =====================================================
           TABLET / MOBILE
        ====================================================== */

        @media (max-width: 900px) {

          .engix-navbar-container {
            width:
              calc(100% - 32px);

            min-height: 76px;

            grid-template-columns:
              1fr auto;

            gap: 20px;
          }

          .engix-navbar-desktop,
          .engix-navbar-contact {
            display: none;
          }

          .engix-navbar-mobile-button {
            display: grid;

            place-items: center;
          }

          .engix-mobile-navigation {
            display: block;

            background: #ffffff;

            border-top:
              1px solid rgba(5, 5, 5, 0.07);

            border-bottom:
              1px solid rgba(5, 5, 5, 0.07);
          }

          .engix-mobile-navigation-inner {
            width:
              calc(100% - 32px);

            margin: 0 auto;

            padding:
              5px 0 24px;
          }

          .engix-mobile-navigation-link {
            min-height: 62px;

            display: flex;

            align-items: center;

            justify-content: space-between;

            gap: 20px;

            color: #292a2f;

            text-decoration: none;

            border-bottom:
              1px solid rgba(5, 5, 5, 0.08);

            font-size: 17px;

            font-weight: 520;

            transition:
              color 0.2s ease,
              padding-left 0.2s ease;
          }

          .engix-mobile-navigation-link:hover {
            color: #050505;

            padding-left: 4px;
          }

          .engix-mobile-navigation-link.active {
            color: #050505;

            font-weight: 700;
          }

          .engix-mobile-navigation-link svg {
            flex-shrink: 0;

            color: #050505;
          }

          /* MOBILE CTA */

          .engix-mobile-contact {
            min-height: 58px;

            margin-top: 22px;

            padding:
              0 20px;

            display: flex;

            align-items: center;

            justify-content: space-between;

            gap: 20px;

            background: #050505;

            color: #ffffff;

            text-decoration: none;

            font-size: 15px;

            font-weight: 650;
          }

          .engix-mobile-contact svg {
            flex-shrink: 0;

            color: white;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {

          .engix-navbar-container {
            min-height: 72px;
          }

          .engix-navbar-logo {
            gap: 7px;
          }

          .engix-navbar-logo-icon {
            width: 39px;
            height: 39px;

            font-size: 33px;
          }

          .engix-navbar-logo-name {
            font-size: 21px;
          }

          .engix-navbar-mobile-button {
            width: 44px;
            height: 44px;
          }

          .engix-mobile-navigation-link {
            min-height: 59px;

            font-size: 16px;
          }

        }

      `}</style>
    </>
  );
}