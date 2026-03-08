/**
 * SAI AUROSY landing page content - data-driven for easy copy updates.
 */

export const hero = {
  tagline: "Enterprise Robotics Integration",
  h1: "SAI AUROSY",
  h2: "Enterprise Robotics Integration & Deployment",
  subtext:
    "Software and operations layer for intelligent robots. Central Asia & MENA.",
} as const;

export const proofStripItems = [
  "Enterprise integration",
  "Localization",
  "Middleware control",
  "Deployment governance",
] as const;

export const ctaLinks = {
  pilot: "/contact?type=pilot",
  partnership: "/contact?type=partnership",
  enterprise: "/contact?type=enterprise",
} as const;

export const differentiation = {
  title: "Why Not Just Buy Robots Directly?",
  subtitle: "Manufacturers leave critical gaps. We fill them.",
  items: [
    {
      problem: "Localization & workflow",
      answer: "Adapt robots to local languages, workflows, and constraints.",
    },
    {
      problem: "Enterprise integrations",
      answer: "ERP, WMS, MES, CRM—we build and maintain the integration layer.",
    },
    {
      problem: "Safety & governance",
      answer: "Audit logs, priority control, e-stop paths, full accountability.",
    },
    {
      problem: "Local support & SLA",
      answer: "Regional presence, defined SLAs—not remote-only support.",
    },
  ],
} as const;

export const governanceCards = [
  {
    title: "Command Governance",
    description: "Priority control, permissions, full auditability for every command.",
    icon: "ShieldCheck",
  },
  {
    title: "Observability",
    description: "Telemetry, logs, incident response—fleet health visibility.",
    icon: "Activity",
  },
  {
    title: "Data & Security",
    description: "Segmentation, least privilege, on-prem and hybrid ready.",
    icon: "Lock",
  },
  {
    title: "Deployment Discipline",
    description: "SOPs, training, support, continuous optimization.",
    icon: "ClipboardList",
  },
] as const;

export const industries = [
  "Retail & Shopping Malls",
  "Industrial & Logistics",
  "Healthcare",
  "Education & Research",
  "Hospitality",
  "Other",
] as const;

export const deploymentSteps = [
  "Feasibility Assessment",
  "Controlled Pilot",
  "Localization & Integration",
  "Operational Deployment",
  "Scaling & Optimization",
] as const;

export const inquiryTypes = [
  { value: "pilot", label: "Pilot Inquiry" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "enterprise", label: "Enterprise Inquiry" },
] as const;

export const CALENDLY_PLACEHOLDER = "https://calendly.com/sai-aurosy";

export const store = {
  title: "Store",
  subtitle: "Order robots",
  telegramSalesUrl: "https://t.me/Arif_Mammadov1",
  orderMessageTemplate: "Хочу заказать робота",
  products: [
    {
      id: "agibot-x2",
      name: "Agibot X2",
      image: "/agibot-x2.png",
      overview:
        "AGIBOT X2 is an intelligent service robot designed to interact naturally with people. It can see, hear, speak, move, and respond to human actions in real environments.",
      capabilities: [
        {
          title: "Voice interaction",
          description: "Understands speech and responds verbally",
        },
        {
          title: "Visual recognition",
          description: "Detects people and objects using cameras",
        },
        {
          title: "Touch interaction",
          description: "Responds to physical input",
        },
        {
          title: "Facial expression and gestures",
          description: "Expresses emotions and reactions",
        },
      ],
    },
    {
      id: "agibot-a2-ultra",
      name: "AGIBOT A2 Ultra",
      image: "/agibot-a2-ultra.png",
      overview:
        "AGIBOT A2 Ultra is an intelligent service robot designed to interact with people and assist in public and commercial environments. It can see, hear, speak, and move autonomously, allowing it to greet visitors, provide information, and guide people in places such as shopping malls, museums, and offices.",
      capabilities: [
        {
          title: "Human Interaction",
          description:
            "Communicates through voice, visual recognition, and expressive behavior",
        },
        {
          title: "Autonomous Navigation",
          description:
            "Moves independently indoors and avoids obstacles while following routes",
        },
        {
          title: "Visitor Assistance",
          description:
            "Greets guests, answers questions, and guides people to locations",
        },
        {
          title: "Environmental Perception",
          description:
            "Uses cameras and sensors to detect people and understand surroundings",
        },
        {
          title: "Connectivity",
          description:
            "Connects to external platforms to receive tasks and send operational data",
        },
      ],
    },
  ],
} as const;
