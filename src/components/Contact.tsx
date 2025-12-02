import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `היי בתשבע! שמי ${formData.name}.\nטלפון: ${formData.phone}\nהודעה: ${formData.message}`;
    const whatsappLink = `https://wa.me/972556692412?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink, "_blank");
    
    toast({
      title: "הפנייה נשלחה",
      description: "פותח וואטסאפ להמשך התקשורת",
    });
    
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="card-elegant p-8 space-y-6">
                <h3 className="text-xl font-serif text-warm-brown">דרכים ליצירת קשר</h3>
                
                {/* Phone */}
                <a
                  href="tel:0556692412"
                  className="flex items-center gap-4 group"
                  aria-label="התקשרו אלינו"
                >
                  <span className="w-12 h-12 rounded-full bg-lavender/30 flex items-center justify-center group-hover:bg-lavender/50 transition-colors">
                    <Phone className="w-5 h-5 text-terracotta" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">טלפון</p>
                    <p className="text-warm-brown font-medium" dir="ltr">055-669-2412</p>
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
                    href="https://wa.me/972556692412?text=היי בתשבע, אשמח לשמוע עוד על נומי"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="שלחו הודעה בוואטסאפ"
                  >
                    <MessageCircle className="w-5 h-5" />
                    שלחו הודעה בוואטסאפ
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                בת-שבע תשמח לענות לכל שאלה ולעזור להתאים את המתנה המושלמת
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="card-elegant p-8 space-y-6">
                <h3 className="text-xl font-serif text-warm-brown">השאירו פרטים</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                      שם מלא
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-lavender"
                      placeholder="השם שלך"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                      טלפון
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-lavender"
                      placeholder="050-000-0000"
                      dir="ltr"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                      הודעה / מוצר מעניין
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-lavender min-h-[100px]"
                      placeholder="מה תרצו לשאול או להזמין?"
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  <Send className="w-4 h-4" />
                  שליחה
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
