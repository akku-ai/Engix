import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      <section className="engix-home-hero">
        <div className="engix-home-shell">

          <div className="engix-home-hero-grid">

            <div className="engix-home-hero-copy">

              <span className="engix-home-label">
                SOFTWARE • AI • DIGITAL PRODUCTS
              </span>

              <h1>
                Technology built
                for businesses
                moving forward.
              </h1>

              <p className="engix-home-hero-lead">
                Engix Tech Private Limited is a software engineering and
                digital product company helping businesses turn ideas,
                operational challenges and growth opportunities into
                dependable technology.
              </p>

              <p className="engix-home-hero-secondary">
                We combine product strategy, UI/UX, software engineering,
                artificial intelligence, mobile development, backend systems
                and cloud technology to design and build products that are
                useful today and ready for what comes next.
              </p>

              <div className="engix-home-hero-actions">

                <Link
                  to="/contact"
                  className="engix-home-primary-btn"
                >
                  Start a conversation

                  <ArrowRight
                    size={21}
                    strokeWidth={1.8}
                  />
                </Link>

                <Link
                  to="/portfolio"
                  className="engix-home-secondary-btn"
                >
                  Explore our work

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.8}
                  />
                </Link>

              </div>

              <div className="engix-home-hero-trust">

                <div>
                  <CheckCircle2 size={20} strokeWidth={1.7} />
                  <span>International delivery experience</span>
                </div>

                <div>
                  <CheckCircle2 size={20} strokeWidth={1.7} />
                  <span>End-to-end product engineering</span>
                </div>

                <div>
                  <CheckCircle2 size={20} strokeWidth={1.7} />
                  <span>Long-term technology support</span>
                </div>

              </div>

            </div>


            <div className="engix-home-hero-visual">

              {/* HOME-ONLY IMAGE #1 */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90"
                alt="Modern professional technology workspace"
              />

              <div className="engix-home-hero-overlay">

                <span>
                  ENGIX TECH PRIVATE LIMITED
                </span>

                <strong>
                  Strategy.
                  <br />
                  Experience.
                  <br />
                  Engineering.
                </strong>

              </div>


              <div className="engix-home-hero-floating-card">

                <small>
                  WHAT WE BRING TOGETHER
                </small>

                <div>
                  <span>Product</span>
                  <span>Software</span>
                  <span>AI</span>
                  <span>Cloud</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <style>{`

        .engix-home-hero {
          padding: 90px 0 0;
          background: #ffffff;
          overflow: hidden;
        }

        .engix-home-shell {
          width: min(1240px, calc(100% - 56px));
          margin: 0 auto;
        }

        .engix-home-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 74px;
          align-items: end;
        }

        .engix-home-hero-copy {
          padding: 70px 0 105px;
        }

        .engix-home-label {
          display: inline-block;
          width: max-content;
          padding: 7px 11px;
          margin-bottom: 26px;

          background: #e9e6ff;
          color: #35304b;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
        }

        .engix-home-hero h1 {
          max-width: 850px;

          margin: 0;

          color: #111318;

          font-size: clamp(4.2rem, 7vw, 7.4rem);
          font-weight: 600;

          line-height: .88;
          letter-spacing: -.072em;
        }

        .engix-home-hero-lead {
          max-width: 700px;

          margin: 38px 0 0;

          color: #45474e;

          font-size: clamp(1.12rem, 1.5vw, 1.35rem);
          font-weight: 500;

          line-height: 1.68;
        }

        .engix-home-hero-secondary {
          max-width: 680px;

          margin: 17px 0 0;

          color: #6b6d74;

          font-size: 15px;
          line-height: 1.78;
        }

        .engix-home-hero-actions {
          display: flex;
          flex-wrap: wrap;

          gap: 13px;

          margin-top: 38px;
        }

        .engix-home-primary-btn,
        .engix-home-secondary-btn {
          min-height: 57px;

          padding: 0 22px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          text-decoration: none;

          font-size: 14px;
          font-weight: 700;

          transition:
            transform .2s ease,
            background .2s ease;
        }

        .engix-home-primary-btn {
          background: #050505;
          color: #ffffff;
        }

        .engix-home-primary-btn svg {
          color: #fff14f;
        }

        .engix-home-secondary-btn {
          background: #ffffff;

          border: 1px solid rgba(5,5,5,.16);

          color: #050505;
        }

        .engix-home-primary-btn:hover,
        .engix-home-secondary-btn:hover {
          transform: translateY(-2px);
        }

        .engix-home-secondary-btn:hover {
          background: #f7f7f7;
        }

        .engix-home-hero-trust {
          display: flex;
          flex-wrap: wrap;

          gap: 14px 22px;

          margin-top: 38px;
        }

        .engix-home-hero-trust > div {
          display: flex;
          align-items: center;

          gap: 8px;

          color: #64666c;

          font-size: 12px;
        }

        .engix-home-hero-trust svg {
          color: #111318;
        }

        .engix-home-hero-visual {
          min-height: 720px;

          position: relative;

          overflow: hidden;

          background: #ececec;
        }

        .engix-home-hero-visual > img {
          width: 100%;
          height: 720px;

          object-fit: cover;

          display: block;

          transition: transform .7s ease;
        }

        .engix-home-hero-visual:hover > img {
          transform: scale(1.025);
        }

        .engix-home-hero-visual::after {
          content: '';

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 42%,
              rgba(5,5,5,.74)
            );
        }

        .engix-home-hero-overlay {
          position: absolute;

          z-index: 2;

          left: 32px;
          bottom: 35px;

          color: white;
        }

        .engix-home-hero-overlay span {
          display: inline-block;

          margin-bottom: 10px;
          padding: 5px 8px;

          background: #fff14f;
          color: #050505;

          font-size: 9px;
          font-weight: 800;
          letter-spacing: .1em;
        }

        .engix-home-hero-overlay strong {
          display: block;

          font-size: clamp(2rem, 3vw, 3rem);

          line-height: 1.02;
          letter-spacing: -.045em;
        }

        .engix-home-hero-floating-card {
          position: absolute;

          z-index: 3;

          top: 26px;
          right: 26px;

          width: 230px;

          padding: 20px;

          background: rgba(255,255,255,.95);

          backdrop-filter: blur(10px);
        }

        .engix-home-hero-floating-card small {
          color: #85868b;

          font-size: 8px;
          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-home-hero-floating-card > div {
          display: flex;
          flex-wrap: wrap;

          gap: 6px;

          margin-top: 15px;
        }

        .engix-home-hero-floating-card span {
          padding: 7px 9px;

          border: 1px solid rgba(5,5,5,.1);

          color: #33353a;

          font-size: 10px;
        }

        .engix-home-hero-floating-card span:nth-child(1) {
          background: #e9e6ff;
        }

        .engix-home-hero-floating-card span:nth-child(2) {
          background: #fff14f;
        }

        .engix-home-hero-floating-card span:nth-child(3) {
          background: #dff5df;
        }

        .engix-home-hero-floating-card span:nth-child(4) {
          background: #f4dfd2;
        }


        @media(max-width:1000px) {

          .engix-home-hero-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-hero-copy {
            padding-bottom: 40px;
          }

          .engix-home-hero-visual,
          .engix-home-hero-visual > img {
            min-height: 560px;
            height: 560px;
          }

        }


        @media(max-width:650px) {

          .engix-home-shell {
            width: calc(100% - 32px);
          }

          .engix-home-hero {
            padding-top: 40px;
          }

          .engix-home-hero-copy {
            padding: 45px 0 55px;
          }

          .engix-home-hero h1 {
            font-size: clamp(3.7rem,17vw,5.5rem);
          }

          .engix-home-hero-actions {
            flex-direction: column;
          }

          .engix-home-primary-btn,
          .engix-home-secondary-btn {
            width: 100%;
          }

          .engix-home-hero-trust {
            flex-direction: column;
          }

          .engix-home-hero-visual,
          .engix-home-hero-visual > img {
            min-height: 430px;
            height: 430px;
          }

          .engix-home-hero-floating-card {
            display: none;
          }

          .engix-home-hero-overlay {
            left: 20px;
            right: 20px;
            bottom: 22px;
          }

        }

      `}</style>
    </>
  );
}