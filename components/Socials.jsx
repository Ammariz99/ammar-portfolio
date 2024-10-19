"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

/**
 * Social media links and icons array.
 * Each object contains an icon and a path to the respective social media platform.
 */

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Ammariz99" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/syed-ammar-bukhari/",
  },
  // { icon: <FaTwitter />, path: "" },
  {
    icon: <FaUpwork />,
    path: "https://www.upwork.com/freelancers/~01909c6f8c91ddc381",
  },
  {
    icon: <TbBrandFiverr />,
    path: "https://www.fiverr.com/ammariz99?public_mode=true",
  },
];

/**
 * Socials component renders social media icons as links.
 * The icons can be styled using `containerStyles` and `iconStyles` passed as props.
 *
 * @param {Object} props - The component props.
 * @param {string} props.containerStyles - Tailwind CSS class names for the container.
 * @param {string} props.iconStyles - Tailwind CSS class names for individual icons.
 * @returns {JSX.Element} Social media icons as links.
 */
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
