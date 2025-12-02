import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { FeaturedBox } from "@/components/FeaturedBox";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <FeaturedBox />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
