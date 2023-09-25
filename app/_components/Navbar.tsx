"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVBAR_MENU = [
  {
    href: "/menu",
    title: "Menu",
  },
  {
    href: "/order",
    title: "Order",
  },
  {
    href: "/kitchen",
    title: "Dapur",
  },
  {
    href: "/cashier",
    title: "Kasir",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div
        className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
        role="tablist"
        aria-orientation="horizontal"
        tabIndex={0}
        data-orientation="horizontal"
        style={{ outline: "none" }}
      >
        {NAVBAR_MENU.map((x, i) => (
          <NavbarItem key={i} href={x.href} title={x.title} />
        ))}
      </div>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[100px]">
        Reset
      </button>
    </div>
  );
};
export default Navbar;

interface NavbarItemProps {
  title: string;
  href: string;
}

const NavbarItem = ({ href, title }: NavbarItemProps) => {
  return (
    <Link href={href}>
      <button
        data-state={usePathname() === href ? "active" : "unset"}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm min-w-[100px]"
      >
        {title}
      </button>
    </Link>
  );
};
