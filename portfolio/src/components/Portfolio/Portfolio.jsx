import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectImg from "../../assets/luffy.jpg";
import DesignImg from "../../assets/luffydes.png";

const projects = [
  {
    title: "ApexDevs",
    desc: "ApexDevs is a community, which makes it easy for developers to reach out other develops and can get help from each other by understaning their projects in an easy way out by looking at images and with compact description. Devs can test out projects from their repos and review on it and can also give suggestion.",
    type: "website",
    link: "working",
    img: ProjectImg,
  },
  {
    title: "Project",
    desc: "This is sample Project",
    type: "website",
    link: "No Link",
    img: ProjectImg,
  },
  {
    title: "Project",
    desc: "This is sample Project",
    type: "website",
    link: "No Link",
    img: ProjectImg,
  },
  {
    title: "Project2",
    desc: "This is sample Project",
    type: "design",
    link: "No Link",
    img: DesignImg,
  },
  {
    title: "Project2",
    desc: "This is sample Project",
    type: "design",
    link: "No Link",
    img: DesignImg,
  },
  {
    title: "Project2",
    desc: "This is sample Project",
    type: "design",
    link: "No Link",
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
          <div className="mr-3 text-purple-700">&#9699;</div>PORTFOLIO<div className="ml-3 text-purple-700">&#9698;</div>
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
