import {
    ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Sparkles
} from 'lucide-react';

import {
  Link,
  useLocation
} from 'react-router-dom';

import usePageTitle from '../hooks/usePageTitle';


export default function ThankYou() {
  usePageTitle('Thank You | Engix');

  const location = useLocation();

  const service =
    location.state?.service ||
    'your enquiry';


  return (
    <main className="engix-thankyou-page">


      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="engix-thankyou-header">

        <div className="engix-thankyou-shell engix-thankyou-header-inner">

          <Link
            to="/"
            className="engix-thankyou-logo"
            aria-label="Engix Home"
          >

            <span className="engix-thankyou-logo-icon">

              <img
                src="/logo.png"
                alt="Engix logo"
              />

            </span>


            <strong>
              Engix
            </strong>

          </Link>


          <Link
            to="/"
            className="engix-thankyou-header-action"
          >
            Explore Engix

            <ArrowRight size={18} />
          </Link>

        </div>

      </header>



      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="engix-thankyou-hero">

        <div className="engix-thankyou-shell">

          <div className="engix-thankyou-hero-grid">


            {/* LEFT */}

            <div className="engix-thankyou-copy">


              <div className="engix-thankyou-eyebrow">

                <Sparkles size={17} />

                <span>
                  ENQUIRY RECEIVED
                </span>

              </div>


              <h1>
                Thank you for
                choosing to connect
                with Engix.
              </h1>


              <p className="engix-thankyou-intro">
                Your enquiry has been received successfully.
                Our team will review your requirements and
                connect with you to understand your goals,
                priorities and the most practical way forward.
              </p>


              {/* UPDATED ACTION BUTTONS */}

              <div className="engix-thankyou-actions">


                <Link
                  to="/solutions"
                  className="engix-thankyou-primary"
                >
                  Back to Previous Page

                  <ArrowLeft size={20} />
                </Link>


                <Link
                  to="/"
                  className="engix-thankyou-secondary"
                >
                  Explore Engix

                  <ArrowRight size={20} />
                </Link>


                <a
                  href="https://wa.me/917355985134"
                  target="_blank"
                  rel="noreferrer"
                  className="engix-thankyou-secondary"
                >
                  <MessageCircle size={20} />

                  Speak with our team
                </a>


              </div>

            </div>



            {/* RIGHT IMAGE */}

            <div className="engix-thankyou-visual">

              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1500&q=90"
                alt="Professional team collaboration"
              />


              <div className="engix-thankyou-image-overlay">

                <span>
                  ENGIX
                </span>

                <strong>
                  Strategy, technology
                  and growth working
                  together.
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          WHAT HAPPENS NEXT
      ====================================================== */}

      <section className="engix-thankyou-next-section">

        <div className="engix-thankyou-shell">

          <div className="engix-thankyou-next-heading">

            <span>
              WHAT HAPPENS NEXT
            </span>

            <h2>
              A clear next step,
              without unnecessary complexity.
            </h2>

            <p>
              Our team follows a simple process to understand
              your requirement and determine how Engix can
              support your business effectively.
            </p>

          </div>


          <div className="engix-thankyou-steps">


            <article>

              <span className="engix-thankyou-step-number">
                01
              </span>

              <div className="engix-thankyou-step-icon">
                <CheckCircle2 size={24} />
              </div>

              <h3>
                We review your enquiry
              </h3>

              <p>
                Our team reviews the information you
                submitted to understand your business,
                objectives and requirements.
              </p>

            </article>



            <article>

              <span className="engix-thankyou-step-number">
                02
              </span>

              <div className="engix-thankyou-step-icon">
                <Phone size={24} />
              </div>

              <h3>
                We connect with you
              </h3>

              <p>
                An Engix team member will contact you
                using the details provided in your
                enquiry.
              </p>

            </article>



            <article>

              <span className="engix-thankyou-step-number">
                03
              </span>

              <div className="engix-thankyou-step-icon">
                <ArrowRight size={24} />
              </div>

              <h3>
                We define the next step
              </h3>

              <p>
                We discuss your goals and recommend
                an appropriate strategy, scope and
                practical way forward.
              </p>

            </article>

          </div>

        </div>

      </section>



      {/* =====================================================
          SECOND VISUAL SECTION
      ====================================================== */}

      <section className="engix-thankyou-partnership">

        <div className="engix-thankyou-shell">

          <div className="engix-thankyou-partnership-grid">


            <div className="engix-thankyou-partnership-image">

              <img
                src="https://plus.unsplash.com/premium_photo-1661274151793-173c09ced789?auto=format&fit=crop&w=1500&q=90"
                alt="Business professionals shaking hands"
              />

            </div>


            <div className="engix-thankyou-partnership-copy">

              <span>
                A CONNECTED PARTNER
              </span>


              <h2>
                More than a conversation —
                the beginning of a practical
                business relationship.
              </h2>


              <p>
                Engix combines digital marketing,
                website development, software engineering
                and modern technology execution so
                businesses can work with one connected
                digital team.
              </p>


              <Link
                to="/services"
                className="engix-thankyou-services-link"
              >
                Explore our capabilities

                <ArrowRight size={20} />
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          DIRECT CONTACT
      ====================================================== */}

      <section className="engix-thankyou-contact-section">

        <div className="engix-thankyou-shell">

          <div className="engix-thankyou-contact-card">


            <div className="engix-thankyou-contact-copy">

              <div className="engix-thankyou-contact-label">

                <Clock3 size={19} />

                DIRECT CONTACT

              </div>


              <h2>
                Need to speak with our team directly?
              </h2>


              <p>
                You can reach Engix by phone,
                WhatsApp or email for immediate
                business communication.
              </p>

            </div>



            <div className="engix-thankyou-contact-links">


              <a href="tel:+917355985134">

                <span className="engix-thankyou-contact-icon">
                  <Phone size={21} />
                </span>

                <div>

                  <small>
                    CALL
                  </small>

                  <strong>
                    +91 7355985134
                  </strong>

                </div>

              </a>



              <a
                href="https://wa.me/917355985134"
                target="_blank"
                rel="noreferrer"
              >

                <span className="engix-thankyou-contact-icon">
                  <MessageCircle size={21} />
                </span>

                <div>

                  <small>
                    WHATSAPP
                  </small>

                  <strong>
                    Start a conversation
                  </strong>

                </div>

              </a>



              <a href="mailto:hello@engix.world">

                <span className="engix-thankyou-contact-icon">
                  <Mail size={21} />
                </span>

                <div>

                  <small>
                    EMAIL
                  </small>

                  <strong>
                    hello@engix.world
                  </strong>

                </div>

              </a>


            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="engix-thankyou-footer">

        <div className="engix-thankyou-shell engix-thankyou-footer-inner">

          <div className="engix-thankyou-footer-brand">

            <img
              src="/logo.png"
              alt="Engix"
            />

            <strong>
              Engix
            </strong>

          </div>


          <p>
            © {new Date().getFullYear()} Engix Tech Private Limited.
            All rights reserved.
          </p>

        </div>

      </footer>


    



      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }


        body {
          margin: 0;
        }


        .engix-thankyou-page {
          --ink: #101214;
          --text: #292d31;
          --muted: #62686f;
          --line: #dedfe2;

          --blue: #dcecff;
          --blue-deep: #245986;

          --green: #177837;

          min-height: 100vh;

          background: #ffffff;

          color: var(--ink);

          overflow-x: hidden;
        }


        .engix-thankyou-shell {
          width:
            min(
              1180px,
              calc(100% - 56px)
            );

          margin: 0 auto;
        }



        /* =====================================================
           HEADER
        ====================================================== */

        .engix-thankyou-header {
          position: relative;

          z-index: 20;

          border-bottom:
            1px solid rgba(16,18,20,.08);

          background:
            rgba(255,255,255,.94);

          backdrop-filter:
            blur(18px);

          -webkit-backdrop-filter:
            blur(18px);
        }


        .engix-thankyou-header-inner {
          min-height: 78px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 24px;
        }


        .engix-thankyou-logo {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: var(--ink);

          text-decoration: none;
        }


        .engix-thankyou-logo-icon {
          width: 48px;
          height: 48px;

          display: inline-flex;

          align-items: center;

          justify-content: center;
        }


        .engix-thankyou-logo-icon img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;
        }


        .engix-thankyou-logo strong {
          font-size: 25px;

          letter-spacing: -.045em;
        }


        .engix-thankyou-header-action {
          min-height: 44px;

          padding: 0 17px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          border:
            1px solid rgba(16,18,20,.11);

          border-radius: 999px;

          background: #ffffff;

          color: var(--ink);

          text-decoration: none;

          font-size: 14px;

          font-weight: 700;

          transition:
            transform .2s ease,
            border-color .2s ease;
        }


        .engix-thankyou-header-action:hover {
          transform:
            translateY(-1px);

          border-color:
            rgba(36,89,134,.4);
        }



        /* =====================================================
           HERO
        ====================================================== */

        .engix-thankyou-hero {
          padding:
            76px 0 92px;

          background:
            linear-gradient(
              135deg,
              #ffffff 0%,
              #f8fbff 55%,
              #eef6ff 100%
            );
        }


        .engix-thankyou-hero-grid {
          display: grid;

          grid-template-columns:
            minmax(0,1fr)
            minmax(410px,.82fr);

          align-items: center;

          gap: 68px;
        }


        .engix-thankyou-copy {
          max-width: 660px;
        }


        .engix-thankyou-success-icon {
          width: 74px;
          height: 74px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #e7f6ec;

          color: var(--green);

          box-shadow:
            0 13px 35px
            rgba(23,120,55,.1);
        }


        .engix-thankyou-eyebrow {
          margin-top: 28px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: var(--blue-deep);

          font-size: 13px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-copy h1 {
          max-width: 650px;

          margin:
            18px 0 0;

          font-size:
            clamp(
              3.3rem,
              5.4vw,
              5.4rem
            );

          line-height: .98;

          letter-spacing: -.06em;

          font-weight: 560;
        }


        .engix-thankyou-intro {
          max-width: 625px;

          margin:
            28px 0 0;

          color: var(--muted);

          font-size:
            clamp(
              1.08rem,
              1.45vw,
              1.28rem
            );

          line-height: 1.7;
        }


        .engix-thankyou-confirmation {
          margin-top: 28px;

          padding:
            16px 18px;

          display: flex;

          align-items: flex-start;

          gap: 10px;

          border:
            1px solid #cce7d5;

          border-radius: 11px;

          background: #f1faf4;

          color: #275d38;

          font-size: 14px;

          line-height: 1.55;
        }


        .engix-thankyou-confirmation svg {
          margin-top: 1px;

          flex-shrink: 0;

          color: var(--green);
        }


        .engix-thankyou-actions {
          margin-top: 34px;

          display: flex;

          flex-wrap: wrap;

          gap: 12px;
        }


        .engix-thankyou-primary,
        .engix-thankyou-secondary {
          min-height: 54px;

          padding:
            0 21px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 15px;

          font-weight: 750;

          transition:
            transform .2s ease,
            box-shadow .2s ease;
        }


        .engix-thankyou-primary {
          background:
            var(--ink);

          color: #ffffff;

          box-shadow:
            0 12px 28px
            rgba(16,18,20,.15);
        }


        .engix-thankyou-secondary {
          border:
            1px solid #cdd0d4;

          background: white;

          color: var(--ink);
        }


        .engix-thankyou-primary:hover,
        .engix-thankyou-secondary:hover {
          transform:
            translateY(-2px);
        }



        /* =====================================================
           HERO IMAGE
        ====================================================== */

        .engix-thankyou-visual {
          position: relative;

          min-height: 610px;

          overflow: hidden;

          border-radius: 24px;

          background: #e8edf2;

          box-shadow:
            0 30px 80px
            rgba(20,35,50,.14);
        }


        .engix-thankyou-visual > img {
          width: 100%;
          height: 100%;

          position: absolute;

          inset: 0;

          display: block;

          object-fit: cover;

          object-position: center;
        }


        .engix-thankyou-visual::after {
          content: '';

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(10,13,16,.03) 20%,
              rgba(10,13,16,.68) 100%
            );
        }


        .engix-thankyou-image-overlay {
          position: absolute;

          z-index: 3;

          left: 30px;

          right: 30px;

          bottom: 30px;
        }


        .engix-thankyou-image-overlay > span {
          display: block;

          color:
            rgba(255,255,255,.72);

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .12em;
        }


        .engix-thankyou-image-overlay strong {
          max-width: 390px;

          margin-top: 9px;

          display: block;

          color: #ffffff;

          font-size:
            clamp(
              1.8rem,
              2.8vw,
              2.7rem
            );

          line-height: 1.1;

          letter-spacing: -.04em;
        }


        .engix-thankyou-image-status {
          position: absolute;

          z-index: 4;

          top: 24px;

          right: 24px;

          padding:
            12px 15px;

          display: flex;

          align-items: center;

          gap: 10px;

          border:
            1px solid
            rgba(255,255,255,.38);

          border-radius: 12px;

          background:
            rgba(255,255,255,.91);

          box-shadow:
            0 10px 30px
            rgba(0,0,0,.09);

          backdrop-filter:
            blur(12px);
        }


        .engix-thankyou-status-dot {
          width: 9px;
          height: 9px;

          flex-shrink: 0;

          border-radius: 50%;

          background:
            var(--green);
        }


        .engix-thankyou-image-status small {
          display: block;

          color: #777d83;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .engix-thankyou-image-status strong {
          margin-top: 2px;

          display: block;

          color: var(--ink);

          font-size: 12px;
        }



        /* =====================================================
           NEXT STEPS
        ====================================================== */

        .engix-thankyou-next-section {
          padding:
            100px 0;

          background: #ffffff;
        }


        .engix-thankyou-next-heading {
          max-width: 760px;
        }


        .engix-thankyou-next-heading > span {
          color: var(--blue-deep);

          font-size: 13px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-next-heading h2 {
          margin:
            14px 0 0;

          font-size:
            clamp(
              2.5rem,
              4.3vw,
              4.2rem
            );

          line-height: 1.02;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-thankyou-next-heading p {
          max-width: 670px;

          margin:
            22px 0 0;

          color: var(--muted);

          font-size: 17px;

          line-height: 1.7;
        }


        .engix-thankyou-steps {
          margin-top: 48px;

          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );

          gap: 18px;
        }


        .engix-thankyou-steps article {
          min-height: 260px;

          padding: 28px;

          border:
            1px solid var(--line);

          border-radius: 16px;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #fafbfc
            );

          transition:
            transform .22s ease,
            box-shadow .22s ease;
        }


        .engix-thankyou-steps article:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 18px 46px
            rgba(20,35,50,.08);
        }


        .engix-thankyou-step-number {
          color: #92979c;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-step-icon {
          width: 46px;
          height: 46px;

          margin-top: 28px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 10px;

          background: var(--blue);

          color: var(--blue-deep);
        }


        .engix-thankyou-steps h3 {
          margin:
            20px 0 9px;

          font-size: 20px;

          line-height: 1.25;

          letter-spacing: -.025em;
        }


        .engix-thankyou-steps p {
          margin: 0;

          color: var(--muted);

          font-size: 15px;

          line-height: 1.65;
        }



        /* =====================================================
           PARTNERSHIP
        ====================================================== */

        .engix-thankyou-partnership {
          padding:
            100px 0;

          background:
            #f6f8fa;
        }


        .engix-thankyou-partnership-grid {
          display: grid;

          grid-template-columns:
            minmax(0,.9fr)
            minmax(0,1fr);

          align-items: center;

          gap: 70px;
        }


        .engix-thankyou-partnership-image {
          min-height: 490px;

          overflow: hidden;

          border-radius: 20px;

          box-shadow:
            0 25px 70px
            rgba(20,35,50,.1);
        }


        .engix-thankyou-partnership-image img {
          width: 100%;
          height: 100%;

          min-height: 490px;

          display: block;

          object-fit: cover;
        }


        .engix-thankyou-partnership-copy > span {
          color: var(--blue-deep);

          font-size: 13px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-partnership-copy h2 {
          max-width: 600px;

          margin:
            15px 0 0;

          font-size:
            clamp(
              2.5rem,
              4.2vw,
              4.1rem
            );

          line-height: 1.03;

          letter-spacing: -.055em;

          font-weight: 560;
        }


        .engix-thankyou-partnership-copy p {
          max-width: 580px;

          margin:
            24px 0 0;

          color: var(--muted);

          font-size: 17px;

          line-height: 1.75;
        }


        .engix-thankyou-services-link {
          margin-top: 30px;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          color: var(--ink);

          text-decoration: none;

          font-size: 15px;

          font-weight: 750;
        }



        /* =====================================================
           CONTACT
        ====================================================== */

        .engix-thankyou-contact-section {
          padding:
            90px 0;

          background: #ffffff;
        }


        .engix-thankyou-contact-card {
          padding:
            42px;

          display: grid;

          grid-template-columns:
            minmax(0,.82fr)
            minmax(0,1.18fr);

          align-items: center;

          gap: 50px;

          border-radius: 22px;

          background: var(--ink);

          color: #ffffff;

          box-shadow:
            0 25px 70px
            rgba(16,18,20,.12);
        }


        .engix-thankyou-contact-label {
          display: flex;

          align-items: center;

          gap: 8px;

          color:
            rgba(255,255,255,.65);

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-contact-copy h2 {
          margin:
            13px 0 0;

          font-size:
            clamp(
              2rem,
              3.3vw,
              3.2rem
            );

          line-height: 1.05;

          letter-spacing: -.045em;
        }


        .engix-thankyou-contact-copy p {
          margin:
            16px 0 0;

          color:
            rgba(255,255,255,.66);

          font-size: 15px;

          line-height: 1.65;
        }


        .engix-thankyou-contact-links {
          display: grid;

          gap: 10px;
        }


        .engix-thankyou-contact-links > a {
          min-height: 72px;

          padding:
            12px 16px;

          display: flex;

          align-items: center;

          gap: 13px;

          border:
            1px solid
            rgba(255,255,255,.14);

          border-radius: 12px;

          background:
            rgba(255,255,255,.065);

          color: #ffffff;

          text-decoration: none;

          transition:
            background .2s ease,
            transform .2s ease;
        }


        .engix-thankyou-contact-links > a:hover {
          transform:
            translateX(3px);

          background:
            rgba(255,255,255,.1);
        }


        .engix-thankyou-contact-icon {
          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          border-radius: 10px;

          background:
            rgba(220,236,255,.12);

          color: #cfe4ff;
        }


        .engix-thankyou-contact-links small {
          display: block;

          color:
            rgba(255,255,255,.48);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: .1em;
        }


        .engix-thankyou-contact-links strong {
          margin-top: 3px;

          display: block;

          color: #ffffff;

          font-size: 14px;
        }



        /* =====================================================
           FOOTER
        ====================================================== */

        .engix-thankyou-footer {
          padding:
            24px 0;

          border-top:
            1px solid
            rgba(16,18,20,.08);

          background:
            #ffffff;
        }


        .engix-thankyou-footer-inner {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 24px;
        }


        .engix-thankyou-footer-brand {
          display: flex;

          align-items: center;

          gap: 8px;
        }


        .engix-thankyou-footer-brand img {
          width: 34px;
          height: 34px;

          object-fit: contain;
        }


        .engix-thankyou-footer-brand strong {
          font-size: 18px;
        }


        .engix-thankyou-footer p {
          margin: 0;

          color: #73787e;

          font-size: 13px;
        }



        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 950px) {

          .engix-thankyou-hero-grid {
            grid-template-columns:
              1fr;

            gap: 48px;
          }


          .engix-thankyou-copy {
            max-width: 800px;
          }


          .engix-thankyou-visual {
            min-height: 520px;
          }


          .engix-thankyou-steps {
            grid-template-columns:
              1fr;
          }


          .engix-thankyou-steps article {
            min-height: auto;
          }


          .engix-thankyou-partnership-grid {
            grid-template-columns:
              1fr;

            gap: 45px;
          }


          .engix-thankyou-partnership-image {
            min-height: 450px;
          }


          .engix-thankyou-contact-card {
            grid-template-columns:
              1fr;

            gap: 35px;
          }

        }



        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {

          .engix-thankyou-shell {
            width:
              min(
                100% - 28px,
                1180px
              );
          }


          .engix-thankyou-header-inner {
            min-height: 70px;
          }


          .engix-thankyou-logo-icon {
            width: 42px;
            height: 42px;
          }


          .engix-thankyou-logo strong {
            font-size: 21px;
          }


          .engix-thankyou-header-action {
            min-height: 40px;

            padding:
              0 13px;

            font-size: 12px;
          }


          .engix-thankyou-hero {
            padding:
              45px 0 65px;
          }


          .engix-thankyou-copy h1 {
            font-size:
              clamp(
                2.8rem,
                13vw,
                4rem
              );
          }


          .engix-thankyou-intro {
            font-size: 16px;
          }


          .engix-thankyou-actions {
            flex-direction:
              column;
          }


          .engix-thankyou-primary,
          .engix-thankyou-secondary {
            width: 100%;
          }


          .engix-thankyou-visual {
            min-height: 430px;

            border-radius: 18px;
          }


          .engix-thankyou-image-overlay {
            left: 22px;

            right: 22px;

            bottom: 22px;
          }


          .engix-thankyou-image-status {
            top: 16px;

            right: 16px;
          }


          .engix-thankyou-next-section,
          .engix-thankyou-partnership {
            padding:
              70px 0;
          }


          .engix-thankyou-partnership-image,
          .engix-thankyou-partnership-image img {
            min-height: 350px;
          }


          .engix-thankyou-contact-section {
            padding:
              65px 0;
          }


          .engix-thankyou-contact-card {
            padding:
              28px 22px;

            border-radius: 18px;
          }


          .engix-thankyou-footer-inner {
            flex-direction:
              column;

            text-align: center;
          }

        }

      `}</style>

    </main>
  );
}