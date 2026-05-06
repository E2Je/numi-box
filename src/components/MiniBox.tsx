import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import miniBoxImg from "@/assets/mini-box.jpeg";
import { whatsappLink } from "@/lib/constants";

const items = [
  {
    title: "חליטת לואיזה ומליסה",
    desc:  "תערובת צמחים טבעית להרגעה פנימית ושינה מתוקה.",
    emoji: "🍃",
  },
  {
    title: "רול DREAM",
    desc:  "תערובת שמנים אתריים למריחה על נקודות הדופק, להרפיה מיידית.",
    emoji: "🌿",
  },
  {
    title: "כרית עיניים בניחוח לבנדר",
    desc:  "המגע המלטף שסוגר את היום ומאפשר מנוחה עמוקה.",
    emoji: "🌸",
  },
];

export const MiniBox = () => {
  const ref  = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const link = whatsappLink('היי בתשבע, אשמח להזמין את מארז "רגע של שקט" ב-149₪');

  return (
    <section id="mini-box" className="section-padding bg-lavender-soft/20">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content — right column in RTL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block bg-blush/50 text-warm-brown px-4 py-1.5 rounded-full text-sm font-medium">
                מארז בוטיקי
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-warm-brown">
                מארז &quot;רגע של שקט&quot;
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                רגע של שקט לעצמך. יצרנו עבורך מארז בוטיקי, שמרכז את כל הקסם של נומי בגרסה קלילה,
                מבלי להתפשר על התחושה העוטפת. מושלם כמתנה לחברה אהובה, ליולדת, או לעצמך 🍃
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-border via-lavender to-border" />

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold font-mono text-terracotta">149₪</span>
              <span className="text-lg text-muted-foreground line-through opacity-60">199₪</span>
            </div>

            {/* Items list */}
            <div className="space-y-3">
              <p className="text-warm-brown font-medium">מה מחכה לך בקופסה?</p>
              <ul className="space-y-4">
                {items.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                    <div>
                      <span className="text-warm-brown font-medium text-sm">{item.title}</span>
                      <span className="text-muted-foreground text-sm"> - {item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button variant="whatsapp" size="lg" asChild className="w-full sm:w-auto">
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label="הזמנת המארז בוואטסאפ">
                  <MessageCircle className="w-5 h-5" />
                  הזמנת המארז בוואטסאפ
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image — left column in RTL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-lavender/20 via-blush/20 to-sage/20 rounded-3xl blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={miniBoxImg}
                alt='מארז נומי "רגע של שקט" - מארז 3 מוצרים'
                className="w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
