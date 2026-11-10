/**
 * Site configuration shared by pages (at build time) and scripts (in the
 * browser). Brand facts and navigation live here.
 */

export const SITE_URL = 'https://agentdrops.tech';

export const site = {
  name: 'AgentDrops',
  tagline: 'We experiment first. Then we drop it for you.',
  description:
    'AgentDrops is a research-first AI company. We build agentic products, voice agents and custom software, tested in our lab before we build them for you.',
  email: 'hello@agentdrops.tech',
};

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: 'Services', href: '/services/' },
  { label: 'Lab', href: '/lab/' },
  { label: 'Company', href: '/company/' },
];

export const CONTACT: NavItem = { label: 'Contact', href: '/contact/' };
