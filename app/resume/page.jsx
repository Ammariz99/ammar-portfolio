"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVuetify } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

/**
 * About section data
 * @type {Object}
 * @property {string} title - Title of the about section
 * @property {string} description - Description of the individual
 * @property {Array<{fieldName: string, fieldValue: string}>} info - Array of information fields
 */
const about = {
  title: "About Me",
  description:
    "I'm a front-end developer with a passion for building scalable and maintainable applications",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Syed Ammar Bukhari",
    },
    // {
    //   fieldName: "Phone",
    //   fieldValue: "",
    // },
    {
      fieldName: "Email",
      fieldValue: "shah.ammar9919@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "06+ Months",
    },

    {
      fieldName: "Open to work",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ],
};

/**
 * Experience section data
 * @type {Object}
 * @property {JSX.Element} icon - Icon representing experience
 * @property {string} title - Title of the experience section
 * @property {string} description - Description of the individual's experience
 * @property {Array<{company: string, position: string, duration: string}>} items - Array of experience items
 */
const experience = {
  icon: <MdOutlineWorkHistory />,
  title: "My Experience",
  description:
    "I have worked on various projects and gained experience in different areas of software development",
  items: [
    {
      company: "Programmers Force",
      position: "Front-end Developer",
      duration: "March 2024 - August 2024",
    },
  ],
};

/**
 * Education section data
 * @type {Object}
 * @property {JSX.Element} icon - Icon representing education
 * @property {string} title - Title of the education section
 * @property {string} description - Description of the individual's education
 * @property {Array<{institution: string, degree: string, duration: string}>} items - Array of education items
 */
const education = {
  icon: <GiGraduateCap />,
  title: "My Education",
  description:
    " I have completed my education from various institutions and gained knowledge in different areas",
  items: [
    {
      institution: "University of Management & Tecnology (UMT)",
      degree: "BSCS",
      duration: "Oct 2019 - Sep 2023",
    },
    {
      institution: "Govt Graduate College of Science (GGCS)",
      degree: "ICS-Physics",
      duration: "April 2017 - May 2019",
    },
  ],
};

/**
 * Skills section data
 * @type {Object}
 * @property {string} title - Title of the skills section
 * @property {string} description - Description of the individual's skills
 * @property {Array<{icon: JSX.Element, name: string}>} skillList - Array of skill items
 */
const skills = {
  title: "My Skills",
  description: "I have gained skills in various areas of software development",
  skillList: [
    {
      icon: <FaHtml5 className="text-[#dd4b25]" />,
      name: "html 5",
    },
    {
      icon: <FaCss3 className="text-[#2d53e5]" />,
      name: "css 3",
    },
    {
      icon: <FaJs className="text-[#F7E025]" />,
      name: "Javascript",
    },
    {
      icon: <FaReact className="text-[#5CC2D9]" />,
      name: "React",
    },
    {
      icon: <FaVuejs className="text-[#47BA87]" />,
      name: "Vue Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icon: <SiTailwindcss className="text-[#1DC0CD]" />,
      name: "Tailwind Css",
    },
    {
      icon: <SiVuetify className="text-[#B2DEFF]" />,
      name: "Vuetify",
    },
  ],
};

/**
 * Resume component
 * @returns {JSX.Element} - The rendered Resume component
 */
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about me">About me</TabsTrigger>
          </TabsList>
          {/**Content */}
          <div className="min-h-[70vh] w-full">
            {/**Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/**dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/**Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/**dot */}
                            <span className="w-[6px] h-[6px] rounded-full mb-8 bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/**Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/**about me */}
            <TabsContent
              value="about me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 "
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
