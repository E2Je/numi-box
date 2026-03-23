import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import fullBoxImg from "@/assets/full-box.jpeg";
import { whatsappLink } from "@/lib/constants";
const boxFeatures = ["כרית עיניים עם פשתן ופרחי לבנדר", "רול שמנים Dream להרגעה", "ספריי Good Mood לאווירה", "חליטת נומי - לואיזה ומליסה", "נר צף עם ניחוח לבנדר"];
export const FeaturedBox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const link = whatsappLink("היי בתשבע, אשמח להזמין את מארז נומי");
  return <section id="box" className="section-padding bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.8
        }} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-sage/20 via-lavender/20 to-blush/30 rounded-3xl blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={fullBoxImg} alt="מארז נומי שלווה בקופסא - המארז השלם" className="w-full object-cover aspect-[4/3]" loading="lazy" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-8">
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

            {/* Features with Sale Banner */}
            <div className="flex gap-4 items-start">
              {/* Sale Banner */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: -3 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden sm:flex flex-shrink-0 flex-col items-center justify-center bg-gradient-to-br from-terracotta to-terracotta/80 text-white rounded-2xl p-4 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              >
                <span className="text-base font-semibold opacity-90">🌸 מבצע אביב</span>
                <span className="text-4xl font-bold font-mono">199₪</span>
                <span className="text-sm opacity-75 line-through">249₪</span>
              </motion.div>

              <div className="space-y-3 flex-1">
                <span className="text-warm-brown font-medium">מה כולל המארז:</span>
                <ul className="space-y-3">
                  {boxFeatures.map((feature, index) => <motion.li key={feature} initial={{
                  opacity: 0,
                  x: 20
                }} animate={isInView ? {
                  opacity: 1,
                  x: 0
                } : {}} transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.1
                }} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage/30 flex items-center justify-center">
                        <Check className="w-4 h-4 text-sage" />
                      </span>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>)}
                </ul>
              </div>
            </div>
            
            {/* Mobile Sale Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sm:hidden bg-gradient-to-r from-terracotta to-terracotta/80 text-white rounded-xl p-4 text-center shadow-lg"
            >
              <span className="text-lg font-semibold">🌸 מבצע אביב!</span>
              <div className="flex items-center justify-center gap-3 mt-1">
                <span className="text-4xl font-bold font-mono">199₪</span>
                <span className="text-base opacity-75 line-through">249₪</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="pt-4">
              <Button variant="whatsapp" size="lg" asChild className="w-full sm:w-auto">
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label="הזמנת המארז בוואטסאפ">
                  <MessageCircle className="w-5 h-5" />
                  הזמנת המארז בוואטסאפ
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};