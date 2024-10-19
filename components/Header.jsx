import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

/**
 * Header component renders the website's main navigation bar. It includes the logo,
 * navigation links, a "Hire Me" button for larger screens, and a mobile navigation menu.
 *
 * @component
 * @returns {JSX.Element} JSX markup for the header section.
 */
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold ">
            Ammar <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Nav & Hire Me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="text-primary">Hire Me</Button>
          </Link>
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
