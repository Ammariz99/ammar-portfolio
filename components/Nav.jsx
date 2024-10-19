"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
/**
 * Array of navigation links with their respective paths.
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
  // {
  //   name: "contact",
  //   path: "/contact ",
  // },
];
/**
 * Nav component renders the navigation menu with links to different sections
 * of the website. It highlights the currently active link by comparing the path.
 *
 * @component
 * @returns {JSX.Element} JSX markup for the navigation menu.
 */
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
