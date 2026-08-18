import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
    MapPin,
} from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="engix-footer">
        <div className="engix-footer-shell">

          {/* =========================================
              TOP BRAND / LINKS
          ========================================== */}
          <div className="engix-footer-top">

            {/* BRAND */}
            <div className="engix-footer-brand">
              <Link
                to="/"
                className="engix-footer-logo"
              >
                <span className="engix-footer-logo-icon">
                  ✣
                </span>

                <strong>
                  Engix
                </strong>
              </Link>

              <p className="engix-footer-description">
                We design and engineer digital products,
                software platforms, mobile applications and
                AI-enabled solutions for businesses that want
                technology built with clarity, quality and purpose.
              </p>

              <div className="engix-footer-socials">
                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={22}
                    strokeWidth={1.7}
                  />
                </a>

                <a
                  href="#"
                  aria-label="GitHub"
                >
                  <Github
                    size={22}
                    strokeWidth={1.7}
                  />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                >
                  <Instagram
                    size={22}
                    strokeWidth={1.7}
                  />
                </a>
              </div>
            </div>

            {/* COMPANY */}
            <div className="engix-footer-column">
              <h4>
                Company
              </h4>

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About Us
              </Link>

              <Link to="/portfolio">
                Projects
              </Link>

              <Link to="/services">
                Services
              </Link>

              <Link to="/contact">
                Contact
              </Link>
            </div>

            {/* SERVICES */}
            <div className="engix-footer-column">
              <h4>
                Capabilities
              </h4>

              <span>
                Software Engineering
              </span>

              <span>
                Product & UI/UX Design
              </span>

              <span>
                Web & Mobile Development
              </span>

              <span>
                AI & Automation
              </span>

              <span>
                Backend & API Engineering
              </span>

              <span>
                Cloud & DevOps
              </span>
            </div>

            {/* CONTACT */}
         <div className="engix-footer-column">
  <h4>
    Connect
  </h4>

  <a
    href="mailto:hello@engix.world"
    className="engix-footer-contact-item"
  >
    <Mail
      size={21}
      strokeWidth={1.7}
    />

    <span>
      hello@engix.world
    </span>
  </a>

  <a
    href="tel:+917355985134"
    className="engix-footer-contact-item"
  >
    <Phone
      size={21}
      strokeWidth={1.7}
    />

    <span>
      +91 7355985134
    </span>
  </a>

  <a
    href="tel:+918960958818"
    className="engix-footer-contact-item"
  >
    <Phone
      size={21}
      strokeWidth={1.7}
    />

    <span>
      +91 8960958818
    </span>
  </a>

  <div className="engix-footer-contact-item engix-footer-location-item">
    <MapPin
      size={21}
      strokeWidth={1.7}
    />

    <span>
      552 Sahityanaka Mod, Ramnagar, Varanasi
    </span>
  </div>
</div>

          </div>

          {/* =========================================
              LARGE CTA
          ========================================== */}
          <div className="engix-footer-cta">

            <div className="engix-footer-cta-copy">
              <span>
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's build what's next.
              </h2>
            </div>

            <Link
              to="/contact"
              className="engix-footer-cta-button"
            >
              Start a project

              <ArrowUpRight
                size={22}
                strokeWidth={1.7}
              />
            </Link>

          </div>

          {/* =========================================
              BOTTOM
          ========================================== */}
          <div className="engix-footer-bottom">

            <p>
              © {new Date().getFullYear()} Engix Tech Private Limited.
              All rights reserved.
            </p>

            <div className="engix-footer-bottom-links">
              <Link to="/privacy">
                Privacy Policy
              </Link>

              <Link to="/terms">
                Terms & Conditions
              </Link>
            </div>

          </div>

        </div>
      </footer>

      <style>{`

        /* =====================================================
           FOOTER ROOT
        ====================================================== */

        .engix-footer {
          background: #050505;

          color: #ffffff;

          padding:
            82px 28px 28px;
        }

        .engix-footer-shell {
          width:
            min(1240px, 100%);

          margin: 0 auto;
        }

        /* =====================================================
           TOP AREA
        ====================================================== */

        .engix-footer-top {
          display: grid;

          grid-template-columns:
            1.45fr
            .7fr
            1fr
            1fr;

          gap: 70px;

          padding-bottom: 70px;
        }

        /* =====================================================
           BRAND
        ====================================================== */

        .engix-footer-brand {
          max-width: 440px;
        }

        .engix-footer-logo {
          width: max-content;

          display: inline-flex;

          align-items: center;

          gap: 11px;

          color: #ffffff;

          text-decoration: none;
        }

        .engix-footer-logo-icon {
          width: 45px;
          height: 45px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          color: #ffffff;

          font-size: 38px;

          font-weight: 800;

          line-height: 1;
        }

        .engix-footer-logo strong {
          color: #ffffff;

          font-size: 27px;

          font-weight: 750;

          letter-spacing: -.045em;
        }

        .engix-footer-description {
          max-width: 420px;

          margin:
            28px 0 0;

          color: #a5a5aa;

          font-size: 14px;

          line-height: 1.75;
        }

        /* =====================================================
           SOCIALS
        ====================================================== */

        .engix-footer-socials {
          display: flex;

          gap: 10px;

          margin-top: 30px;
        }

        .engix-footer-socials a {
          width: 46px;
          height: 46px;

          display: grid;

          place-items: center;

          border:
            1px solid #333333;

          border-radius: 50%;

          color: #ffffff;

          text-decoration: none;

          transition:
            background .2s ease,
            color .2s ease,
            border-color .2s ease,
            transform .2s ease;
        }

        .engix-footer-socials a:hover {
          background: #fff14f;

          color: #050505;

          border-color: #fff14f;

          transform:
            translateY(-2px);
        }

        /* =====================================================
           COLUMNS
        ====================================================== */

        .engix-footer-column {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 11px;
        }

        .engix-footer-column h4 {
          margin:
            0 0 17px;

          color: #ffffff;

          font-size: 14px;

          font-weight: 650;
        }

        .engix-footer-column > a,
        .engix-footer-column > span {
          color: #929297;

          text-decoration: none;

          font-size: 13px;

          line-height: 1.65;

          transition:
            color .2s ease;
        }

        .engix-footer-column > a:hover {
          color: #ffffff;
        }

        /* =====================================================
           CONTACT
        ====================================================== */

        .engix-footer-contact-item {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .engix-footer-contact-item svg {
          flex-shrink: 0;

          color: #fff14f;
        }

        .engix-footer-contact-item span {
          color: #929297;

          font-size: 13px;
        }

        .engix-footer-contact-item:hover span {
          color: #ffffff;
        }

        .engix-footer-location {
          margin-top: 8px;
        }

        /* =====================================================
           LARGE CTA
        ====================================================== */

        .engix-footer-cta {
          padding:
            52px 0;

          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 40px;

          border-top:
            1px solid #282828;

          border-bottom:
            1px solid #282828;
        }

        .engix-footer-cta-copy > span {
          display: block;

          margin-bottom: 14px;

          color: #fff14f;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: .13em;
        }

        .engix-footer-cta h2 {
          margin: 0;

          color: #ffffff;

          font-size:
            clamp(3rem, 5vw, 5.4rem);

          line-height: .95;

          letter-spacing: -.06em;

          font-weight: 550;
        }

        .engix-footer-cta-button {
          min-height: 56px;

          padding:
            0 23px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          flex-shrink: 0;

          background: #fff14f;

          color: #050505;

          text-decoration: none;

          font-size: 14px;

          font-weight: 750;

          transition:
            transform .2s ease,
            background .2s ease;
        }

        .engix-footer-cta-button:hover {
          background: #fff36c;

          transform:
            translateY(-2px);
        }

        /* =====================================================
           BOTTOM
        ====================================================== */

        .engix-footer-bottom {
          padding-top: 27px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;
        }

        .engix-footer-bottom p {
          margin: 0;

          color: #66666b;

          font-size: 11px;

          line-height: 1.5;
        }

        .engix-footer-bottom-links {
          display: flex;

          align-items: center;

          gap: 23px;
        }

        .engix-footer-bottom-links a {
          color: #66666b;

          text-decoration: none;

          font-size: 11px;

          transition:
            color .2s ease;
        }

        .engix-footer-bottom-links a:hover {
          color: #ffffff;
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1000px) {

          .engix-footer-top {
            grid-template-columns:
              repeat(2, 1fr);

            gap:
              50px 40px;
          }

          .engix-footer-brand {
            grid-column:
              1 / -1;

            max-width: 620px;
          }

        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 650px) {

          .engix-footer {
            padding:
              65px 16px 25px;
          }

          .engix-footer-top {
            grid-template-columns: 1fr;

            gap: 38px;

            padding-bottom: 50px;
          }

          .engix-footer-brand {
            grid-column:
              span 1;
          }

          .engix-footer-logo-icon {
            width: 41px;
            height: 41px;

            font-size: 34px;
          }

          .engix-footer-logo strong {
            font-size: 24px;
          }

          .engix-footer-description {
            font-size: 13px;
          }

          .engix-footer-socials a {
            width: 44px;
            height: 44px;
          }

          .engix-footer-cta {
            align-items: flex-start;

            flex-direction: column;

            padding:
              42px 0;
          }

          .engix-footer-cta-button {
            width: 100%;

            justify-content: space-between;
          }

          .engix-footer-bottom {
            align-items: flex-start;

            flex-direction: column;
          }

        }

        @media (max-width: 430px) {

          .engix-footer-bottom-links {
            align-items: flex-start;

            flex-direction: column;

            gap: 9px;
          }

        }

      `}</style>
    </>
  );
}