import {
  CheckCircle2
} from 'lucide-react';

export default function EngineeringSection() {
  return (
    <>
      <section className="engix-home-engineering">

        <div className="engix-home-shell">

          <div className="engix-home-engineering-grid">

            <div className="engix-home-engineering-copy">

              <span className="engix-home-label">
                ENGINEERING PRINCIPLES
              </span>

              <h2>
                We think beyond
                the first release.
              </h2>

              <p>
                Software becomes part of how a business operates.
                That makes maintainability, security, reliability and
                future development just as important as the features
                visible on launch day.
              </p>

              <p>
                Our engineering approach focuses on creating foundations
                that can continue evolving instead of becoming harder to
                change every time the business grows.
              </p>


              <div className="engix-home-engineering-points">

                <div>
                  <CheckCircle2 size={20} />
                  <span>Maintainable application architecture</span>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <span>Secure authentication and APIs</span>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <span>Performance-conscious development</span>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <span>Production-ready deployment thinking</span>
                </div>

              </div>

            </div>


            <div className="engix-home-engineering-image">

              {/* HOME-ONLY IMAGE #5 */}
              <img
                src="https://images.unsplash.com/photo-1497366811364-ccf3f5bdb57d?auto=format&fit=crop&w=1800&q=90"
                alt="Professional technology workspace"
              />

              <div>

                <span>
                  BUILDING FOR CONTINUITY
                </span>

                <strong>
                  Launch is a milestone,
                  not the finish line.
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-engineering {
          padding: 120px 0;

          background: #ffffff;

          border-top: 1px solid rgba(17,19,24,.11);
        }

        .engix-home-engineering-grid {
          display: grid;
          grid-template-columns: .95fr 1.05fr;

          gap: 85px;

          align-items: center;
        }

        .engix-home-engineering-copy h2 {
          max-width: 650px;

          margin: 20px 0 0;

          color: #111318;

          font-size: clamp(3rem,4.8vw,5rem);
          font-weight: 600;

          line-height: .97;
          letter-spacing: -.06em;
        }

        .engix-home-engineering-copy > p {
          max-width: 620px;

          margin: 25px 0 0;

          color: #686b72;

          font-size: 15px;
          line-height: 1.78;
        }

        .engix-home-engineering-points {
          margin-top: 35px;
        }

        .engix-home-engineering-points > div {
          padding: 15px 0;

          display: flex;
          align-items: center;

          gap: 10px;

          border-top: 1px solid rgba(17,19,24,.11);

          color: #4e5056;

          font-size: 13px;
        }

        .engix-home-engineering-image {
          height: 640px;

          position: relative;

          overflow: hidden;
        }

        .engix-home-engineering-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .engix-home-engineering-image::after {
          content: '';

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 52%,
              rgba(5,5,5,.7)
            );
        }

        .engix-home-engineering-image > div {
          position: absolute;

          z-index: 2;

          left: 30px;
          bottom: 30px;

          color: white;
        }

        .engix-home-engineering-image span {
          display: inline-block;

          margin-bottom: 10px;

          padding: 5px 8px;

          background: #fff14f;
          color: #050505;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: .1em;
        }

        .engix-home-engineering-image strong {
          display: block;

          max-width: 450px;

          font-size: clamp(2rem,3vw,3rem);

          line-height: 1.03;
          letter-spacing: -.045em;
        }


        @media(max-width:950px) {

          .engix-home-engineering-grid {
            grid-template-columns: 1fr;
          }

          .engix-home-engineering-image {
            height: 520px;
          }

        }


        @media(max-width:650px) {

          .engix-home-engineering {
            padding: 85px 0;
          }

          .engix-home-engineering-image {
            height: 400px;
          }

        }

      `}</style>
    </>
  );
}