import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import OurWork from "@/components/OurWork";
import Testimonial from "@/components/Testimonial";
import { Banner } from "@/components/banner";
import ChooseUs from "@/components/chooseUs";
import ConnectCompany from "@/components/connectCompany";
import Services from "@/components/services";

export default function Home() {
  return (
    <section className="pl-0 lg:pl-6">
      <Banner />
      <Services />
      <OurWork />
      <Testimonial />
      <Faq />
      <ContactUs />
      <Footer />
    </section>
  );
}
