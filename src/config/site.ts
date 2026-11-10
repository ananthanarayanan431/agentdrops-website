/**
 * Site configuration shared by pages (at build time) and scripts (in the
 * browser). Brand facts and navigation live here.
 */

// TODO: set the production domain.
export const SITE_URL = 'https://agentdrops.example';

export const site = {
  name: 'AgentDrops',
  description: 'AgentDrops website.',
};

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [{ label: 'Home', href: '/' }];
