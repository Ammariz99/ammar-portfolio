"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

/**
 * Home component is the main landing page of the website, showcasing the introduction
 * of Syed Ammar Bukhari, a software engineer. It includes a profile photo, a description,
 * social media links, and an option to download the CV.
 *
 * @component
 * @returns {JSX.Element} JSX markup for the home page.
 */

const Home = () => {
  /**
   * handleDownloadCV function creates a download link for the CV and triggers
   * the download process when the "Download CV" button is clicked.
   *
   * @function
   */
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; 
    link.download = "Syed_Ammar_Bukhari_CV.pdf"; 
    link.click();
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none mt-8 ">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Syed Ammar Bukhari</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I'm a passionate web developer with a focus on creating dynamic, responsive websites and intuitive user experiences.Explore my work and let's collaborate on something amazing!
            </p>
            {/**Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
