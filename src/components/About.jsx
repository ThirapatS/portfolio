import React from "react";
import me2 from "../assets/me2.png";
import kmitl from "../assets/kmitl.png";
import marie from "../assets/marie.png";
import ssk from "../assets/ssk.png";

function About() {
  return (
    <div className="about nav-width w-full bg-[#8C52FF] px-5 relative overflow-x-hidden lg:overflow-hidden z-[1] duration-300">
      {/* absulute content */}
      <div className="rounded-full w-[500px] h-[500px] bg-[#ffffff] absolute bottom-[-40%] z-[-1] left-[-15%] hidden xl:block"></div>
      <div className="rounded-full w-[500px] h-[500px] bg-[#ffffff] absolute bottom-[-50%] z-[-1] left-[-2%] hidden xl:block"></div>
      <div className="rounded-full w-[500px] h-[500px] bg-[#ffffff] absolute bottom-[-50%] z-[-1] left-[10%] hidden xl:block"></div>
      <div className="rounded-full w-[500px] h-[500px] bg-[#ffffff] absolute bottom-[-50%] z-[-1] left-[27%] hidden xl:block"></div>
      <div className="rounded-full w-[500px] h-[500px] bg-[#ffffff] absolute bottom-[-55%] z-[-1] left-[45%] hidden xl:block"></div>
      <div className="rounded-full w-[500px] h-[500px] bg-[#ffffff] absolute bottom-[-50%] z-[-1] left-[60%] hidden xl:block"></div>
      <div className="rounded-full w-[500px] h-[500px] bg-[#ffffff] absolute bottom-[-45%] z-[-1] left-[75%] hidden xl:block"></div>
      <div className="rounded-full w-[500px] h-[500px] bg-[#ffffff] absolute bottom-[-30%] z-[-1] left-[85%] hidden xl:block"></div>
      <img
        src={me2}
        alt=""
        className="absolute right-0 bottom-0 w-[450px] 2xl:block hidden"
      />
      <div className="w-[150px] h-[150px] bg-white lg:flex items-center justify-center rounded-b-lg absolute top-0 right-5 hidden">
        <img src={ssk} className="w-[130px]" alt="" />
      </div>
      {/* end absulute content */}
      <h1 className="text-[70px] font-bold text-white text-start lg:text-center lg:mb-0 mb-9">
        About me
      </h1>
      <div className="aboutme xl:text-[40px] lg:text-[30px] md:text-[25px]">
        <div className="flex items-center font-bold mx-7 ">
          <div className="sm:bg-white md:w-[67px] md:h-[67px] w-[50px] h-[50px] flex items-center justify-center rounded-full mr-7 sm:shadow-lg">
            <i className="bx bx-calendar-heart md:text-[60px] text-[30px] sm:text-[#8C52FF] text-white"></i>
          </div>
          <h1 className=" text-white">I was born on June 3, 2008 </h1>
        </div>
        <div className="flex items-center font-bold m-7">
          <div className="sm:bg-white md:w-[67px] md:h-[67px] w-[50px] h-[50px] flex items-center justify-center rounded-full mr-7 sm:shadow-lg">
            <i className="bx bxs-party md:text-[60px] text-[30px] sm:text-[#8C52FF] text-white"></i>
          </div>
          <h1 className=" text-white">I 15 years old</h1>
        </div>
        <div className="flex items-center font-bold m-7">
          <div className="sm:bg-white md:w-[67px] md:h-[67px] w-[50px] h-[50px] flex items-center justify-center rounded-full mr-7 sm:shadow-lg">
            <i className="bx bxs-school md:text-[60px] text-[30px] sm:text-[#8C52FF] text-white"></i>
          </div>
          <h1 className=" text-white">
            Satreesiriket School, Sisakat thailand
          </h1>
        </div>
        <div className="flex items-center font-bold m-7">
          <div className="sm:bg-white md:w-[67px] md:h-[67px] w-[50px] h-[50px] flex items-center justify-center rounded-full mr-7 sm:shadow-lg">
            <i className="bx bx-user md:text-[60px] text-[30px] sm:text-[#8C52FF] text-white"></i>
          </div>
          <h1 className=" text-white">
            There are 4 people in my family My mother, father, sister and me
          </h1>
        </div>
        <div className="flex items-center font-bold m-7">
          <div className="sm:bg-white md:w-[67px] md:h-[67px] w-[50px] h-[50px] flex items-center justify-center rounded-full mr-7 sm:shadow-lg">
            <i className="bx bxs-graduation md:text-[60px] text-[30px] sm:text-[#8C52FF] text-white"></i>
          </div>
          <h1 className=" text-white">
            When I graduated i want to study at Ladkrabang University
          </h1>
        </div>
        <div className="flex items-center font-bold m-7">
          <div className="sm:bg-white md:w-[67px] md:h-[67px] w-[50px] h-[50px] flex items-center justify-center rounded-full mr-7 sm:shadow-lg">
            <i className="bx bxs-chevrons-up md:text-[60px] text-[30px] sm:text-[#8C52FF] text-white"></i>
          </div>
          <h1 className=" text-white">
            When in grow up i need to be a web deverloper
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
