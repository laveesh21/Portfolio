import React from "react";
import LaveeshImg from "../../assets/lv00.jpg";
import "boxicons"

const bio = "I am Laveesh Tomar, a dedicated B.Tech CSE student with a passion for technology and innovation. As a budding full-stack web developer, I have honed my skills in both front-end and back-end development, enabling me to build robust, user-friendly web applications from the ground up. My journey in web development began with a curiosity about how websites work, which evolved into a passion for coding. I am proficient in HTML, CSS, and JavaScript, and skilled in React.js for front-end development. On the back-end, I work with Node.js, Express.js, and databases like MongoDB and MySQL."
const details = [
  { label: "Name", value: "Laveesh Tomar" },
  { label: "Qualification", value: "B.Tech - Computer Science Engineering" },
  { label: "Specialization", value: "FullStack Web Development" },
  { label: "Status", value: "Open To Work" }
];

const techStack = [
  { techIcon: 'html5', techName: "" },
  { techIcon: 'css3', techName: "" },
  { techIcon: 'javascript', techName: "" },
  { techIcon: 'nodejs', techName: "" },
  { techIcon: 'react', techName: "" },
  { techIcon: 'postgresql', techName: "" },
  { techIcon: 'mongodb', techName: "" },
  { techIcon: 'c-plus-plus', techName: "" },
  { techIcon: 'java', techName: "" },
];
function About() {
  return (
    <div className="mt-10">
      <div className="text-center text-3xl font-bold mb-10 flex justify-center items-center">
        <div className="mr-3 text-purple-700 lg:text-3xl text-2xl">◣</div>
        <p className="text-2xl lg:text-3xl">ABOUT</p>
        <div className="ml-3 text-purple-700 lg:text-3xl text-2xl">◢</div>
      </div>

      <div className=" flex flex-col md:flex:col lg:flex-row justify-center items-center md:items-center md:start mx-5 md:mx-10 lg:mx-32">
        <div className="flex justify-center items-center w-full md:w-1/3 mb-5 md:mb-0">
          <img src={LaveeshImg} className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-96" alt="Laveesh Tomar" />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center px-5 md:px-10">
          <p className="bg-gray-100 p-3 text-sm md:text-sm lg:text-base xl:text-base">{bio}</p>
          <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 p-4">
            {details.map((detail, index) => (
              <div key={index}>
                <h4 className="font-bold text-md md:text-md lg:text-md xl:text-lg ">{detail.label}:</h4>
                <p className="text-sm md:text-sm lg:text-base xl:text-base">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-32 bg-purple-700 my-10">
        <ul className="flex justify-center items-center h-full space-x-4">
          {
            techStack.map((tech,index)=>(
              <li className="text-white flex flex-col justify-center "><box-icon name={tech.techIcon} type='logo' color='#ffffff' size='3rem' className="border-2 "></box-icon><h6 className="text-center ">{tech.techName}</h6></li>
            ))
          }
         
        </ul>
      </div>
    </div>
  );
}

export default About;
