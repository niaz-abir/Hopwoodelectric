/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-24 pb-6 bg-[#d4cac4] shadow-md shadow-[#b1aa9c] "
    >
      <footer className="footer text-black p-10">
        {/* Company Intro */}
        <div>
          <h1 className="text-[25px] font-bold">"Powering Innovation,</h1>
          <h1 className="text-[25px] font-bold">
            Delivering Reliable Solutions"
          </h1>
          <button className="p-4 mt-4 pl-2 bg-gradient-to-r text-white from-[#c00838] to-[#d21c4c] border-none rounded-md text-[18px]  font-bold transition-all duration-300">
            <Link href="contact-us" className="pt-2">
              Let's Connect
            </Link>
          </button>
        </div>

        {/* Services Section */}
        <nav className="font-semibold text-[16px]">
          <h6 className="font-bold text-black text-[18px]">Our Services</h6>
          <a className="link link-hover text-black">Electrical Installation</a>
          <a className="link link-hover text-black">Repair & Maintenance</a>
          <a className="link link-hover text-black">Smart Home Setup</a>
          <a className="link link-hover text-black">Energy Saving Solutions</a>
        </nav>

        {/* Company Section */}
        <nav className="font-semibold text-[16px] text-black">
          <h6 className="font-bold text-black text-[18px]">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Contact</a>
        </nav>

        {/* Contact Section */}
        <nav>
          <h6 className="font-semibold text-[16px]">Address</h6>
          <p className="text-[18px]">221B Baker Street,</p>
          <p className="text-[18px]">
            Marylebone, London NW1 6XE, United Kingdom
          </p>
          <h6 className="font-semibold text-[16px] pt-2">Phone:</h6>
          <p className="text-[18px]">+1 (425) 468-993</p>
          <h6 className="font-semibold text-[16px] pt-2">Email:</h6>
          <p className="text-[18px]">support@hopwoodelectrical.com</p>
        </nav>
      </footer>

      {/* Bottom Bar */}
      <div className="flex justify-between p-2 mt-4">
        <div>
          <h4>© 2024 Hopwood Electrical. All Rights Reserved.</h4>
        </div>
        <div className="flex gap-2">
          <Link href="https://www.facebook.com/">
            <FaFacebookSquare className="text-3xl" />
          </Link>
          <Link href="http://instagram.com/">
            <FaInstagram className="text-3xl" />
          </Link>
          <Link href="http://linkedin.com/">
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
