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
    {
      id: "agibot-g2",
      name: "AGIBOT G2",
      image: "/agibot-g2.png",
      overview:
        "AGIBOT G2 is a humanoid robot designed for advanced interaction and service tasks in public and commercial environments. It combines human-like movement with AI capabilities to communicate with people, perform demonstrations, and assist visitors in places such as malls, exhibitions, and educational venues.",
      capabilities: [
        {
          title: "Human-Like Interaction",
          description:
            "Communicates with people using voice, gestures, and expressive movements",
        },
        {
          title: "Humanoid Mobility",
          description:
            "Moves with a human-like body structure, enabling natural presence and interaction in public spaces",
        },
        {
          title: "Visitor Assistance",
          description:
            "Can greet visitors, answer questions, provide guidance, and present information",
        },
        {
          title: "Perception and Awareness",
          description:
            "Uses cameras and sensors to detect people, recognize surroundings, and respond to environmental changes",
        },
        {
          title: "Connected Operation",
          description:
            "Can connect to external platforms to receive commands, send status data, and support remote monitoring or control",
        },
      ],
    },
    {
      id: "agibot-d1-pro",
      name: "AGIBOT D1 Pro",
      image: "/agibot-d1-pro.png",
      overview:
        "AGIBOT D1 Pro is an autonomous delivery robot designed to transport items efficiently within indoor environments. It can navigate through buildings such as hotels, offices, hospitals, and shopping centers to deliver goods quickly and safely.",
      capabilities: [
        {
          title: "Autonomous Navigation",
          description:
            "Moves independently through indoor spaces while avoiding obstacles and following optimal routes",
        },
        {
          title: "Delivery Automation",
          description:
            "Transports items such as packages, food, or documents between locations",
        },
        {
          title: "Environmental Awareness",
          description:
            "Uses sensors and cameras to understand its surroundings and operate safely around people",
        },
        {
          title: "User Interaction",
          description:
            "Allows users to send delivery requests and receive items through a simple interface",
        },
        {
          title: "Connected Operation",
          description:
            "Can connect to management platforms to receive delivery tasks, report status, and monitor operations",
        },
      ],
    },
    {
      id: "agibot-c5",
      name: "AGIBOT C5",
      image: "/agibot-c5.png",
      overview:
        "AGIBOT C5 is an autonomous cleaning robot designed for maintaining large indoor spaces such as malls, airports, offices, and commercial facilities. It operates independently to clean floors while navigating safely around people and obstacles.",
      capabilities: [
        {
          title: "Autonomous Cleaning",
          description:
            "Performs automated floor cleaning tasks with minimal human intervention",
        },
        {
          title: "Smart Navigation",
          description:
            "Moves through indoor environments while detecting obstacles and optimizing cleaning routes",
        },
        {
          title: "Environmental Awareness",
          description:
            "Uses sensors to understand surroundings and operate safely in public spaces",
        },
        {
          title: "Efficient Operation",
          description:
            "Designed for continuous cleaning in large facilities to maintain hygiene and operational efficiency",
        },
        {
          title: "Connected Management",
          description:
            "Can connect to management platforms for monitoring, task scheduling, and operational reporting",
        },
      ],
    },
    {
      id: "agibot-a2-w",
      name: "AGIBOT A2-W",
      image: "/agibot-a2-w.png",
      overview:
        "AGIBOT A2-W is a mobile service robot designed to interact with people and assist in public and commercial environments. It combines autonomous mobility with AI-based interaction, allowing it to greet visitors, provide information, and guide people in places such as malls, museums, and exhibition spaces.",
      capabilities: [
        {
          title: "Human Interaction",
          description:
            "Communicates with people through voice and visual recognition to answer questions and provide assistance",
        },
        {
          title: "Autonomous Navigation",
          description:
            "Moves independently through indoor environments while avoiding obstacles and following routes",
        },
        {
          title: "Visitor Assistance",
          description:
            "Can greet guests, provide directions, and present information or announcements",
        },
        {
          title: "Environmental Awareness",
          description:
            "Uses cameras and sensors to detect people and understand its surroundings",
        },
        {
          title: "Connected Operation",
          description:
            "Integrates with external platforms to receive tasks, send status updates, and support remote monitoring",
        },
      ],
    },
  ],
} as const;
