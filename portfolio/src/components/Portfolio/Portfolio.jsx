import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectImg from "../../assets/luffy.jpg";
import DesignImg from "../../assets/luffydes.png";
import ApexImg from "../../assets/apexdev.png"  ;
import ChatAppImg from "../../assets/chatapp.png"  ;
import PortfolioImg from "../../assets/portfolio.png";




const projects = [
  {
    title: "ApexDevs",
    desc: "ApexDevs is a community, which makes it easy for developers to reach out other develops and can get help from each other by understaning their projects in an easy way out by looking at images and with compact description. Devs can test out projects from their repos and review on it and can also give suggestion.",
    type: "website",
    link: "https://apexdevs-club.onrender.com",
    about: "https://github.com/laveesh21/ApexDevs",
    img: ApexImg,
  },
  {
    title: "Chat Application",
    desc: "This is a real-time chat application where users can chat with other users in real-time with the integration of LLM, which can chat when a user is not available.",
    type: "website",
    link: "No Link",
    about: "https://github.com/laveesh21/Reat-Time-Chat-Application-",
    img: ChatAppImg,
  },
  {
    title: "My Portfolio",
    desc: "This website, built using React, showcases my skills in both front-end and back-end development. Explore my projects, learn about my journey, and see how I turn ideas into robust, user-friendly web applications.",
    type: "website",
    link: "No Link",
    about: "",
    img: PortfolioImg,
  },
  {
    title: "Anime Webpage Design",
    desc: "",
    type: "design",
    link: "No Link",
    about: "",
    img: DesignImg,
  },
  {
    title: "Project2",
    desc: "This is sample Project",
    type: "design",
    link: "No Link",
    about: "",
    img: DesignImg,
  },
];

function Portfolio() {
  const designProjects = projects.filter(
    (project) => project.type === "design"
  );
  const websiteProjects = projects.filter(
    (project) => project.type === "website"
  );

  return (
    <>
      <div className="">
        <div className="text-center text-3xl font-bold mt-10 flex justify-center ">
          <div className="mr-3 text-purple-700 bg-red">&#9699;</div>PORTFOLIO<div className="ml-3 text-purple-700">&#9698;</div>
        </div>

        <div className="mt-14 py-2 px-20 font-semibold text-xl"> Projects</div>
        <div className="px-20">
          <div className="h-px bg-gray-300"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 m-10 ">
          {websiteProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </div>

        <div className="mt-24 py-2 px-20 font-semibold text-xl"> Design </div>
        <div className="flex justify-center">
          <div className="h-px bg-gray-300 w-11/12 "></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 m-10 ">
          {designProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
