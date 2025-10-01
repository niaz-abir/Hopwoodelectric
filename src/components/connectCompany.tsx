/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineWavingHand } from "react-icons/md";
import Link from "next/link";
import image1 from "../../public/images/logo (10).png";
import image3 from "../../public/images/logo (10).png";
import image5 from "../../public/images/logo (8).png";
import image6 from "../../public/images/logo (10).png";
import image7 from "../../public/images/logo (10).png";
import image9 from "../../public/images/logo (6).jpg";
import image10 from "../../public/images/logo (6).png";
import image11 from "../../public/images/logo (9).png";
import image12 from "../../public/images/logo (7).png";
import image13 from "../../public/images/logo (8).png";
import image14 from "../../public/images/logo (9).png";

export default function ConnectCompany() {
  const allCompany = [
    {
      id: 1,
      image: image1,
    },

    {
      id: 2,
      image: image3,
    },
    {
      id: 3,
      image: image6,
    },

    {
      id: 4,
      image: image10,
    },

    {
      id: 5,
      image: image12,
    },

    {
      id: 6,
      image: image9,
    },
    {
      id: 7,
      image: image5,
    },
    {
      id: 8,
      image: image11,
    },
    {
      id: 9,
      image: image7,
    },
  ];
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  return (
    <section className="mt-24 mx-4 mb-14 border-t-2 border-[#204964] border-r-2 border-l-2 overflow-hidden ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 p-6 items-center gap-10 lg:grid-cols-2"
      >
        <motion.div variants={textVariants}>
          <h1 className="text-3xl lg:text-5xl font-bold pb-8">
            Collaborating With Top Industry Experts!
          </h1>
          <p className="text-black">
            Our agency is a nexus for premier partnerships, trusted by over a
            hundred leading brands to create impactful and innovative
            collaborations. Experience the synergy of creativity and strategy in
            our portfolio of successful projects.
          </p>
          <button className="w-32 h-14 mt-4 pl-2  btn-outline border-none rounded-md text-[18px] text-white font-bold transition-all duration-300 bg-gradient-to-r from-[#c4672d] to-[#da5d10]">
            <Link href="contact-us" className="flex gap-2 items-center">
              Let's Talk <MdOutlineWavingHand />
            </Link>
          </button>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allCompany?.map((company) => (
            <div
              key={company?.id}
              className="lg:bg-[#381f2d] object-cover object-center bg-none"
            >
              <Image
                src={company?.image}
                alt=""
                height={100}
                width={120}
                className="object-fit object-center   min-w-[170px]"
              ></Image>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
