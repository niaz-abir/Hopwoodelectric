"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  RiBuilding2Line,
  RiHomeLine,
  RiLightbulbFlashLine,
  RiPaintBrushLine,
  RiToolsLine,
  RiTShirt2Line,
  RiWebhookLine,
} from "react-icons/ri";

const Services = () => {
  const allServices = [
    {
      id: 1,
      name: "Residential Electrical Services",
      no: "01",
      icon: <RiHomeLine />,
      details:
        "Safe and reliable electrical solutions for your home, including wiring, lighting, panel upgrades, and repairs.",
    },
    {
      id: 2,
      name: "Commercial Electrical Services",
      no: "02",
      icon: <RiBuilding2Line />,
      details:
        "Professional electrical services for offices, shops, and businesses—ensuring efficiency, compliance, and safety.",
    },
    {
      id: 3,
      name: "Electrical Maintenance & Repairs",
      no: "03",
      icon: <RiToolsLine />,
      details:
        "From minor fixes to preventive maintenance, our team keeps your systems running smoothly and safely.",
    },
    {
      id: 4,
      name: "Lighting Installation & Upgrades",
      no: "04",
      icon: <RiLightbulbFlashLine />,
      details:
        "Modern lighting solutions, including LED upgrades, outdoor lighting, and custom installations to brighten any space.",
    },
  ];

  return (
    <section id="services" className="py-14">
      <div className="text-center  p-4">
        <h1 className="font-bold pb-8 text-[#c00838] text-center text-4xl">
          Our Step-by-Step Project Process
        </h1>
        <p className="text-[18px] text-black">
          At Hopwood Electrical, we make your experience smooth and stress-free
          from start to finish. <br></br> Our expert team carefully manages
          every stage, focusing on safety, quality, and your satisfaction
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mr-6">
        {allServices.map((service) => (
          <motion.div
            key={service.id}
            className="bg-[#c8c1bc] rounded-md p-4 lg:w-96 m-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.4,
                  },
                },
              }}
            >
              <motion.h1
                className="font-bold flex  rounded-md gap-2 pb-2 pt-2 text-[20px] lg:text-[28px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#c00838] p-2 rounded-md">
                  {service.icon}
                </span>
                {service.name}
              </motion.h1>
              <motion.h2
                className="text-[18px] pt-4 pb-6"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {service.details}
              </motion.h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
