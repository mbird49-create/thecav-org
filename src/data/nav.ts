export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/catalog", label: "Catalog" },
  { href: "/research", label: "Research" },
  { href: "/practice", label: "Practice" },
  { href: "/join", label: "Join" },
];

export function isCurrentPath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
