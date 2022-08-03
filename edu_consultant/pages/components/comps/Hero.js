import Image from "next/image";
import heroPic from "../../../public/hero.jpg";

const Hero = () => {
  return (
    <>
      <div className="text-black lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-y-10 bg-white min-h-full">
        <div className="flex flex-col justify-center gap-y-10 text-left">
          <p className="text-lg md:text-4xl px-3">
            Welcome to{" "}
            <span className="text-left text-[#FFC901] font-bold uppercase">
              rocketship
            </span>
          </p>
          <p className="text-left text-lg md:text-3xl px-3">
            Education consultants provide guidance to those who seek their
            service, which can include families, schools, colleges and
            universities.
          </p>
          {/* <p className="text-left text-lg px-3">
            An alternative use for wood pellets is animal bedding such as in
            horse stalls, and all of our pellets are excellent for this..
          </p> */}
          <button className="bg-[#FFC901] text-black hover:bg-[#e9bc17] px-3 py-3 w-48 rounded">
            Book A Free Consult
          </button>
        </div>
        <div className="w-full grid grid-cols-1 content-center justify-items-center p-5">
          <Image className="rounded-lg shadow-xl" src={heroPic} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
