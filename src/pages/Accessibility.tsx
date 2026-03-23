import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { EMAIL, PHONE_DISPLAY } from "@/lib/constants";

const Accessibility = () => {
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
              הצהרת נגישות - נומי
            </h1>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                אנו ב'נומי' רואים חשיבות עליונה במתן שירות שוויוני לכלל הלקוחות ובשיפור הנגישות באתר לאנשים עם מוגבלויות.
              </p>

              <p>
                האתר נבנה בהתאם לתקן נגישות תכנים באינטרנט WCAG 2.0 ברמה AA.
              </p>

              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">באתר בוצעו התאמות הכוללות:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>אפשרות לניווט באמצעות מקלדת</li>
                  <li>תמיכה בקוראי מסך</li>
                  <li>ניגודיות צבעים מתאימה</li>
                  <li>טקסטים אלטרנטיביים לתמונות</li>
                  <li>מבנה סמנטי של העמודים</li>
                  <li>גודל טקסט קריא</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">יצירת קשר בנושא נגישות</h2>
                <p>
                  בכל בקשה או בעיה בנושא נגישות ניתן לפנות לרכזת הנגישות, בת-שבע, בטלפון{" "}
                  <a href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`} className="text-terracotta hover:underline" dir="ltr">
                    {PHONE_DISPLAY}
                  </a>{" "}
                  או במייל{" "}
                  <a href={`mailto:${EMAIL}`} className="text-terracotta hover:underline">
                    {EMAIL}
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                עדכון אחרון: {new Date().toLocaleDateString("he-IL", { month: "long", year: "numeric" })}
              </p>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;
