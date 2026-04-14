import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="engix-footer">
        <div className="engix-footer-container">
          <div className="engix-footer-top">
            <div className="engix-footer-brand-col">
              <Link to="/" className="engix-footer-brand">
                <span className="engix-footer-logo">E</span>
                <div>
                  <h3>Engix</h3>
                  <p>Modern IT solutions for ambitious businesses.</p>
                </div>
              </Link>

              <p className="engix-footer-description">
                We design and develop modern websites, software platforms, mobile
                apps, and scalable digital products for international and domestic clients.
              </p>
            </div>

            <div className="engix-footer-links-col">
              <h4>Company</h4>
              <div className="engix-footer-links">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div className="engix-footer-links-col">
              <h4>Services</h4>
              <div className="engix-footer-links">
                <span>Web Development</span>
                <span>Mobile Apps</span>
                <span>Custom Software</span>
                <span>UI/UX Design</span>
                <span>Cloud & DevOps</span>
              </div>
            </div>

            <div className="engix-footer-links-col">
              <h4>Contact</h4>
              <div className="engix-footer-links">
                <a href="mailto:hello@engix.com">hello@engix.com</a>
                <span>India</span>
                <span>Mon - Sat</span>
              </div>
            </div>
          </div>

          <div className="engix-footer-bottom">
            <p>© {new Date().getFullYear()} Engix. All rights reserved.</p>
            <div className="engix-footer-bottom-links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .engix-footer {
          background: #ffffff;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          margin-top: 80px;
        }

        .engix-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 20px 24px;
        }

        .engix-footer-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 42px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        }

        .engix-footer-brand {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .engix-footer-logo {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: #0f172a;
          color: #ffffff;
          font-weight: 700;
          font-size: 1rem;
        }

        .engix-footer-brand h3 {
          margin: 0;
          font-size: 1.15rem;
          color: #0f172a;
          font-weight: 700;
        }

        .engix-footer-brand p {
          margin: 4px 0 0;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .engix-footer-description {
          max-width: 360px;
          color: #475569;
          font-size: 0.97rem;
          line-height: 1.8;
          margin: 0;
        }

        .engix-footer-links-col h4 {
          margin: 0 0 16px;
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 700;
        }

        .engix-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .engix-footer-links a,
        .engix-footer-links span {
          color: #64748b;
          text-decoration: none;
          font-size: 0.96rem;
          line-height: 1.6;
          transition: color 0.2s ease;
        }

        .engix-footer-links a:hover {
          color: #0f172a;
        }

        .engix-footer-bottom {
          padding-top: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .engix-footer-bottom p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .engix-footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .engix-footer-bottom-links a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.92rem;
          transition: color 0.2s ease;
        }

        .engix-footer-bottom-links a:hover {
          color: #0f172a;
        }

        @media (max-width: 1000px) {
          .engix-footer-top {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .engix-footer-container {
            padding: 56px 16px 20px;
          }

          .engix-footer-top {
            grid-template-columns: 1fr;
            gap: 28px;
            padding-bottom: 32px;
          }

          .engix-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}