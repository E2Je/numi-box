import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { FeaturedBox } from "@/components/FeaturedBox";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { AccessibilityToolbar } from "@/components/AccessibilityToolbar";

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
      <StickyWhatsApp />
      <AccessibilityToolbar />
    </div>
  );
};

export default Index;
