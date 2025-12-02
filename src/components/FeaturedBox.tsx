import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import fullBoxImg from "@/assets/full-box.jpeg";

const boxFeatures = [
  "כרית עיניים עם פשתן ופרחי לבנדר",
  "רול שמנים Dream להרגעה",
  "ספריי Good Mood לאווירה",
  "חליטת נומי - לואיזה ומליסה",
  "נר צף עם ניחוח לבנדר",
];

export const FeaturedBox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappLink = "https://wa.me/972507803791?text=היי בתשבע, אשמח להזמין את מארז נומי";

  return (
    <section id="box" className="section-padding bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-sage/20 via-lavender/20 to-blush/30 rounded-3xl blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={fullBoxImg}
                alt="מארז נומי שלווה בקופסא - המארז השלם"
                className="w-full object-cover aspect-[4/3]"
              />
              {/* Price Badge */}
              <div className="absolute top-6 left-6 bg-card/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-soft">
                <span className="text-3xl font-serif text-terracotta">₪249</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block bg-lavender/30 text-warm-brown px-4 py-1.5 rounded-full text-sm font-medium">
                המארז המלא
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-warm-brown">
                נומי שלווה בקופסא
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                בין אם זה בסוף יום עמוס או בתחילתו של ערב רגוע, נומי שלווה בקופסא כאן כדי להזכיר לך להאט. המתנה המושלמת לעצמך או לאהובים.
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-border via-lavender to-border" />

            {/* Features */}
            <div className="space-y-3">
              <span className="text-warm-brown font-medium">מה כולל המארז:</span>
              <ul className="space-y-3">
                {boxFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage/30 flex items-center justify-center">
                      <Check className="w-4 h-4 text-sage" />
                    </span>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="הזמנת המארז בוואטסאפ"
                >
                  <MessageCircle className="w-5 h-5" />
                  הזמנת המארז בוואטסאפ
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
