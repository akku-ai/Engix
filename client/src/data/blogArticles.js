export const PHOTOS = {
  hero: {
    file: 'knowledge-team.jpg',
    id: 'photo-1522202176988-66273c2fd55f',
    alt: 'Stock photograph of people collaborating with laptops around a table',
  },
  planning: {
    file: 'business-planning.jpg',
    id: 'photo-1551836022-4c4c79ecde51',
    alt: 'Stock photograph of professionals discussing work in an office',
  },
  development: {
    file: 'software-engineering.jpg',
    id: 'photo-1555066931-4365d14bab8c',
    alt: 'Stock photograph of programming code on a computer screen',
  },
  ai: {
    file: 'ai-technology.jpg',
    id: 'photo-1620712943543-bcc4688e7485',
    alt: 'Stock photograph of a humanoid research robot',
  },
  marketing: {
    file: 'marketing-research.jpg',
    id: 'photo-1562577309-4932fdd64cd1',
    alt: 'Stock photograph of decorative social media lettering',
  },
  design: {
    file: 'digital-design.jpg',
    id: 'photo-1507238691740-187a5b1d37b8',
    alt: 'Stock photograph of a laptop used for digital work',
  },
  cloud: {
    file: 'cloud-infrastructure.jpg',
    id: 'photo-1484557052118-f32bd25b45b5',
    alt: 'Stock photograph of server hardware and network cables',
  },
  data: {
    file: 'business-data.jpg',
    id: 'photo-1460925895917-afdab827c52f',
    alt: 'Stock photograph of a laptop displaying business analytics',
  },
};

const NEXT_STEPS = {
  SEO: {
    text:
      'Begin with a small set of commercially important pages. Agree on what needs improving, who will make the changes and how the findings will be reviewed. Keep the review connected to accurate service information and relevant customer actions.',
    checklist: [
      'Identify priority pages and intended audiences',
      'Document current issues and baseline measurements',
      'Assign content and implementation responsibilities',
      'Review enquiries alongside visibility',
    ],
  },

  'AI & Automation': {
    text:
      'Start with a limited pilot and a clearly defined task. Review the quality of the complete workflow, including human checking and handling of exceptions, before expanding the integration.',
    checklist: [
      'Define the task and approved information sources',
      'Record permissions and review requirements',
      'Test representative inputs and failure cases',
      'Agree on ownership, cost reviews and a fallback',
    ],
  },

  'Software Engineering': {
    text:
      'Turn the operational problem into a written scope with acceptance criteria. Review integrations, permissions and maintenance needs early so the first release supports a useful workflow.',
    checklist: [
      'Map users, records and important operations',
      'Agree on acceptance criteria and integration needs',
      'Plan validation, permissions and error handling',
      'Define deployment and maintenance responsibilities',
    ],
  },

  'Web & Mobile': {
    text:
      'Validate the most important user journey before extending the interface. Review how people find the application, complete a task and recover from errors on the devices they actually use.',
    checklist: [
      'Identify the primary user journey',
      'Confirm necessary device and platform capabilities',
      'Test forms, navigation and complete task flows',
      'Plan ownership of releases and ongoing updates',
    ],
  },

  'UI/UX Design': {
    text:
      'Use a representative task to evaluate the interface. Observe where users hesitate, clarify the information they need and revise the design before extending the same patterns across the experience.',
    checklist: [
      'Map the task and information required',
      'Review labels and interaction consistency',
      'Check keyboard access and smaller screens',
      'Record usability findings and design priorities',
    ],
  },

  'Cloud & DevOps': {
    text:
      'Treat release preparation and operational ownership as part of delivery. A documented deployment process becomes more useful when the team also understands monitoring, recovery and its response responsibilities.',
    checklist: [
      'Review production configuration and permissions',
      'Document deployment and recovery steps',
      'Check monitoring and backup restoration',
      'Assign maintenance and incident ownership',
    ],
  },

  'CRM & Data': {
    text:
      'Choose one workflow with clear ownership and useful records. Define reporting needs and data quality checks before migrating information or expanding the system to more teams.',
    checklist: [
      'Map records, handoffs and approval responsibilities',
      'Agree on data definitions and access roles',
      'Verify migration and integration behaviour',
      'Plan reporting, adoption and ongoing reviews',
    ],
  },

  'Paid Ads': {
    text:
      'Review the offer, destination page and follow-up process together. Agree on budget limits and useful conversion definitions before comparing campaign activity with the quality of enquiries.',
    checklist: [
      'Align the offer, audience and landing page',
      'Confirm conversion tracking and follow-up ownership',
      'Set the campaign budget and review schedule',
      'Compare useful enquiries rather than clicks alone',
    ],
  },

  'Digital Marketing': {
    text:
      'Connect communication with your audience’s questions and the way your business delivers its services. Set a realistic publishing process, review factual claims and measure the actions the engagement aims to support.',
    checklist: [
      'Define audience questions and communication themes',
      'Assign drafting, design and approval responsibilities',
      'Keep service details and messaging consistent',
      'Review engagement and relevant enquiries',
    ],
  },
};

function createArticle(
  id,
  category,
  title,
  excerpt,
  image,
  takeaway,
  sections
) {
  return {
    id,
    category,
    title,
    excerpt,
    image,
    takeaway,
    sections: sections.map(([heading, text]) => ({
      heading,
      text,
    })),
    nextSteps: NEXT_STEPS[category],
  };
}

export const ARTICLES = [
  createArticle(
    'email-marketing-planning',
    'Digital Marketing',
    'Email Marketing That Starts with Audience Relevance',
    'Plan useful messages, clear next steps and a manageable review process before increasing email volume.',
    'planning',
    'A relevant message and a clear follow-up process matter more than sending more emails.',
    [
      [
        'Define the purpose of the communication',
        'Decide whether the message introduces a service, shares a useful resource or supports an existing customer relationship. Identify who should receive it and why it is relevant. Keep the content connected to a specific audience need rather than combining several unrelated offers.',
      ],
      [
        'Make the message easy to act on',
        'Use an accurate subject line and explain the purpose early. Keep the main action clear and test the destination page, layout and links. Respect audience preferences and provide a straightforward way to stop receiving marketing communication.',
      ],
      [
        'Review the complete response journey',
        'Assign responsibility for replies and follow-up. Review relevant responses and customer actions alongside email engagement. Use those findings to improve audience selection and messaging, while keeping contact information and campaign records organized.',
      ],
    ]
  ),

  createArticle(
    'brand-consistency-digital-channels',
    'Digital Marketing',
    'Build a Consistent Brand Across Your Digital Channels',
    'Connect service messaging, visual design and customer information across your website and campaigns.',
    'design',
    'Consistency helps customers recognize your business and understand the same offer across channels.',
    [
      [
        'Agree on the core message',
        'Document who the business serves, what it provides and how an engagement begins. Use those points to guide website copy, social posts and advertising. Check that different teams describe the service accurately and avoid adding unsupported claims.',
      ],
      [
        'Create practical visual guidelines',
        'Define logo usage, colours, typography and reusable layouts. Include examples for the website, presentations and campaign creative. Guidelines should help people produce clear work efficiently, while allowing formats to adapt to the channel.',
      ],
      [
        'Keep information current',
        'Assign ownership for service descriptions, contact details and campaign updates. Review landing pages when offers change. A consistent brand experience depends on accurate information as well as recognizable design.',
      ],
    ]
  ),

  createArticle(
    'technical-seo-checklist',
    'SEO',
    'Technical SEO Checklist for a Business Website',
    'Connect crawlability, page structure and performance with the information your customers need.',
    'marketing',
    'Technical improvements work best when they support useful pages and a clear customer journey.',
    [
      [
        'Make important pages discoverable',
        'Identify the service pages and resources that matter to your business. Connect them through descriptive internal links and clear URLs. Review sitemap, robots.txt and canonical settings against your intended page structure. Important content should be accessible without requiring visitors to complete a search form.',
      ],
      [
        'Review the complete experience',
        'Test service pages, articles and enquiry forms on mobile devices and slower connections. Resize images, reserve space for media and investigate unnecessary scripts. Check broken links, redirects and error pages alongside performance so visitors can complete their task.',
      ],
      [
        'Measure useful outcomes',
        'Give each page a descriptive title and a clear main heading. Use Search Console to investigate indexing and search performance. Connect those findings with relevant enquiries rather than treating traffic alone as the final measure of success.',
      ],
    ]
  ),

  createArticle(
    'local-seo-business',
    'SEO',
    'Local SEO: Help Nearby Customers Discover Your Business',
    'Build local visibility around accurate information, relevant content and a straightforward enquiry process.',
    'planning',
    'Represent the locations and services your business genuinely provides.',
    [
      [
        'Keep business information accurate',
        'Review your business name, contact information, hours and service details across your website and relevant listings. If you are eligible for a Google Business Profile, maintain that information too. Avoid presenting unstaffed locations as offices customers can visit.',
      ],
      [
        'Write useful location content',
        'Explain how your service works in the locations you actually cover. Address availability, delivery and practical customer questions. Location pages should offer meaningful information instead of repeating identical copy with a different city name.',
      ],
      [
        'Make contact easy',
        'Test calls, directions and enquiry forms on mobile. Track qualified enquiries and the areas they come from. Use that information to improve the content and service coverage presented on your website.',
      ],
    ]
  ),

  createArticle(
    'seo-or-paid-ads',
    'SEO',
    'SEO or Paid Ads: Where Should Your Business Start?',
    'Compare channel timing, customer intent and measurement before allocating your marketing budget.',
    'marketing',
    'Choose channels around your offer, goals and ability to measure lead quality.',
    [
      [
        'Start with the business goal',
        'Define the audience you want to reach and the action you want them to take. Review the offer and destination page before buying more traffic. Clear service information and a working enquiry process are foundations for either channel.',
      ],
      [
        'Understand the tradeoffs',
        'SEO involves sustained work on content and website quality. Paid campaigns provide distribution while they are funded, but results depend on market conditions, targeting and execution. Neither channel guarantees qualified leads or a particular return.',
      ],
      [
        'Compare meaningful results',
        'Review qualified enquiries, purchases and acquisition costs. A combined approach can use campaign findings to inform content priorities, while useful organic resources answer recurring customer questions over time.',
      ],
    ]
  ),

  createArticle(
    'ai-workflow-automation',
    'AI & Automation',
    'AI Workflow Automation: A Practical Starting Point',
    'Choose a measurable task, define review rules and evaluate a pilot before connecting more workflows.',
    'planning',
    'Begin with one workflow and measure the full process, including human review.',
    [
      [
        'Choose a specific task',
        'Look for repeatable work such as preparing first drafts, extracting document fields or categorising requests. Record current effort and common errors. A narrow task with clear inputs and outputs is easier to evaluate than a broad instruction to automate a department.',
      ],
      [
        'Define limits and permissions',
        'Decide what may happen automatically and what requires approval. Review which data is shared with external providers. Plan for incorrect output, missing information and unavailable integrations before relying on the system.',
      ],
      [
        'Evaluate before expanding',
        'Test representative examples and measure quality, review effort, latency and operating cost. Include exception handling in the evaluation. Expand the pilot only when improvements are repeatable and ownership is clear.',
      ],
    ]
  ),

  createArticle(
    'business-ai-assistant',
    'AI & Automation',
    'What to Plan Before Building a Business AI Assistant',
    'Create a useful assistant with maintained knowledge, appropriate permissions and a route to human support.',
    'ai',
    'An assistant needs reliable source information and clear boundaries.',
    [
      [
        'Define the questions it should answer',
        'Collect common customer or employee questions and identify approved sources. Decide which topics are outside scope. An assistant should communicate uncertainty instead of inventing prices, policies or commitments.',
      ],
      [
        'Separate answers from actions',
        'Answering a question and changing a business record have different consequences. Restrict integrations to the permissions needed for the task. Add review before consequential actions and maintain useful audit records.',
      ],
      [
        'Maintain the knowledge source',
        'Assign responsibility for keeping information current and reviewing failures. Test confusing questions and conflicting information. Provide an obvious way to reach a person when the assistant cannot resolve a request.',
      ],
    ]
  ),

  createArticle(
    'ai-integration-readiness',
    'AI & Automation',
    'Is Your Business Ready for an AI Integration?',
    'Review data quality, workflow ownership and operational requirements before introducing AI.',
    'planning',
    'Readiness depends on the surrounding workflow as much as the model.',
    [
      [
        'Review your information',
        'Identify where relevant data lives, who may access it and whether it is sufficiently accurate for the task. Document missing fields and conflicting records. AI does not remove the need for reliable business information.',
      ],
      [
        'Define a realistic success measure',
        'Agree on what improvement means: less processing time, fewer manual steps or more consistent classification. Include the effort required to check output. A fast draft is useful only when the complete process improves.',
      ],
      [
        'Plan operational ownership',
        'Decide who handles failures, updates instructions and monitors usage costs. Keep a practical manual fallback. Introduce the integration gradually so the team can identify problems before wider adoption.',
      ],
    ]
  ),

  createArticle(
    'custom-software-or-existing-tools',
    'Software Engineering',
    'Custom Software or Existing Tools: Making the Right Choice',
    'Compare workflow fit, integration requirements and the full cost of operating a solution.',
    'development',
    'Choose software around the workflow it needs to support.',
    [
      [
        'Document the operational problem',
        'Map how information moves between customers, teams and systems. Identify repeated data entry and approval delays. These findings provide a concrete basis for evaluating existing products and writing custom development requirements.',
      ],
      [
        'Compare ownership costs',
        'Consider subscriptions, migration, training, integrations and maintenance alongside development cost. Existing tools can suit standard workflows. Custom software becomes worth evaluating when important needs remain difficult to support through configuration.',
      ],
      [
        'Deliver a focused first release',
        'Define the smallest useful version and acceptance criteria. Agree on permissions, code ownership and ongoing support. Expand after users validate the core workflow rather than implementing every planned feature immediately.',
      ],
    ]
  ),

  createArticle(
    'backend-api-planning',
    'Software Engineering',
    'Planning APIs for Reliable Business Applications',
    'Build clear contracts, appropriate access controls and predictable integration behaviour.',
    'development',
    'Reliable APIs need predictable behaviour and permission checks for each protected operation.',
    [
      [
        'Define contracts and permissions',
        'Document requests, responses and error behaviour. Authentication identifies a user, while authorisation determines which records and actions that user can access. Review both when designing protected endpoints.',
      ],
      [
        'Handle integrations deliberately',
        'Validate input and keep secrets outside client code. Define timeouts and retries. Ensure repeated requests cannot accidentally duplicate important actions such as bookings or transactions.',
      ],
      [
        'Make failures observable',
        'Record useful logs without exposing sensitive information. Monitor error rates and latency. Test critical operations and document recovery procedures so the team can investigate issues consistently.',
      ],
    ]
  ),

  createArticle(
    'web-or-mobile-application',
    'Web & Mobile',
    'Web App or Mobile App: What Should You Build First?',
    'Match your platform to customer behaviour, device capabilities and essential workflows.',
    'design',
    'Platform decisions should follow user needs and required capabilities.',
    [
      [
        'Understand the usage context',
        'Consider whether people need occasional access through a link or repeated use while moving between locations. Desktop workflows may favour the web. Specific device capabilities and frequent mobile tasks may justify a dedicated application.',
      ],
      [
        'List essential capabilities',
        'Document needs for notifications, camera access, location, offline use and payments. Evaluate limitations and maintenance effort before choosing a framework. Validate important assumptions with prototypes.',
      ],
      [
        'Plan shared foundations',
        'Consistent APIs, authentication and data models can support multiple interfaces. Keep the first release focused and test complete user journeys on representative devices before extending to another platform.',
      ],
    ]
  ),

  createArticle(
    'business-website-launch',
    'Web & Mobile',
    'What a Professional Business Website Needs Before Launch',
    'Connect clear content, responsive design and a reliable contact journey.',
    'planning',
    'A useful website explains your business and makes the next step clear.',
    [
      [
        'Explain who you help',
        'Describe your services, audience and delivery approach in direct language. Give important services their own space and answer common questions. Use real examples instead of unsupported performance claims.',
      ],
      [
        'Design across devices',
        'Use readable text, responsive layouts and accessible controls. Optimise images and check the experience on slower connections. Review keyboard navigation and mobile forms alongside visual appearance.',
      ],
      [
        'Verify the visitor journey',
        'Test enquiry delivery, links, redirects and error pages. Review page titles and sharing previews. Assign responsibility for updates and monitoring so the website remains useful after launch.',
      ],
    ]
  ),

  createArticle(
    'ux-design-business-products',
    'UI/UX Design',
    'Design Digital Experiences That Are Easier to Use',
    'Use discovery, clear journeys and accessible interfaces to reduce friction.',
    'design',
    'Useful design helps people understand a product and complete their task.',
    [
      [
        'Start with real tasks',
        'Identify what users need to accomplish and where they struggle. Map the steps before designing screens. This separates essential information from features that add complexity without improving the task.',
      ],
      [
        'Create consistent interactions',
        'Use clear labels, predictable navigation and reusable patterns. Plan for readable contrast, keyboard access and smaller screens. Give forms useful validation and explain how to recover from errors.',
      ],
      [
        'Test and refine',
        'Observe people completing realistic tasks in a prototype. Review hesitation and misunderstandings. Improve those points before extending the design system across the product.',
      ],
    ]
  ),

  createArticle(
    'cloud-deployment-checklist',
    'Cloud & DevOps',
    'Cloud Deployment Essentials Before Your Product Launch',
    'Prepare environments, releases, monitoring and recovery as part of delivery.',
    'cloud',
    'A launch plan should include operations and recovery, alongside deployment.',
    [
      [
        'Prepare production configuration',
        'Separate development and production settings. Review HTTPS, routing, network access and permissions. Use measured workloads to guide resource allocation and document environment changes.',
      ],
      [
        'Make releases repeatable',
        'Define build, verification and deployment steps. Plan database changes with application releases. Keep a rollback or recovery route and clarify who decides whether a release should proceed.',
      ],
      [
        'Own ongoing operations',
        'Monitor availability, errors and resource usage. Configure backups and test restoration. Assign responsibility for updates, incidents and costs so operations continue after launch.',
      ],
    ]
  ),

  createArticle(
    'crm-erp-workflows',
    'CRM & Data',
    'Connect Sales and Operations with Better CRM Workflows',
    'Reduce fragmented information through clear roles, approvals and reporting.',
    'planning',
    'A business system should connect real workflows and preserve clear ownership.',
    [
      [
        'Find the information gaps',
        'Identify records and updates spread across spreadsheets and messages. Document duplicated work and missing handoffs. Use these findings to shape the system’s scope instead of copying a generic feature list.',
      ],
      [
        'Define roles and reporting',
        'Decide who can create, approve, view and edit records. Agree on reporting definitions before building dashboards. Integrations should include a way to investigate failed synchronisation.',
      ],
      [
        'Plan adoption',
        'Clean data before migration and verify imported records. Train users around their tasks. Introduce a manageable workflow first, then expand using feedback from the team.',
      ],
    ]
  ),

  createArticle(
    'database-architecture',
    'CRM & Data',
    'Database Architecture for Applications That Need to Grow',
    'Plan relationships, query patterns and the data lifecycle before complexity increases.',
    'data',
    'Data structures should reflect consistency needs and real application queries.',
    [
      [
        'Model business records',
        'Identify your entities and relationships. Define which changes must remain consistent. Choose a database approach around these requirements rather than selecting technology only because it is familiar.',
      ],
      [
        'Review actual queries',
        'List searches, filters and reports the application needs. Evaluate indexes with representative workloads. Return only necessary data and introduce pagination for growing collections.',
      ],
      [
        'Plan maintenance',
        'Document schema changes, access and retention rules. Test backup restoration. Review whether reporting workloads affect customer-facing operations and adjust the architecture using measured evidence.',
      ],
    ]
  ),

  createArticle(
    'paid-campaign-planning',
    'Paid Ads',
    'Google and Meta Ads: Build Campaigns Around Better Enquiries',
    'Align your audience, offer, landing page and measurement before spending.',
    'marketing',
    'Campaign reports should connect advertising activity with qualified business outcomes.',
    [
      [
        'Define a useful conversion',
        'Decide whether success means an enquiry, booking or purchase. Establish tracking and a process for reviewing quality. A submitted form is not automatically a qualified opportunity.',
      ],
      [
        'Connect the advertisement and destination',
        'Keep the message consistent from advertisement to landing page. Explain the offer and make the next action clear. Test the full experience on mobile before launching.',
      ],
      [
        'Control spend and review quality',
        'Set budget limits and compare focused variations. Review qualified outcomes and acquisition costs alongside clicks. Profitability should be measured against real results rather than promised in advance.',
      ],
    ]
  ),

  createArticle(
    'landing-page-campaign-checklist',
    'Paid Ads',
    'A Landing Page Checklist for Your Next Campaign',
    'Give campaign visitors a focused page that answers questions and supports action.',
    'marketing',
    'The destination page should continue the promise made by your advertisement.',
    [
      [
        'Keep the message focused',
        'Match the page headline to the campaign’s offer and audience. Explain what is provided and who it helps. Remove unnecessary competing actions when they distract from the purpose of the page.',
      ],
      [
        'Make the action easy',
        'Use clear form labels and ask for information needed at the current stage. Add helpful error messages. Verify that submissions reach the responsible team and that follow-up ownership is clear.',
      ],
      [
        'Measure the complete funnel',
        'Test event tracking and review enquiries after submission. Check page performance across devices. Improve the page using demonstrated friction and lead quality, rather than appearance alone.',
      ],
    ]
  ),

  createArticle(
    'social-media-content-strategy',
    'Digital Marketing',
    'A Social Media Content Strategy Your Team Can Sustain',
    'Build useful themes, a workable publishing process and meaningful reporting.',
    'marketing',
    'Consistent publishing needs clear ownership and topics your audience finds useful.',
    [
      [
        'Begin with customer questions',
        'Collect questions from sales and project conversations. Use them for service explanations, educational posts and practical examples. Choose topics your team can discuss with confidence.',
      ],
      [
        'Create a realistic process',
        'Assign drafting, design, approval and reply responsibilities. Choose a schedule the team can maintain. Adapt ideas to each platform instead of repeating identical posts without context.',
      ],
      [
        'Review relevant outcomes',
        'Use reach and engagement to understand distribution. Also examine useful conversations and qualified enquiries. Refine the content based on what helps your intended audience understand the business.',
      ],
    ]
  ),

  createArticle(
    'content-audit-business-website',
    'Digital Marketing',
    'How to Run a Useful Content Audit for Your Website',
    'Find outdated, duplicated and incomplete content before adding more pages.',
    'planning',
    'Improve existing content around customer needs before expanding the website.',
    [
      [
        'Build a page inventory',
        'List important URLs, their purpose and intended audience. Review accuracy, duplication and missing information. Identify content that no longer reflects your services or delivery approach.',
      ],
      [
        'Agree on improvement priorities',
        'Decide which pages need updating, consolidation or removal. Preserve useful information and plan redirects when URLs change. Prioritise pages that support important customer questions and business tasks.',
      ],
      [
        'Assign ownership and review',
        'Give each update a responsible person and review process. Check factual claims and examples. Track the impact after publication and schedule future reviews so content remains accurate.',
      ],
    ]
  ),
];

export const CATEGORIES = [
  'All',
  ...new Set(ARTICLES.map((article) => article.category)),
];

export function readingTime(article) {
  const text = [
    article.title,
    article.excerpt,
    article.takeaway,
    ...article.sections.flatMap((section) => [
      section.heading,
      section.text,
    ]),
    article.nextSteps.text,
    ...article.nextSteps.checklist,
  ].join(' ');

  const minutes = Math.max(
    1,
    Math.ceil(text.trim().split(/\s+/).length / 200)
  );

  return `${minutes} min read`;
}

export function filterArticles(query, category) {
  const keyword = query.trim().toLowerCase();

  return ARTICLES.filter((article) => {
    const matchesCategory =
      category === 'All' || article.category === category;

    const searchable = [
      article.title,
      article.category,
      article.excerpt,
      article.takeaway,
      ...article.sections.flatMap((section) => [
        section.heading,
        section.text,
      ]),
      article.nextSteps.text,
      ...article.nextSteps.checklist,
    ]
      .join(' ')
      .toLowerCase();

    return (
      matchesCategory && searchable.includes(keyword)
    );
  });
}