import { Action, HomeImage, Section } from './HomeUI';

const projects = [
  'Corporate & digital platforms',
  'AI conversational products',
  'AI interview experiences',
  'Service booking applications',
];

export default function PortfolioPreview() {
  return (
    <Section
      id="selected-work"
      eyebrow="PRODUCTS & PLATFORMS"
      title="Different challenges. Thoughtful engineering."
      description="Explore Engix’s work across digital platforms, AI products and business applications."
    >
      <div className="eh-split">
        <figure className="eh-figure">
          <HomeImage
            name="platform"
            alt="Illustration of application interfaces and connected service workflows"
          />

          <figcaption>
            Illustrative product visualization
          </figcaption>
        </figure>

        <div>
          <h3 className="eh-feature-title">
            From complex requirements to useful digital experiences.
          </h3>

          <p>
            Our work spans corporate web platforms, conversational AI
            products, interview experiences and service booking
            applications.
          </p>

          <ul className="eh-projects">
            {projects.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>

          <Action to="/portfolio" secondary>
            View selected work
          </Action>
        </div>
      </div>
    </Section>
  );
}