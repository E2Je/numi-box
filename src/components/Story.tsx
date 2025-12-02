import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import packagingImg from "@/assets/packaging.jpg";

export const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="section-padding bg-lavender-soft/30">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender/30 to-sage/20 rounded-3xl blur-2xl" />
              <img
                src={packagingImg}
                alt="אריזות נומי - שלווה בקופסא"
                className="relative rounded-2xl shadow-elegant w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 space-y-6"
          >
            <div className="space-y-4">
              <span className="text-terracotta font-medium tracking-wide">הסיפור שלנו</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-warm-brown">
                נעים להכיר, בת-שבע
              </h2>
            </div>

            <div className="w-16 h-px bg-gradient-to-r from-terracotta to-lavender" />

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                מורה ליוגה כבר למעלה מעשור. במהלך השנים, ראיתי שוב ושוב איך בסיום כל שיעור דווקא הרגעים השקטים, המדיטציה, הנשימות, כרית העיניים הרכה וריח הלבנדר באוויר, הם אלה שהאנשים הכי מחכים להם.
              </p>
              <p>
                הרגע הזה שבו אפשר להרפות. לנשום. פשוט להיות.
              </p>
              <p>
                הבנתי שאני רוצה לארוז את הרגע הזה בקופסה. כדי שכל אחת ואחד יוכלו לקחת הביתה את השקט הזה, את הפינה הזו של רוגע, איזון ושפיות, גם בתוך שגרת החיים העמוסה.
              </p>
              <p className="text-warm-brown font-medium">
                כך נולד 'נומי שלווה בקופסא' - מוצרים מרגיעים, שמחזירים אותך לעצמך.
              </p>
              <p className="italic text-warm-brown-light">
                אני מזמינה אותך לבחור רגע ביום ולפגוש בו את עצמך. לאסוף שלווה. לנשום מחדש.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <span className="font-serif text-xl text-terracotta">— בת-שבע פם גרינברג</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
