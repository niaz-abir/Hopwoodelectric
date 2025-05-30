import Footer from "@/components/Footer";
import Hoodie from "@/components/Hoodie";
import ProductCap from "@/components/ProductCap";
import Record from "@/components/Record";
import Shirt from "@/components/Shirt";

import Testimonial from "@/components/Testimonial";
import { Banner } from "@/components/banner";
import ChooseUs from "@/components/chooseUs";
import Services from "@/components/services";

export default function Home() {
  return (
    section className="pl-0 lg:pl-6">
      <Banner />
      <Record />
      <ProductCap />
      <Shirt />
      <Hoodie />
      <Services />
      <Testimonial />
      <ChooseUs />
      <Footer />
    </section>
  );
}
