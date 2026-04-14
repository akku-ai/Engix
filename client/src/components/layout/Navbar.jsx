import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/staticData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="logo">E</span>
            <span className="brand-text">Engix</span>
          </Link>

          <nav className="nav-desktop">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Link to="/contact" className="cta">
              Book a call
            </Link>

            <button className="menu-btn" onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-menu">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <Link to="/contact" className="mobile-cta">
              Book a call
            </Link>
          </div>
        )}
      </header>

      {/* ===== INLINE CSS ===== */}
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 999;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: 0.3s ease;
        }

        .navbar.scrolled {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .navbar-inner {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #111;
          color: #fff;
          display: grid;
          place-items: center;
          font-weight: bold;
        }

        .brand-text {
          font-weight: 700;
          color: #111;
        }

        .nav-desktop {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          text-decoration: none;
          color: #555;
          font-size: 0.95rem;
          position: relative;
        }

        .nav-link:hover {
          color: #111;
        }

        .nav-link.active {
          color: #111;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #111;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cta {
          background: #111;
          color: white;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .menu-btn {
          display: none;
          border: none;
          background: transparent;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .nav-desktop,
          .cta {
            display: none;
          }

          .menu-btn {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            padding: 15px;
            gap: 10px;
            background: white;
            border-top: 1px solid #eee;
          }

          .mobile-link {
            text-decoration: none;
            color: #333;
            padding: 10px 0;
          }

          .mobile-cta {
            margin-top: 10px;
            background: #111;
            color: white;
            padding: 12px;
            text-align: center;
            border-radius: 999px;
            text-decoration: none;
          }
        }
      `}</style>
    </>
  );
}