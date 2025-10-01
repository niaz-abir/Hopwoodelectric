"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import your images
import image1 from "../../public/images/bannerElec.jpg";
import image2 from "../../public/images/bannerElec1.jpg";
import image3 from "../../public/images/bannerElec2.jpg";
import image4 from "../../public/images/bannerElec2.jpg";
import image5 from "../../public/images/bannerElec2.jpg";

export function Banner() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay (optional)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500); // 0.5s delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="flex items-center justify-center h-[400px]">
        <p className="text-xl font-semibold text-[#c00838]">Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <div className="grid backdrop-blur-xl p-6 rounded-md grid-cols-1 mb-20 mt-16 items-center justify-items-center md:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-y-5 text-center md:items-start md:text-start">
          <h1 className="text-[clamp(2rem,_4vw+1rem,_4rem)] font-extrabold capitalize text-[#c00838] leading-tight tracking-tight">
            Smart Electronic Services You Can Trust !!!
          </h1>
          <p className="max-w-[35rem] text-lg leading-relaxed text-foreground-500">
            With over 5 years of proven expertise, we deliver reliable
            electronic solutions for homes and businesses. From device
            installation to system upgrades and repairs, our team ensures
            quality service designed around your needs.
          </p>
          <div className="flex items-center gap-x-4 pt-4 pb-4">
            <Link
              href="/#contact-us"
              className="w-32 h-12 pl-2 pt-3 bg-gradient-to-r from-[#c00838] to-[#d21c4c] hover:bg-[#132836] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300"
            >
              contact-us
            </Link>
          </div>
        </div>

        {/* Right Section: Swiper with fixed height */}
        <div className="ml-0 lg:ml-6 w-full h-[500px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="h-full rounded-md"
          >
            {[image1, image2, image3, image4, image5].map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`Hero ${index + 1}`}
                  className="rounded-md object-cover"
                  width={900}
                  height={500}
                  priority={index === 0} // Prioritize the first image
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
