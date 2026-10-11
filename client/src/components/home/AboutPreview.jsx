import { Action, Points } from './HomeUI';

export default function AboutPreview() {
  return (
    <section
      id="about-engix"
      className="eh-section"
      aria-labelledby="about-engix-title"
    >
      <div className="eh-shell eh-split">
        <div>
          <span className="eh-eyebrow">ABOUT ENGIX</span>

          <h2 id="about-engix-title">
            Technology and growth.
            <br />
            Built around your business.
          </h2>

          <p>
            Disconnected systems, manual processes and an unclear
            online presence can slow down a growing business. We help
            turn those challenges into a practical digital plan.
          </p>

          <Action to="/about" secondary>
            Meet Engix
          </Action>
        </div>

        <div className="eh-panel">
          <h3>From the first idea to what comes next.</h3>

          <p>
            We combine product thinking with software engineering and
            digital marketing, keeping decisions connected to your
            users, operations and business priorities.
          </p>

          <Points
            items={[
              'Define the right product and experience',
              'Build connected software and intelligent workflows',
              'Reach your audience through search and campaigns',
              'Improve your platform as your business evolves',
            ]}
          />
        </div>
      </div>
    </section>
  );
}