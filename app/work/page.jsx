"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import { FaHtml5, FaCss3, FaJs, FaVuejs,  } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

/**
 * Project object type.
 * 
 * @typedef {Object} Project
 * @property {string} num - The project number.
 * @property {string} category - The project category.
 * @property {string} title - The project title.
 * @property {string} description - The project description.
 * @property {Array<Object>} stack - The technologies used in the project.
 * @property {string} image - The image URL for the project.
 * @property {string} live - The live demo URL of the project.
 * @property {string} github - The GitHub repository URL of the project.
 */

/**
 * List of projects to display in the Work component.
 * 
 * @type {Project[]}
 */

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "ChatWave",
    description: "ChatWave is a platform where users can connect, share their thoughts, and engage with each other through posts and comments.",
    stack: [
      { name: "Html 5", 
        icon: <FaHtml5 className="text-[#dd4b25]"/>
       },
        { 
          name: "Tailwind Css",
          icon: <SiTailwindcss className="text-[#1DC0CD]"/> 

        },
        { name:  "javascript",
          icon: <FaJs className="text-[#F7E025]"/> 
        }
      ],
    image: "/assets/work/chatwave-main.png",
    live: "https://ammariz99.github.io/ChatWave/",
    github: "https://github.com/Ammariz99/ChatWave.git",
  },
  {
    num: "02",
    category: "Frontend",
    title: "weatherApp",
    description: "This is Weather app that retrieve current weather data for a specific location. Display temperature, humidity, wind speed, and weather conditions.",
    stack: [
      { 
        name: "Vue.js",
        icon: <FaVuejs className="text-[#47BA87]" />
       },
        { 
          name: "Tailwind css",
          icon: <SiTailwindcss className="text-[#1DC0CD]" />,
         }
        ],
    image: "/assets/work/weather-app.png",
    live: "https://ammariz99.github.io/WeatherApp/",
    github: "https://github.com/Ammariz99/WeatherApp.git",
  },
  {
    num: "03",
    category: "Frontend",
    title: "portfolio",
    description: "Welcome to my portfolio! I specialize in crafting clean, responsive websites and user-centered digital experiences.",
    stack: [
      { 
        name: "Next.js",
        icon: <RiNextjsLine />
       },
        { 
          name: "Tailwind css",
          icon: <SiTailwindcss className="text-[#1DC0CD]" />,
         }
        ],
    image: "/assets/work/portfolio-design.png",
    live: "",
    github: "",
  },
];

/**
 * Work component that displays a portfolio of projects using Swiper for sliding functionality.
 * 
 * @component
 * @returns {JSX.Element} The rendered Work section containing project details and images.
 */
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  /**
   * Handles the slide change event in the Swiper component.
   * Updates the current project based on the active slide index.
   * 
   * @param {Object} swiper - The Swiper instance.
   * @param {number} swiper.activeIndex - The index of the currently active slide.
   * @returns {void}
   */
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on curent slide  index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
         opacity: 1,
         transition:{ delay: 2.4, duration: 0.5, ease: "easeIn"},
         }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[468px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/**outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/**project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/**Project description */}
              <p className="text-white/60">{project.description}</p>
              {/**project stack */}
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => {
                  return (
                    <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {stack.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{stack.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                  );
                })}
              </ul>
              {/**border */}
              <div className="border border-white/20 "></div>
              {/**Buttons */}
              <div className="flex items-center gap-4">
                {/**Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/**GitHub Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
                <Swiper spaceBetween={30} slidesPerView={1} 
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}>
                  {projects.map((project, index) => {
                    return <SwiperSlide  key={index} 
                    className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/**overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                    
                    </div>
                    {/**Image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-fill" alt="project-images"/>
                    </div>
                      </div>
                    </SwiperSlide>
                  })}
                  {/**Button slider */}
                  <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all " />
                </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
