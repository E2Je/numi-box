import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import flowers1 from "@/assets/flowers-1.png";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative Flowers */}
      <img
        src={flowers1}
        alt=""
        className="absolute top-0 left-0 w-48 md:w-64 opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <img
        src={flowers1}
        alt=""
        className="absolute bottom-0 right-0 w-48 md:w-64 opacity-20 pointer-events-none rotate-180"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-terracotta font-medium tracking-wide">צרו קשר</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-warm-brown mt-4 mb-6">
              הזמינו רגע של שקט
            </h2>
            <div className="divider-elegant mb-6" />
            <p className="text-muted-foreground max-w-lg mx-auto">
              לביצוע הזמנה, שאלות או התייעצות להתאמת מתנה - אני כאן בשבילכם
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elegant p-8 space-y-6"
          >
            <h3 className="text-xl font-serif text-warm-brown text-center">דרכים ליצירת קשר</h3>
            
            {/* Phone */}
            <a
              href="tel:0507803791"
              className="flex items-center justify-center gap-4 group"
              aria-label="התקשרו אלינו"
            >
              <span className="w-12 h-12 rounded-full bg-lavender/30 flex items-center justify-center group-hover:bg-lavender/50 transition-colors">
                <Phone className="w-5 h-5 text-terracotta" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">טלפון</p>
                <p className="text-warm-brown font-medium" dir="ltr">050-780-3791</p>
              </div>
            </a>

            {/* WhatsApp Button */}
            <Button
              variant="whatsapp"
              size="lg"
              asChild
              className="w-full"
            >
              <a
                href="https://wa.me/972507803791?text=היי בתשבע, אשמח לשמוע עוד על נומי"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="שלחו הודעה בוואטסאפ"
              >
                <MessageCircle className="w-5 h-5" />
                שלחו הודעה בוואטסאפ
              </a>
            </Button>

            <p className="text-sm text-muted-foreground text-center pt-4">
              בת-שבע תשמח לענות לכל שאלה ולעזור להתאים את המתנה המושלמת
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
