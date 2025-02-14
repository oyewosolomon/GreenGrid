import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import Products from "@/components/sections/CaseStudies";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import GlobalImpact from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Technology from "@/components/sections/Technologies";
import Resources from "@/components/sections/Resources";
import ContactUs from "@/components/sections/Contact";
import BackToTop from "@/components/sections/BackToTop";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs/>     
      <Solutions/>
      <GlobalImpact/>
      <CaseStudies/>
      <Technology/>
      <Resources/>
      <Partners/>
      <Testimonials/>
      <FAQ/>
      <ContactUs />
      <Newsletter/>
      <BackToTop/>
      <Footer/>
    </main>
  );
}