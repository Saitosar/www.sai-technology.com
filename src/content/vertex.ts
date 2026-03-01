/**
 * SAI Vertex landing page content - data-driven for easy copy updates.
 */

export const hero = {
  h1: "SAI Vertex",
  h2: "Enterprise Robotics Integration & Deployment",
  subtext:
    "We build the software and operational layer that turns intelligent robots into enterprise-ready assets across Central Asia & MENA.",
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
  subtitle:
    "Buying from a global manufacturer or local distributor leaves critical gaps. We fill them.",
  items: [
    {
      problem: "Localization & workflow adaptation",
      answer:
        "We adapt robots to local languages, workflows, and operational constraints—not just plug-and-play.",
    },
    {
      problem: "Enterprise integrations",
      answer:
        "ERP, WMS, MES, CRM, IAM, SOC/monitoring—we build and maintain the integration layer.",
    },
    {
      problem: "Safety & command governance",
      answer:
        "Audit logs, priority control, e-stop paths, and clear accountability for every command.",
    },
    {
      problem: "Deployment playbook",
      answer:
        "Pilot → scale methodology, training, SOPs, and continuous optimization.",
    },
    {
      problem: "Local support & SLA-ready operations",
      answer:
        "Regional presence, defined SLAs, and operational discipline—not remote-only support.",
    },
  ],
} as const;

export const governanceCards = [
  {
    title: "Command Governance",
    description:
      "Priority control, permissions, and full auditability for every robot command.",
    icon: "ShieldCheck",
  },
  {
    title: "Observability",
    description:
      "Telemetry, logs, and incident response—visibility into fleet health and behavior.",
    icon: "Activity",
  },
  {
    title: "Data & Security Posture",
    description:
      "Segmentation, least privilege, on-prem and hybrid deployment readiness.",
    icon: "Lock",
  },
  {
    title: "Deployment Discipline",
    description:
      "SOPs, training, support, and continuous optimization for sustained operations.",
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

export const CALENDLY_PLACEHOLDER = "https://calendly.com/sai-vertex";
