import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const Terms = () => {
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
              תקנון אתר נומי - שלווה בקופסא
            </h1>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">1. כללי</h2>
                <p>
                  אתר זה משמש כקטלוג להצגת מוצרי 'נומי'. הרכישה מתבצעת באמצעות יצירת קשר טלפוני או בוואטסאפ.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">2. מוצרים</h2>
                <p>
                  המוצרים באתר הם מוצרי אווירה, ריח וטיפוח טבעיים. ייתכנו שינויים קלים בין התמונות באתר לבין המוצר בפועל בשל אופי הייצור הטבעי.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">3. משלוחים ואספקה</h2>
                <p>
                  זמני האספקה ומחירי המשלוח יתואמו בעת ביצוע ההזמנה הטלפונית.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">4. ביטולים והחזרות</h2>
                <p>
                  ניתן לבטל עסקה בהתאם לחוק הגנת הצרכן, התשמ"א-1981. החזרת מוצרים תתאפשר תוך 14 יום מקבלתם, באריזתם המקורית בלבד וללא שנעשה בהם שימוש. מוצרים שנפתחו לא ניתנים להחזרה מטעמי היגיינה.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">5. אחריות</h2>
                <p>
                  השימוש במוצרים (שמנים, נרות וכו') הוא באחריות המשתמש בלבד. יש לוודא רגישויות לפני שימוש על העור.
                </p>
              </section>
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

export default Terms;
