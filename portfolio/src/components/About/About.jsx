import React from "react";
import LaveeshImg from "../../assets/lv01.jpg";

const bio =
  "Lorem ipsum dolor sit, amet consec  tetur adipisicing  Lorem ipsum dolor sit amet consectetur, a\n     dipisicing elit. At, vitae!  elit. Consectetur modi ipsa architecto. Est repudiandae nostrum perferendis eos voluptate, veniam necessitatibus iusto odit? Sequi voluptatem possimus nostrum repellat deserunt et distinctio, magni sapiente!";
  
function About() {
  return (
    <>
      <div className="flex px-20 mt-56">
        <div className="flex justify-center w-1/3">
          <img src={LaveeshImg} width={400} className="rounded-xl"></img>
        </div>
        <div className="w-2/3 px-36 py-20">
          <p className="text-xl border-2">{bio}</p>
          <div className="border-2 grid grid-cols-2	gap-4 mt-5">
            <div className="">
              <h4>Name: </h4>
              <p>Laveesh Tomar</p>
            </div>
            <div className="">
              <h4>Name: </h4>
              <p>Laveesh Tomar</p>
            </div>
            <div className="">
              <h4>Name: </h4>
              <p>Laveesh Tomar</p>
            </div>
            <div className="">
              <h4>Name: </h4>
              <p>Laveesh Tomar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto h-40 bg-purple-700 my-10">
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default About;
