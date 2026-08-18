export default function TestimonialsSection() {
  return (
    <>
      <section className="engix-home-testimonials">

        <div className="engix-home-shell">

          <div className="engix-home-testimonials-heading">

            <span>
              CLIENT EXPERIENCE
            </span>

            <h2>
              Good partnerships are
              built on more than code.
            </h2>

            <p>
              Clear communication, thoughtful execution and dependable
              delivery are as important to us as the technology itself.
            </p>

          </div>

          <div className="engix-home-testimonials-grid">

            <article className="engix-home-testimonial mint-card">

              <span className="engix-home-quote">
                “
              </span>

              <blockquote>
                Engix approached the project with a strong understanding
                of both the business problem and the technical requirements.
              </blockquote>

              <div>
                <strong>
                  International Client
                </strong>

                <span>
                  Business Partner
                </span>
              </div>

            </article>

            <div className="engix-home-testimonial-image">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=88"
                alt="Professional business meeting"
              />
            </div>

            <article className="engix-home-testimonial lavender-card">

              <span className="engix-home-quote">
                “
              </span>

              <blockquote>
                The process stayed structured and communication remained
                clear throughout development.
              </blockquote>

              <div>
                <strong>
                  Domestic Client
                </strong>

                <span>
                  Business Operations
                </span>
              </div>

            </article>

            <article className="engix-home-testimonial peach-card wide-card">

              <span className="engix-home-quote">
                “
              </span>

              <blockquote>
                The team helped us think beyond the original specification
                and make better product decisions before development.
              </blockquote>

              <div>
                <strong>
                  Product Engagement
                </strong>

                <span>
                  Client Feedback
                </span>
              </div>

            </article>

            <article className="engix-home-testimonial yellow-card">

              <span className="engix-home-quote">
                “
              </span>

              <blockquote>
                Professional execution, thoughtful design and reliable
                engineering from planning through launch.
              </blockquote>

              <div>
                <strong>
                  Technology Client
                </strong>

                <span>
                  Project Stakeholder
                </span>
              </div>

            </article>

          </div>

        </div>

      </section>

      <style>{`

        .engix-home-testimonials {
          padding:
            120px 0;

          background:
            #ffffff;

          border-top:
            1px solid rgba(17,19,24,.11);
        }

        .engix-home-testimonials-heading {
          max-width:
            850px;

          margin:
            0 auto 60px;

          text-align:
            center;
        }

        .engix-home-testimonials-heading > span {
          display:
            inline-block;

          margin-bottom:
            17px;

          padding:
            6px 10px;

          background:
            #e9e6ff;

          color:
            #35304b;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            .1em;
        }

        .engix-home-testimonials-heading h2 {
          margin:
            0;

          color:
            #111318;

          font-size:
            clamp(3rem,4.8vw,5rem);

          line-height:
            .96;

          letter-spacing:
            -.06em;

          font-weight:
            600;
        }

        .engix-home-testimonials-heading p {
          max-width:
            650px;

          margin:
            22px auto 0;

          color:
            #686b72;

          font-size:
            15px;

          line-height:
            1.75;
        }

        .engix-home-testimonials-grid {
          display:
            grid;

          grid-template-columns:
            1fr .75fr 1.25fr;

          gap:
            12px;
        }

        .engix-home-testimonial {
          min-height:
            300px;

          padding:
            30px;

          display:
            flex;

          flex-direction:
            column;
        }

        .mint-card {
          background:
            #dff5df;
        }

        .lavender-card {
          background:
            #e9e6ff;
        }

        .peach-card {
          background:
            #f4dfd2;
        }

        .yellow-card {
          background:
            #fff14f;
        }

        .wide-card {
          grid-column:
            span 2;
        }

        .engix-home-quote {
          color:
            #111318;

          font-size:
            55px;

          line-height:
            1;
        }

        .engix-home-testimonial blockquote {
          margin:
            22px 0 35px;

          color:
            #111318;

          font-size:
            clamp(1.15rem,1.6vw,1.45rem);

          line-height:
            1.45;

          letter-spacing:
            -.02em;
        }

        .engix-home-testimonial > div {
          margin-top:
            auto;
        }

        .engix-home-testimonial strong,
        .engix-home-testimonial div > span {
          display:
            block;
        }

        .engix-home-testimonial strong {
          color:
            #111318;

          font-size:
            12px;
        }

        .engix-home-testimonial div > span {
          margin-top:
            4px;

          color:
            #66676d;

          font-size:
            10px;
        }

        .engix-home-testimonial-image {
          min-height:
            300px;

          overflow:
            hidden;
        }

        .engix-home-testimonial-image img {
          width:
            100%;

          height:
            100%;

          object-fit:
            cover;
        }

        @media(max-width:850px) {

          .engix-home-testimonials-grid {
            grid-template-columns:
              1fr 1fr;
          }

          .wide-card {
            grid-column:
              span 2;
          }

        }

        @media(max-width:600px) {

          .engix-home-testimonials {
            padding:
              85px 0;
          }

          .engix-home-testimonials-grid {
            grid-template-columns:
              1fr;
          }

          .wide-card {
            grid-column:
              span 1;
          }

          .engix-home-testimonial-image {
            min-height:
              360px;
          }

        }

      `}</style>
    </>
  );
}