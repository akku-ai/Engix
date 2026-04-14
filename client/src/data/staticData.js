import {
  Code2,
  Globe,
  Smartphone,
  PenTool,
  Database,
  Cloud,
  ShieldCheck,
  Rocket,
  Layers3,
  Workflow
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export const stats = [
  { value: '2+', label: 'International Clients' },
  { value: '25+', label: 'Projects Delivered' },
  { value: 'Many', label: 'Domestic Clients' },
  { value: 'End-to-End', label: 'Development Support' }
];

export const services = [
  {
    title: 'Web Development',
    description: 'Premium, high-performance websites and web applications built for growth and trust.',
    icon: Globe
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software systems that solve real business problems with scalable architecture.',
    icon: Code2
  },
  {
    title: 'Mobile App Development',
    description: 'Modern Android and iOS app solutions with strong UX and reliable performance.',
    icon: Smartphone
  },
  {
    title: 'UI/UX Design',
    description: 'Professional interfaces and user journeys that improve engagement and clarity.',
    icon: PenTool
  },
  {
    title: 'Backend & API Development',
    description: 'Secure APIs, server-side systems, and database-driven platforms for long-term scale.',
    icon: Database
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deployment pipelines, hosting, monitoring, and operational stability for modern products.',
    icon: Cloud
  }
];

export const whyChooseUs = [
  {
    title: 'Professional Execution',
    description: 'We build polished digital products with attention to quality, usability, and business goals.',
    icon: ShieldCheck
  },
  {
    title: 'Scalable Development',
    description: 'Our systems are designed to remain maintainable and future-ready as your company grows.',
    icon: Layers3
  },
  {
    title: 'Fast Delivery Flow',
    description: 'Structured planning and professional workflows keep projects moving efficiently.',
    icon: Workflow
  },
  {
    title: 'Long-Term Partnership',
    description: 'We support launches, upgrades, maintenance, and ongoing technical improvements.',
    icon: Rocket
  }
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your business, goals, audience, and technical needs.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create clean interfaces and content structure with a premium visual direction.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Frontend and backend implementation is done with clean code and proper architecture.'
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We deploy, optimize, maintain, and support the website after launch.'
  }
];

export const portfolioItems = [
  {
    title: 'Corporate Service Platform',
    category: 'Web Platform',
    description: 'A scalable service website with booking, CRM integration, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'International Client Business Website',
    category: 'Corporate Website',
    description: 'A premium responsive business presence focused on trust, conversion, and brand clarity.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Custom Operations Dashboard',
    category: 'Internal Tool',
    description: 'A business dashboard for managing workflows, projects, and internal operations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
  }
];

export const testimonials = [
  {
    name: 'International Client',
    company: 'Global Business Partner',
    quote: 'Engix delivered a clean, high-quality solution with excellent communication and a very professional approach.'
  },
  {
    name: 'Domestic Client',
    company: 'India-based Enterprise',
    quote: 'Their design sense and development quality were impressive. The final product looked premium and performed well.'
  }
];