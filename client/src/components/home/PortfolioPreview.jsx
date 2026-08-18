import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

export default function PortfolioPreview() {
  return (
    <>
      <section className="engix-home-work">

        <div className="engix-home-shell">

          <div className="engix-home-work-heading">

            <div>

              <span>
                SELECTED WORK
              </span>

              <h2>
                Technology designed
                for real businesses.
              </h2>

            </div>

            <Link to="/portfolio">
              Explore projects
              <ArrowUpRight size={18} />
            </Link>

          </div>


          <div className="engix-home-work-grid">

            <div className="engix-home-work-image">

              {/* HOME-ONLY IMAGE #2 */}
              <img
                src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1800&q=90"
                alt="Modern technology business workspace"
              />

              <div>

                <span>
                  INTERNATIONAL + DOMESTIC DELIVERY
                </span>

                <strong>
                  From corporate platforms
                  to AI products and
                  service applications.
                </strong>

              </div>

            </div>


            <div className="engix-home-work-copy">

              <span className="engix-home-work-label">
                WHAT WE'VE BUILT
              </span>

              <h3>
                Different businesses.
                Different challenges.
                One engineering mindset.
              </h3>

              <p>
                Our portfolio includes international corporate
                web platforms, AI conversational systems,
                AI interview experiences, service booking applications
                and custom digital products.
              </p>


              <div className="engix-home-project-list">

                <div>
                  <span>01</span>

                  <strong>
                    International technology platforms
                  </strong>
                </div>

                <div>
                  <span>02</span>

                  <strong>
                    AI conversational products
                  </strong>
                </div>

                <div>
                  <span>03</span>

                  <strong>
                    AI interview systems
                  </strong>
                </div>

                <div>
                  <span>04</span>

                  <strong>
                    Service booking ecosystems
                  </strong>
                </div>

                <div>
                  <span>05</span>

                  <strong>
                    Internal product & AI initiatives
                  </strong>
                </div>

              </div>


              <Link to="/portfolio">
                View selected work

                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-work {
          padding: 120px 0;

          background: #ffffff;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-work-heading {
          margin-bottom: 60px;

          display: flex;
          align-items: end;
          justify-content: space-between;

          gap: 40px;
        }

        .engix-home-work-heading span {
          display: inline-block;

          margin-bottom: 18px;

          padding: 7px 11px;

          background: #e9e6ff;

          color: #35304b;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .11em;
        }

        .engix-home-work-heading h2 {
          max-width: 830px;

          margin: 0;

          color: #111318;

          font-size: clamp(3rem,5vw,5.2rem);
          font-weight: 600;

          line-height: .97;
          letter-spacing: -.06em;
        }

        .engix-home-work-heading > a {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          color: #111318;

          text-decoration: none;

          font-size: 13px;
          font-weight: 750;

          border-bottom: 1px solid #111318;

          padding-bottom: 4px;
        }

        .engix-home-work-grid {
          min-height: 680px;

          display: grid;
          grid-template-columns: 1.05fr .95fr;

          border: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-work-image {
          min-height: 680px;

          position: relative;

          overflow: hidden;
        }

        .engix-home-work-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: transform .7s ease;
        }

        .engix-home-work-grid:hover
        .engix-home-work-image img {
          transform: scale(1.025);
        }

        .engix-home-work-image::after {
          content: '';

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 48%,
              rgba(5,5,5,.72)
            );
        }

        .engix-home-work-image > div {
          position: absolute;

          z-index: 2;

          left: 32px;
          right: 32px;
          bottom: 32px;

          color: white;
        }

        .engix-home-work-image span {
          display: inline-block;

          margin-bottom: 10px;

          padding: 5px 8px;

          background: #fff14f;

          color: #050505;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-home-work-image strong {
          display: block;

          max-width: 520px;

          font-size: clamp(2rem,3vw,3rem);

          line-height: 1.04;
          letter-spacing: -.045em;
        }

        .engix-home-work-copy {
          padding: 55px 48px;

          display: flex;
          flex-direction: column;
        }

        .engix-home-work-label {
          width: max-content;

          padding: 6px 9px;

          background: #e9e6ff;

          color: #35304b;

          font-size: 9px;
          font-weight: 800;
        }

        .engix-home-work-copy h3 {
          margin: 25px 0;

          color: #111318;

          font-size: clamp(2.3rem,3.5vw,3.8rem);

          line-height: 1.01;
          letter-spacing: -.055em;
        }

        .engix-home-work-copy > p {
          margin: 0;

          color: #686b72;

          font-size: 14px;
          line-height: 1.75;
        }

        .engix-home-project-list {
          margin-top: 30px;
        }

        .engix-home-project-list > div {
          display: grid;
          grid-template-columns: 45px 1fr;

          gap: 10px;

          padding: 14px 0;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-project-list span {
          color: #898a90;

          font-size: 10px;
        }

        .engix-home-project-list strong {
          color: #34353b;

          font-size: 12px;
          font-weight: 600;
        }

        .engix-home-work-copy > a {
          width: max-content;

          margin-top: auto;
          padding-top: 30px;

          display: inline-flex;
          align-items: center;

          gap: 8px;

          color: #111318;

          text-decoration: none;

          font-size: 13px;
          font-weight: 750;

          border-bottom: 1px solid #111318;
        }


        @media(max-width:950px) {

          .engix-home-work-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-work-image {
            min-height: 520px;
          }

        }


        @media(max-width:650px) {

          .engix-home-work {
            padding: 85px 0;
          }

          .engix-home-work-heading {
            align-items: flex-start;

            flex-direction: column;
          }

          .engix-home-work-image {
            min-height: 400px;
          }

          .engix-home-work-copy {
            min-height: 640px;

            padding: 36px 24px;
          }

        }

      `}</style>
    </>
  );
}