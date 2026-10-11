import { Section } from './HomeUI';

const steps = [
  [
    'Discover',
    'Understand your business, audience, current systems and goals.',
  ],
  [
    'Define',
    'Agree priorities, scope, dependencies and a practical delivery plan.',
  ],
  [
    'Design',
    'Shape user journeys, product experiences and campaign direction.',
  ],
  [
    'Build',
    'Develop the solution and prepare content or campaigns in clear stages.',
  ],
  [
    'Validate',
    'Review functionality, integrations, experience and tracking.',
  ],
  [
    'Launch & improve',
    'Deploy, measure, learn and plan the next improvements.',
  ],
];

export default function ProcessSection() {
  return (
    <Section
      id="how-we-work"
      eyebrow="HOW WE WORK"
      title="Clear direction. Room to improve."
      description="A structured process makes progress visible while leaving space to learn and adapt."
    >
      <ol className="eh-process">
        {steps.map(([title, text], index) => (
          <li key={title}>
            <span className="eh-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}