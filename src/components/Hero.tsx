import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-yoga.png";

export const Hero = () => {
  const scrollIndicatorRef = useRef(null);
  const isIndicatorVisible = useInView(scrollIndicatorRef, { once: false });

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="רגע של שלווה עם כרית עיניים נומי"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-cream/95 via-cream/80 to-cream/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mr-auto md:mr-0 md:ml-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-16 h-px bg-terracotta"
            />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-warm-brown leading-tight">
              שלווה בקופסא
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-warm-brown-light font-light">
                רגעים של שקט, עטופים באהבה
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              רגע לעצור ולנשום. נומי כאן כדי להזכיר לך להאט, להתרכך, ולפנות מקום לשינה טובה.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                aria-label="לרכישת המארז"
              >
                לרכישת המארז
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#story")}
                aria-label="קראו עוד על נומי"
              >
                הסיפור שלנו
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - stops animating when out of view */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={isIndicatorVisible ? { y: [0, 10, 0] } : { y: 0 }}
            transition={{ duration: 2, repeat: isIndicatorVisible ? Infinity : 0 }}
            className="w-6 h-10 border-2 border-warm-brown/30 rounded-full flex justify-center pt-2"
            aria-hidden="true"
          >
            <div className="w-1.5 h-3 bg-terracotta/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
