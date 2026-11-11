import type { MouseEvent } from 'react'

export type ActionHandler = (event: MouseEvent<HTMLButtonElement>, title: string) => void

export const navigation = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const plans = [
  {
    name: 'Starter',
    description: 'For individuals and small teams just getting started.',
    price: '$0 / month',
    features: ['Up to 5 team members', '3 active workflows', 'Real-time sync (standard speed)', '7-day activity history', 'Community support'],
    action: 'Get Started Free',
  },
  {
    name: 'Pro',
    description: 'For fast-moving remote teams scaling their automation.',
    price: '$19 / user / month',
    features: ['Unlimited team members', 'Unlimited AI workflow automations', 'Sub-50ms real-time sync', 'Unlimited activity history', 'Custom integrations (Slack, GitHub, Jira)', 'Priority email & chat support'],
    action: 'Start 14-day Free Trial',
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with strict security & compliance needs.',
    price: 'Custom price',
    features: ['Everything in Pro', 'SAML SSO & Advanced RBAC', 'Dedicated isolated infrastructure', '99.99% Uptime SLA', 'Custom audit logs & E2EE keys', 'Dedicated Account Manager'],
    action: 'Contact Sales',
  },
]

export const questions = [
  {
    id: 'waitlist',
    question: 'How does the Private Beta waitlist work',
    answer: 'Use Join Waitlist to enter your email. This preview saves your request in your browser.',
  },
  {
    id: 'trial',
    question: 'Do I need a credit card to start the 14-day Pro trial?',
    answer: 'You can register your interest in the Pro trial with an email address. This preview does not collect payment details.',
  },
  {
    id: 'security',
    question: "How secure is my team's data on SyncFlow?",
    answer: 'The product design includes end-to-end encryption. The Enterprise plan also lists SAML SSO, advanced role-based access controls, and dedicated infrastructure.',
  },
]
