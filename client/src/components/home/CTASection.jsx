import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  Mail,
  Phone
} from 'lucide-react';

export default function CTASection() {
  return (
    <>
      <section className="engix-home-final">

        <div className="engix-home-shell">

          <div className="engix-home-final-grid">

            <div>

              <span className="engix-home-label">
                START A CONVERSATION
              </span>

              <h2>
                Have a technology
                challenge worth
                solving?
              </h2>

              <p>
                Tell us what you are building, improving or trying
                to automate. We can help define the product,
                experience and engineering approach.
              </p>

            </div>


            <div className="engix-home-final-actions">

              <Link to="/contact">
                Talk to Engix

                <span>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.8}
                  />
                </span>
              </Link>


              <div className="engix-home-final-contact">

                <a href="mailto:hello@engix.world">

                  <Mail
                    size={21}
                    strokeWidth={1.6}
                  />

                  <span>
                    hello@engix.world
                  </span>

                </a>


                <a href="tel:+917355985134">

                  <Phone
                    size={21}
                    strokeWidth={1.6}
                  />

                  <span>
                    +91 7355985134
                  </span>

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-final {
          position: relative;

          padding: 110px 0;

          background: #ffffff;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-final::before {
          content: '';

          position: absolute;

          top: 0;
          left: 50%;

          width: min(1240px,calc(100% - 56px));
          height: 5px;

          transform: translateX(-50%);

          background: #fff14f;
        }

        .engix-home-final-grid {
          display: grid;
          grid-template-columns: 1.35fr .65fr;

          gap: 80px;

          align-items: end;
        }

        .engix-home-final h2 {
          max-width: 870px;

          margin: 20px 0 0;

          color: #111318;

          font-size: clamp(3.3rem,5.5vw,5.8rem);
          font-weight: 600;

          line-height: .95;
          letter-spacing: -.065em;
        }

        .engix-home-final-grid > div:first-child > p {
          max-width: 680px;

          margin: 27px 0 0;

          color: #686b72;

          font-size: 15px;
          line-height: 1.75;
        }

        .engix-home-final-actions > a {
          min-height: 60px;

          padding: 7px 8px 7px 22px;

          display: inline-flex;
          align-items: center;

          gap: 15px;

          border-radius: 999px;

          background: #050505;
          color: #ffffff;

          text-decoration: none;

          font-size: 14px;
          font-weight: 750;
        }

        .engix-home-final-actions > a > span {
          width: 43px;
          height: 43px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          background: #fff14f;
          color: #050505;
        }

        .engix-home-final-contact {
          margin-top: 28px;
        }

        .engix-home-final-contact a {
          padding: 14px 0;

          display: flex;
          align-items: center;

          gap: 10px;

          border-top: 1px solid rgba(17,19,24,.11);

          color: #55575d;

          text-decoration: none;

          font-size: 12px;
        }

        .engix-home-final-contact svg {
          color: #111318;
        }


        @media(max-width:900px) {

          .engix-home-final-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }

        }


        @media(max-width:650px) {

          .engix-home-final {
            padding: 85px 0;
          }

          .engix-home-final::before {
            width: calc(100% - 32px);
          }

          .engix-home-final-actions > a {
            width: 100%;

            justify-content: space-between;
          }

        }

      `}</style>
    </>
  );
}