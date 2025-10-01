/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type TInput = {
  user_email: string;
  phone: string;
  additionalNote: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInput>();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="contact-us">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-4 lg:py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="mb-4" variants={fadeUpVariants}>
          <div className="mb-4 max-w-3xl text-center sm:text-center md:mx-auto ">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-black dark:text-black text-2xl lg:text-4xl">
              Talk to Us
            </h2>
          </div>
        </motion.div>

        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 items-center mt-4 ">
            {/* Info Section */}
            <motion.div
              className="h-full p-4 lg:pr-6 mt-2 lg:mt-4"
              variants={fadeUpVariants}
            >
              <p className="mt-3 mb-12 text-lg text-black dark:text-slate-400">
                Have a question or need assistance? We’re always happy to help.
                Simply fill out the form below or connect with us by phone or
                email. Our team is dedicated to responding quickly and making
                sure you get the support you need.
              </p>
              <ul>
                {/* Address */}
                <li className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#c00838] text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black dark:text-black">
                      Our Address
                    </h3>
                    <p className="text-black dark:text-slate-400">
                      221B Baker Street,
                    </p>
                    <p className="text-black dark:text-slate-400">
                      Marylebone, London NW1 6XE, United Kingdom
                    </p>
                  </div>
                </li>

                {/* Contact */}
                <li className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#c00838] text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black dark:text-black">
                      Contact
                    </h3>
                    <p className="text-black dark:text-slate-400">
                      Mobile: +44 7700 900123
                    </p>
                    <p className="text-black dark:text-slate-400">
                      Mail: support@Hopwood.co.uk
                    </p>
                  </div>
                </li>

                {/* Working Hours */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#c00838] text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black dark:text-black">
                      Working Hours
                    </h3>
                    <p className="text-black dark:text-slate-400">
                      Monday - Friday: 08:00am - 06:00pm
                    </p>
                    <p className="text-black dark:text-slate-400">
                      Saturday: 09:00am - 03:00pm
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Form Section */}
            <motion.div className="mt-4" variants={fadeUpVariants}>
              <div className="text-black relative px-2 p-4 rounded-md shadow-lg sm:rounded-3xl">
                <div className="text-center pb-4 -mt-4">
                  <h1 className="text-3xl font-bold pt-4">Contact Us!</h1>
                  <p className="text-black">
                    Fill up the form below to send us a message.
                  </p>
                </div>
                <div className="flex justify-center">
                  <form>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="text-black">Email:</span>
                      </div>
                      <input
                        required
                        type="text"
                        placeholder="email"
                        className={`input input-bordered bg-[#e0dad5] w-[350px] lg:w-[450px] ${
                          errors.user_email ? "border-red-500" : ""
                        }`}
                        {...register("user_email", {
                          required: "email is required",
                        })}
                      />
                    </label>
                    {errors.user_email && (
                      <p className="text-red-500 text-sm">
                        {errors.user_email.message}
                      </p>
                    )}

                    <label className="form-control w-full max-w-xs mt-4">
                      <div className="label">
                        <span className="text-black">Phone:</span>
                      </div>
                      <input
                        required
                        type="text"
                        placeholder="phone"
                        className={`input input-bordered bg-[#e0dad5] w-[350px] lg:w-[450px] ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        {...register("phone", {
                          required: "phone is required",
                        })}
                      />
                    </label>
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}

                    <label className="form-control w-full max-w-xs mt-4">
                      <div className="label">
                        <span className="text-black">Message:</span>
                      </div>
                      <textarea
                        className={`textarea textarea-bordered h-24 bg-[#e0dad5] w-[350px] lg:w-[450px] ${
                          errors.additionalNote ? "border-red-500" : ""
                        }`}
                        {...register("additionalNote", {
                          required: "message is required",
                        })}
                        placeholder="message"
                      ></textarea>
                    </label>
                    {errors.additionalNote && (
                      <p className="text-red-500 text-sm">
                        {errors.additionalNote.message}
                      </p>
                    )}

                    <motion.div
                      className="mt-4 mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button className="w-36 h-14 bg-gradient-to-r from-[#c00838] to-[#d21c4c] hover:bg-[#132836] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300">
                        Submit
                      </button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
