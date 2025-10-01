"use client";
import Image from "next/image";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { motion } from "framer-motion";
import image1 from "../../public/images/work (1).jpeg";
import image2 from "../../public/images/work (1).jpg";
import image3 from "../../public/images/work (2).jpeg";
import image4 from "../../public/images/work (2).jpeg";
import image5 from "../../public/images/work (3).jpeg";
import image6 from "../../public/images/work (3).jpeg";

const OurWork = () => {
  const allWork = [
    {
      id: 1,
      name: "Modern Real Estate",
      no: "01",
      icon: <RiHomeLine />,
      details:
        "A sleek platform for listing and exploring modern homes with advanced search features.",
      img: image1,
    },
    {
      id: 2,
      name: "Luxury Apartments",
      no: "02",
      icon: <RiHomeLine />,
      details:
        "Premium apartment listing site with map integration and 360° virtual tours.",
      img: image2,
    },
    {
      id: 3,
      name: "Rental Hub",
      no: "03",
      icon: <RiHomeLine />,
      details:
        "Smart rental management system connecting landlords and tenants in real-time.",
      img: image3,
    },
    {
      id: 4,
      name: "Commercial Listings",
      no: "04",
      icon: <RiHomeLine />,
      details:
        "Search, compare, and lease commercial spaces with an intuitive dashboard.",
      img: image4,
    },
    {
      id: 5,
      name: "Home Decor Ideas",
      no: "05",
      icon: <RiHomeLine />,
      details:
        "Curated design inspirations and furniture shopping features for home buyers.",
      img: image5,
    },
    {
      id: 6,
      name: "Agent Portfolio",
      no: "06",
      icon: <RiHomeLine />,
      details:
        "Personalized agent websites to showcase listings, testimonials, and services.",
      img: image6,
    },
  ];

  // Variants for card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
  };

  return (
    <section id="activities" className="py-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold pb-8 text-[#c00838] text-center text-4xl">
          Our Work in Action
        </h1>
        <p className="text-[18px] text-black text-center">
          Safe. Reliable. High-quality—our projects speak for themselves.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-14">
          {allWork.map((work) => (
            <motion.div
              key={work.id}
              className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={work.img}
                  alt={work.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <motion.div className="p-8" variants={textVariants}>
                <h3 className="text-2xl flex gap-4 items-center font-semibold text-[#c00838] mb-1">
                  <MdOutlineMapsHomeWork /> {work.name}
                </h3>
                <p className="text-lg">{work.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
