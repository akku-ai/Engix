import { HomeImage, Points } from './HomeUI';

export default function EngineeringSection() {
  return (
    <section
      id="engineering"
      className="eh-section eh-tinted"
      aria-labelledby="engineering-title"
    >
      <div className="eh-shell eh-split">
        <div>
          <span className="eh-eyebrow">
            ENGINEERING PRINCIPLES
          </span>

          <h2 id="engineering-title">
            Launch is a milestone.
            <br />
            Build for what follows.
          </h2>

          <p>
            Useful software needs a foundation that can be understood,
            operated and improved as requirements change. We consider
            long-term quality throughout development.
          </p>

          <Points
            items={[
              'Maintainable architecture and clear interfaces',
              'Security-conscious authentication and APIs',
              'Performance, testing and error handling',
              'Deployment, monitoring and integration readiness',
            ]}
          />
        </div>

        <figure className="eh-figure">
          <HomeImage
            name="engineering"
            alt="Illustration of application layers, APIs, databases and cloud infrastructure"
          />

          <figcaption>
            Illustrative architecture visualization
          </figcaption>
        </figure>
      </div>
    </section>
  );
}