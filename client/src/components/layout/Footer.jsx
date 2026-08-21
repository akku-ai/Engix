import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
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


            {/* =====================================
                BRAND
            ====================================== */}

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



            {/* =====================================
                COMPANY
            ====================================== */}

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



            {/* =====================================
                CAPABILITIES
            ====================================== */}

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



            {/* =====================================
                CONNECT
            ====================================== */}

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
          position: relative;

          overflow: hidden;

          padding:
            82px 28px 28px;

          background:
            #050505;

          color:
            #ffffff;
        }


        /*
          Very subtle glow so footer
          doesn't look completely flat.
        */

        .engix-footer::before {
          content: '';

          position: absolute;

          width: 430px;
          height: 430px;

          top: -310px;
          right: -150px;

          border-radius: 50%;

          background:
            rgba(255, 241, 79, 0.055);

          pointer-events: none;
        }


        .engix-footer-shell {
          position: relative;

          z-index: 2;

          width:
            min(
              1240px,
              100%
            );

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

          gap:
            70px;

          padding-bottom:
            70px;
        }



        /* =====================================================
           BRAND
        ====================================================== */

        .engix-footer-brand {
          max-width:
            440px;
        }



        /* =====================================================
           FOOTER LOGO
        ====================================================== */

        .engix-footer-logo {
          width:
            max-content;

          min-width:
            0;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            10px;

          flex-shrink:
            0;

          color:
            #ffffff;

          text-decoration:
            none;

          white-space:
            nowrap;

          transition:
            opacity .2s ease,
            transform .2s ease;
        }


        .engix-footer-logo:hover {
          opacity:
            .9;

          transform:
            translateY(-1px);
        }



        /* =====================================================
           LOGO IMAGE WRAPPER

           IMPORTANT:
           NO WHITE BACKGROUND
        ====================================================== */

        .engix-footer-logo-icon {
          width:
            50px;

          height:
            50px;

          min-width:
            50px;

          min-height:
            50px;

          max-width:
            50px;

          max-height:
            50px;

          flex:
            0 0 50px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          margin:
            0;

          padding:
            0;

          overflow:
            hidden;

          box-sizing:
            border-box;

          background:
            transparent !important;

          background-color:
            transparent !important;

          border:
            none;

          border-radius:
            0;

          box-shadow:
            none;
        }



        /* =====================================================
           ACTUAL LOGO IMAGE
        ====================================================== */

        .engix-footer-logo-image {
          width:
            100%;

          height:
            100%;

          max-width:
            50px;

          max-height:
            50px;

          display:
            block;

          object-fit:
            contain;

          object-position:
            center;

          margin:
            0;

          padding:
            0;

          flex-shrink:
            0;

          background:
            transparent !important;

          background-color:
            transparent !important;

          border:
            none;

          box-shadow:
            none;
        }



        /* =====================================================
           ENGIX NAME
        ====================================================== */

        .engix-footer-logo-name {
          display:
            block;

          margin:
            0;

          padding:
            0;

          color:
            #ffffff;

          font-size:
            27px;

          font-weight:
            750;

          line-height:
            1;

          letter-spacing:
            -.045em;
        }



        /* =====================================================
           DESCRIPTION
        ====================================================== */

        .engix-footer-description {
          max-width:
            420px;

          margin:
            28px 0 0;

          color:
            #a5a5aa;

          font-size:
            15px;

          line-height:
            1.75;
        }



        /* =====================================================
           SOCIAL ICONS
        ====================================================== */

        .engix-footer-socials {
          display:
            flex;

          gap:
            10px;

          margin-top:
            30px;
        }


        .engix-footer-socials a {
          width:
            46px;

          height:
            46px;

          display:
            grid;

          place-items:
            center;

          border:
            1px solid #333333;

          border-radius:
            50%;

          color:
            #ffffff;

          text-decoration:
            none;

          background:
            rgba(255,255,255,.018);

          transition:
            background .2s ease,
            color .2s ease,
            border-color .2s ease,
            transform .2s ease;
        }


        .engix-footer-socials a:hover {
          background:
            #fff14f;

          color:
            #050505;

          border-color:
            #fff14f;

          transform:
            translateY(-2px);
        }



        /* =====================================================
           FOOTER COLUMNS
        ====================================================== */

        .engix-footer-column {
          display:
            flex;

          flex-direction:
            column;

          align-items:
            flex-start;

          gap:
            12px;
        }


        .engix-footer-column h4 {
          margin:
            0 0 18px;

          color:
            #ffffff;

          font-size:
            14px;

          font-weight:
            700;

          letter-spacing:
            .015em;
        }


        .engix-footer-column > a,
        .engix-footer-column > span {
          color:
            #929297;

          text-decoration:
            none;

          font-size:
            14px;

          line-height:
            1.65;

          transition:
            color .2s ease,
            transform .2s ease;
        }


        .engix-footer-column > a:hover {
          color:
            #ffffff;

          transform:
            translateX(2px);
        }



        /* =====================================================
           CONTACT ITEMS
        ====================================================== */

        .engix-footer-contact-item {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            10px;
        }


        .engix-footer-contact-item svg {
          flex-shrink:
            0;

          margin-top:
            1px;

          color:
            #fff14f;
        }


        .engix-footer-contact-item span {
          color:
            #929297;

          font-size:
            14px;

          line-height:
            1.6;
        }


        a.engix-footer-contact-item:hover span {
          color:
            #ffffff;
        }


        .engix-footer-location-item {
          margin-top:
            6px;
        }



        /* =====================================================
           LARGE CTA
        ====================================================== */

        .engix-footer-cta {
          padding:
            54px 0;

          display:
            flex;

          align-items:
            flex-end;

          justify-content:
            space-between;

          gap:
            40px;

          border-top:
            1px solid #282828;

          border-bottom:
            1px solid #282828;
        }


        .engix-footer-cta-copy > span {
          display:
            block;

          margin-bottom:
            14px;

          color:
            #fff14f;

          font-size:
            12px;

          font-weight:
            800;

          letter-spacing:
            .13em;
        }


        .engix-footer-cta h2 {
          margin:
            0;

          color:
            #ffffff;

          font-size:
            clamp(
              3rem,
              5vw,
              5.4rem
            );

          line-height:
            .95;

          letter-spacing:
            -.06em;

          font-weight:
            550;
        }


        .engix-footer-cta-button {
          min-height:
            57px;

          padding:
            0 24px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            10px;

          flex-shrink:
            0;

          border-radius:
            8px;

          background:
            #fff14f;

          color:
            #050505;

          text-decoration:
            none;

          font-size:
            14px;

          font-weight:
            750;

          transition:
            transform .2s ease,
            background .2s ease,
            box-shadow .2s ease;
        }


        .engix-footer-cta-button:hover {
          background:
            #fff36c;

          transform:
            translateY(-2px);

          box-shadow:
            0 12px 28px
            rgba(255,241,79,.11);
        }



        /* =====================================================
           BOTTOM
        ====================================================== */

        .engix-footer-bottom {
          padding-top:
            28px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            25px;
        }


        .engix-footer-bottom p {
          margin:
            0;

          color:
            #707075;

          font-size:
            12px;

          line-height:
            1.5;
        }


        .engix-footer-bottom-links {
          display:
            flex;

          align-items:
            center;

          gap:
            23px;
        }


        .engix-footer-bottom-links a {
          color:
            #707075;

          text-decoration:
            none;

          font-size:
            12px;

          transition:
            color .2s ease;
        }


        .engix-footer-bottom-links a:hover {
          color:
            #ffffff;
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

            max-width:
              620px;
          }


          /*
            TABLET LOGO
          */

          .engix-footer-logo-icon {
            width:
              47px;

            height:
              47px;

            min-width:
              47px;

            min-height:
              47px;

            max-width:
              47px;

            max-height:
              47px;

            flex-basis:
              47px;
          }


          .engix-footer-logo-image {
            max-width:
              47px;

            max-height:
              47px;
          }


          .engix-footer-logo-name {
            font-size:
              26px;
          }

        }



        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 650px) {

          .engix-footer {
            padding:
              64px 16px 25px;
          }


          .engix-footer-top {
            grid-template-columns:
              1fr;

            gap:
              40px;

            padding-bottom:
              50px;
          }


          .engix-footer-brand {
            grid-column:
              auto;

            max-width:
              100%;
          }



          /*
            MOBILE LOGO
          */

          .engix-footer-logo {
            gap:
              8px;
          }


          .engix-footer-logo-icon {
            width:
              43px;

            height:
              43px;

            min-width:
              43px;

            min-height:
              43px;

            max-width:
              43px;

            max-height:
              43px;

            flex-basis:
              43px;
          }


          .engix-footer-logo-image {
            max-width:
              43px;

            max-height:
              43px;
          }


          .engix-footer-logo-name {
            font-size:
              24px;
          }


          .engix-footer-description {
            max-width:
              100%;

            font-size:
              14px;
          }


          .engix-footer-socials {
            margin-top:
              25px;
          }


          .engix-footer-socials a {
            width:
              44px;

            height:
              44px;
          }


          .engix-footer-column h4 {
            margin-bottom:
              12px;
          }


          /*
            CTA
          */

          .engix-footer-cta {
            align-items:
              flex-start;

            flex-direction:
              column;

            padding:
              43px 0;

            gap:
              29px;
          }


          .engix-footer-cta h2 {
            font-size:
              clamp(
                2.7rem,
                12vw,
                4.4rem
              );
          }


          .engix-footer-cta-button {
            width:
              100%;

            box-sizing:
              border-box;

            justify-content:
              space-between;
          }


          /*
            BOTTOM
          */

          .engix-footer-bottom {
            align-items:
              flex-start;

            flex-direction:
              column;

            gap:
              17px;
          }


          .engix-footer-bottom-links {
            flex-wrap:
              wrap;
          }

        }



        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 430px) {

          .engix-footer-logo-icon {
            width:
              40px;

            height:
              40px;

            min-width:
              40px;

            min-height:
              40px;

            max-width:
              40px;

            max-height:
              40px;

            flex-basis:
              40px;
          }


          .engix-footer-logo-image {
            max-width:
              40px;

            max-height:
              40px;
          }


          .engix-footer-logo-name {
            font-size:
              23px;
          }


          .engix-footer-bottom-links {
            align-items:
              flex-start;

            flex-direction:
              column;

            gap:
              9px;
          }

        }

      `}</style>

    </>
  );
}