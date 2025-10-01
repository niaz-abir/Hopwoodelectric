"use client";
import React from "react";
import { motion } from "framer-motion";

const Faq = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We offer electrical installations, repairs, safety inspections, and ongoing maintenance for both residential and commercial clients.",
    },
    {
      question: "Do you offer emergency call-outs?",
      answer:
        "Yes, our team is available 24/7 for emergency electrical issues to ensure your safety and peace of mind.",
    },
    {
      question: "Are your electricians certified?",
      answer:
        "All of our electricians are fully licensed, trained, and compliant with UK safety regulations.",
    },
    {
      question: "How quickly can you start a project?",
      answer:
        "Most projects can begin within a few days of booking. Larger jobs are scheduled after a free site assessment.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we provide no-obligation quotes so you know exactly what to expect before work begins.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We cover London and surrounding areas, and we’re happy to discuss projects further across the UK.",
    },
  ];

  return (
    <section
      id="faq"
      className="dark:bg-gray-100 mt-14 mb-14 dark:text-gray-800"
    >
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl text-[#c00838] font-semibold sm:text-4xl text-center"
            variants={fadeUpVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="mt-4 mb-14 text-lg text-center"
            variants={fadeUpVariants}
          >
            Here are some of the most common questions our clients ask. If you
            don’t find your answer, feel free to reach out!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                className="w-full border-2 border-[#c8c1bc] rounded-lg"
                variants={fadeUpVariants}
              >
                <summary className="px-4 text-2xl py-6 cursor-pointer focus:outline-none focus-visible:dark:ring-violet-600">
                  {faq.question}
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
