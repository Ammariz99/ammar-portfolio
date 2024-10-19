"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
/**
 * Array of navigation links with their respective paths for mobile navigation.
 * @type {Array<{ name: string, path: string }>}
 */
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

/**
 * MobileNav component provides a collapsible menu for mobile devices,
 * containing links to different sections of the website.
 *
 * @component
 * @returns {JSX.Element} JSX markup for mobile navigation.
 */
const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar when a link is clicked
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/*logo*/}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ammar <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/**nav */}
        <nav className="flex flex-col gap-8 justify-center items-center ">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                onClick={handleLinkClick}
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"}  text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
