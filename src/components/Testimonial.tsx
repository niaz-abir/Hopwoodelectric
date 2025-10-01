/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const reviews = [
    {
      name: "Daniella Doe",
      role: "Mobile dev",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },
    {
      name: "Jane Doe",
      role: "Marketing",
      img: "https://randomuser.me/api/portraits/women/14.jpg",
      text: " reprehenderit, veritatis harum et rerum.",
    },
    {
      name: "Yanick Doe",
      role: "Developer",
      img: "https://randomuser.me/api/portraits/women/18.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },
    {
      name: "Jane Doe",
      role: "Mobile dev",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },
    {
      name: "Andy Doe",
      role: "Manager",
      img: "https://randomuser.me/api/portraits/women/62.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },
    {
      name: "Yanndy Doe",
      role: "Customer",
      img: "https://randomuser.me/api/portraits/women/19.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // stagger each card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="review">
      <section className="max-w-8xl mx-auto w-full px-10 py-10">
        <div
          className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900"
          id="reviews"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="text-center mb-14 mt-14 p-4">
              <h1 className="font-bold pb-8 text-[#c00838] text-center text-4xl">
                What Our Clients Say
              </h1>
              <p className="text-[18px] text-black">
                Our customers are at the heart of everything we do. Here’s what
                they have to say
                <br /> about our service, reliability, and commitment to
                quality.
              </p>
            </div>

            <motion.div
              className="md:columns-2 lg:columns-3 gap-8 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="aspect-auto p-8 rounded-3xl bg-[#c8c1bc] dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-[#b6a397] dark:shadow-none"
                  variants={cardVariants}
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={review.img}
                      alt={review.name}
                      width="200"
                      height="200"
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-black dark:text-black">
                        {review.name}
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 text-black">{review.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
