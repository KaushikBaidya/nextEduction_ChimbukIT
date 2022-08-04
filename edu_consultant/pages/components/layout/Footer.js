import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiMapPin,
  FiMail,
  FiPhoneCall,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../../../public/rocket.png";

const Footer = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 justify-items-center py-10 bg-white">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-2 py-2 mt-2">
          <div className="">
            <div className="grid grid-cols-1 justify-items-center">
              <h1 className="text-[24px] lg:text-[45px] text-[#395C63] font-semibold text-center px-5 ">
                Welcome To Rocketship
              </h1>
            </div>
            <div className="w-full flex flex-wrap gap-4 justify-center py-3">
              <div className="w-10 h-10 flex bg-[#FFC901] justify-center items-center drop-shadow-xl rounded-lg text-[#395C63] hover:bg-[#d9aa01]">
                <a href="#f">
                  <FiFacebook size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#FFC901] justify-center items-center drop-shadow-xl rounded-lg text-[#395C63] hover:bg-[#d9aa01]">
                <a href="#f">
                  <FiTwitter size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#FFC901] justify-center items-center drop-shadow-xl rounded-lg text-[#395C63] hover:bg-[#d9aa01]">
                <a href="#f">
                  <FiYoutube size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#FFC901] justify-center items-center drop-shadow-xl rounded-lg text-[#395C63] hover:bg-[#d9aa01]">
                <a href="#f">
                  <FiLinkedin size={26} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-2xl text-[#395C63] font-semibold font-sans text-center px-5 my-2">
              Explore
            </p>
            <p className="text-sm lg:text-lg text-[#395C63] font-normal font-sans text-center px-5 flex items-center gap-2 my-1">
              <FiMapPin />
              <span className="text-lg">USA</span>
            </p>
            <p className="text-sm lg:text-lg text-[#395C63] font-normal font-sans text-center px-5 flex items-center gap-2 my-1">
              <FiMail />
              <span className="text-lg">info@rocketship.com</span>
            </p>
            <p className="text-sm lg:text-lg text-[#395C63] font-normal font-sans text-center px-5 flex items-center gap-2 my-1">
              <FiPhoneCall />
              <span className="text-lg">646-861-8089</span>
            </p>
          </div>

          <div>
            <p className="text-2xl text-[#395C63] font-semibold font-sans text-center px-5 my-2">
              Quick Links
            </p>
            <div className="text-[#395C63] grid grid-cols-1 justify-items-center">
              <p>
                <Link href="#seeHero">
                  <a>Home</a>
                </Link>
              </p>
              <p>
                <Link href="#seeHero">
                  <a>About</a>
                </Link>
              </p>
              <p>
                <Link href="#seeHero">
                  <a>Services</a>
                </Link>
              </p>
              <p>
                <Link href="#seeHero">
                  <a>Blogs</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 lg:my-11 justify-around">
        <p className="uppercase font-bold text-[#2A474F] text-center">
          ©{new Date().getFullYear()}
          <span className="ml-2">Rocketship All rights reserved</span>
        </p>
        <Link href="/">
          <div className="flex flex-wrap">
            <h1 className="text-2xl lg:text-6xl font-bold p-2 text-[#2B464F] uppercase">
              Rocketship
            </h1>
            <Image src={logoPic} width={80} height={10} alt="" />
          </div>
        </Link>
        <p className="text-uppercase text-[#182b31] mb-1">
          Developed By
          <a
            href="https://chimbukit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold ml-2"
          >
            <span className="">Chimbuk IT</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
