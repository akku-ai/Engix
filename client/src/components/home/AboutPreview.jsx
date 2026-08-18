import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

export default function AboutPreview() {
  return (
    <>
      <section className="engix-home-about">

        <div className="engix-home-shell">

          <div className="engix-home-about-grid">

            <div className="engix-home-about-label-column">
              <span>
                ABOUT ENGIX
              </span>
            </div>


            <div className="engix-home-about-content">

              <h2>
                We help businesses
                turn technology into
                progress.
              </h2>

              <div className="engix-home-about-copy-grid">

                <div>

                  <p>
                    Engix Tech Private Limited works with businesses that
                    need technology to do more than look modern. We help
                    create digital products that improve operations,
                    customer experiences and the way teams work.
                  </p>

                  <p>
                    Our work combines software engineering with product
                    thinking so technology decisions remain connected to
                    real business priorities.
                  </p>

                </div>


                <div className="engix-home-about-points">

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Product strategy and discovery</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>UI/UX and digital product design</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Software, web and mobile engineering</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>AI and intelligent automation</span>
                  </div>

                  <div>
                    <CheckCircle2 size={20} />
                    <span>Backend, cloud and infrastructure</span>
                  </div>

                </div>

              </div>

              <Link to="/about">
                Learn more about Engix

                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-about {
          padding: 120px 0;

          background: #ffffff;
        }

        .engix-home-about-grid {
          display: grid;
          grid-template-columns: .4fr 1.6fr;

          gap: 80px;
        }

        .engix-home-about-label-column > span {
          display: inline-block;

          padding: 7px 11px;

          background: #e9e6ff;

          color: #35304b;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .11em;
        }

        .engix-home-about-content h2 {
          max-width: 950px;

          margin: 0;

          color: #111318;

          font-size: clamp(3rem,5vw,5.3rem);
          font-weight: 600;

          line-height: .97;
          letter-spacing: -.062em;
        }

        .engix-home-about-copy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;

          gap: 60px;

          margin-top: 45px;
        }

        .engix-home-about-copy-grid p {
          margin: 0 0 18px;

          color: #686b72;

          font-size: 15px;
          line-height: 1.78;
        }

        .engix-home-about-points > div {
          display: flex;
          align-items: center;

          gap: 10px;

          padding: 14px 0;

          border-top: 1px solid rgba(17,19,24,.11);

          color: #4d4f55;

          font-size: 13px;
        }

        .engix-home-about-points svg {
          color: #111318;

          flex-shrink: 0;
        }

        .engix-home-about-content > a {
          width: max-content;

          margin-top: 35px;

          display: inline-flex;
          align-items: center;

          gap: 8px;

          color: #111318;

          text-decoration: none;

          font-size: 13px;
          font-weight: 750;

          padding-bottom: 4px;

          border-bottom: 1px solid #111318;
        }


        @media(max-width:900px) {

          .engix-home-about-grid {
            grid-template-columns: 1fr;

            gap: 30px;
          }

        }


        @media(max-width:650px) {

          .engix-home-about {
            padding: 85px 0;
          }

          .engix-home-about-copy-grid {
            grid-template-columns: 1fr;

            gap: 25px;
          }

        }

      `}</style>
    </>
  );
}