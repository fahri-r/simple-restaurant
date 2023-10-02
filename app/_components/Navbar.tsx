"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [showModal, setShowModal] = useState(false);
  const handleReset = () => {
    localStorage.clear();
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <div className="relative z-10">
          <div className="fixed inset-0 bg-black bg-opacity-25" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                  {NAVBAR_MENU.map((x, i) => (
                    <NavbarItem key={i} href={x.href} title={x.title} />
                  ))}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="w-full md:w-fit inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2"
                    onClick={handleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <button
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
          onClick={handleModal}
        >
          <Bars3Icon />
        </button>
        <div
          className="hidden md:flex inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
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
        <button
          onClick={handleReset}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[100px]"
        >
          Reset
        </button>
      </div>
    </>
  );
};
export default Navbar;

interface NavbarItemProps {
  title: string;
  href: string;
}

const NavbarItem = ({ href, title }: NavbarItemProps) => {
  return (
    <Link href={href} className="w-full">
      <button
        data-state={usePathname() === href ? "active" : "unset"}
        className="w-full md:inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm min-w-[100px]"
      >
        {title}
      </button>
    </Link>
  );
};
