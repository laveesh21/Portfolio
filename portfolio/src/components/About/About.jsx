import React from "react";
import LaveeshImg from "../../assets/lv01.jpg";

const bio =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, vitae! Consectetur modi ipsa architecto. Est repudiandae nostrum perferendis eos voluptate, veniam necessitatibus iusto odit? Sequi voluptatem possimus nostrum repellat deserunt et distinctio, magni sapiente!";

const details = [
  { label: "Name", value: "Laveesh Tomar" },
  { label: "Name", value: "Laveesh Tomar" },
  { label: "Name", value: "Laveesh Tomar" },
  { label: "Name", value: "Laveesh Tomar" }
];

function About() {
  return (
    <>
      <div className="text-center text-3xl font-bold mt-10 flex justify-center">
        <div className="mr-3 text-purple-700 lg:text-3xl text-2xl">◣</div>
        <p className="text-2xl lg:text-3xl">ABOUT</p>
        <div className="ml-3 text-purple-700 lg:text-3xl text-2xl">◢</div>
      </div>

      <div className="flex flex-col md:flex-row mt-10 mx-5 md:mx-20 lg:mx-32">
        <div className="flex justify-center md:w-1/3 w-full mb-5 md:mb-0">
          <img src={LaveeshImg} className="rounded-xl w-72 md:w-auto max-w-xs" alt="Laveesh Tomar" />
        </div>
        <div className="md:w-2/3 w-full">
          <p className="border-2 p-4 text-sm md:text-base lg:text-lg">{bio}</p>
          <div className="border-2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 p-4">
            {details.map((detail, index) => (
              <div key={index}>
                <h4 className="font-bold">{detail.label}:</h4>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-32 bg-purple-700 my-10">
        <ul className="flex justify-center items-center h-full space-x-4">
          <li className="text-white">Item 1</li>
          <li className="text-white">Item 2</li>
        </ul>
      </div>
    </>
  );
}

export default About;
