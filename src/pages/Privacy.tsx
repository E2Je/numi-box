import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-card shadow-soft py-4">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowRight className="w-4 h-4" />
              חזרה לדף הבית
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-serif text-warm-brown mb-8">
              מדיניות פרטיות
            </h1>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>אנו מכבדים את פרטיותכם.</p>
              
              <p>
                המידע הנאסף (שם, טלפון, כתובת, מייל) משמש אך ורק לצורך ביצוע ההזמנה, יצירת קשר ומשלוח.
              </p>
              
              <p>איננו שומרים פרטי אשראי.</p>
              
              <p>האתר משתמש ב-Cookies לצורך תפעול תקין ושיפור החוויה.</p>
              
              <p>
                לכל בקשה לעיון במידע, תיקון או הסרה מהמאגר, ניתן לפנות למייל:{" "}
                <a href="mailto:batsh.pam@gmail.com" className="text-terracotta hover:underline">
                  batsh.pam@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                עדכון אחרון: דצמבר 2024
              </p>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
