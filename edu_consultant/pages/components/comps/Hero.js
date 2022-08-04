import Image from "next/image";
import heroPic from "../../../public/hero.jpg";

const Hero = () => {
  return (
    <>
      <div className="text-black lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-y-10 bg-white min-h-full">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-10 text-left mx-2">
          <p className="text-2xl md:text-4xl text-center md:text-left px-3">
            Welcome to{" "}
            <span className="text-left text-[#5490FF] font-bold uppercase">
              rocketship
            </span>
          </p>
          <p className="text-xl text-center md:text-left md:text-3xl px-3">
            Education consultants provide guidance to those who seek their
            service, which can include families, schools, colleges and
            universities.
          </p>
          {/* <p className="text-left text-lg px-3">
            An alternative use for wood pellets is animal bedding such as in
            horse stalls, and all of our pellets are excellent for this..
          </p> */}
          <button className="bg-[#5490FF] text-white text-xl hover:bg-[#0056CC] px-3 py-3 w-56 rounded ml-3">
            Book A Free Consult
          </button>
        </div>
        <div className="hidden w-full md:grid grid-cols-1 content-center justify-items-center p-5">
          <Image className="rounded-lg shadow-xl" src={heroPic} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
