"use client";
import React, { useState, useEffect } from "react";
import { GiBee } from "react-icons/gi";
import { MdElectricalServices, MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";

import image3 from "../../public/images/clothlogo.png";
import Image from "next/image";
import { RiLightbulbFlashLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#DED6D1] shadow-md shadow-[#b1aa9c] ml-0 lg:ml-2 mr-0 lg:mr-2 rounded-sm">
      <nav className="mt-2">
        <div className="max-w-8xl flex flex-wrap items-center  justify-between mx-auto p-4">
          <Link href="/">
            {" "}
            <h1 className="font-bold text-xl lg:text-3xl ml-2 lg:ml-8 flex gap-2 text-[#c00838] bg-[#e1dad6] p-2">
              <RiLightbulbFlashLine />
              Hopwood Electric
            </h1>
          </Link>

          {/* <img src={image3} alt=""/> */}
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm   rounded-lg md:hidden text-[24px] focus:outline-none "
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenuFold size={40} />
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col mr-2 lg:mr-8 p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-black  ">
              <li>
                <a
                  href="/#activities"
                  className="block py-2 px-3 text-[20px] lg:w-full  w-36 text-black rounded md:border-0"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="/#Review"
                  className="block py-2 px-3 text-[20px] lg:w-full   w-36 text-black rounded md:border-0"
                >
                  Review
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="block py-2 px-3 text-[20px] lg:w-full   w-36 text-black rounded md:border-0"
                >
                  Faq
                </a>
              </li>

              <li>
                <a
                  href="/#contact-us"
                  className="block py-2 px-3 text-[20px] lg:w-full  w-36 text-black rounded md:border-0"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="tel:+1 716 406 7972"
                  className="p-2 flex items-center gap-2 text-[20px] lg:w-full bg-gradient-to-r from-[#c00838] to-[#dd1b4f]  w-56 text-white rounded md:border-0"
                >
                  <MdOutlinePermPhoneMsg /> +1 (425) 548-4872
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isScrolled && (
        <div className="fixed bottom-10 right-10 z-50">
          <a
            href="https://wa.me/+8801845672696"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-3 rounded-full shadow-lg text-black"
          >
            <FaWhatsapp
              size={50}
              className="p-2 text-[#25D366] bg-[#23131c] rounded-md"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
