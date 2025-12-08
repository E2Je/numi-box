import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
const Terms = () => {
  return <div className="min-h-screen flex flex-col">
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
          <motion.article initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif text-warm-brown mb-8">
              תקנון, משלוחים והחזרות - נומי
            </h1>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">כללי וגיל רכישה</h2>
                <p>
                  האתר משמש כקטלוג לרכישת מוצרי אווירה. הרכישה מותרת לגילאי 18 ומעלה בלבד.
                </p>
                <p>
                  המחירים באתר כוללים מע"מ כחוק.
                </p>
                <p>
                  התמונות באתר להמחשה בלבד וייתכנו שינויים קלים בגוון או במרקם (מוצרים טבעיים).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">משלוחים</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>מארז 'שלווה בקופסא': משלוח חינם.</li>
                  <li>מוצרים בודדים: 25 ₪ דמי משלוח.</li>
                  <li>זמן אספקה: עד 7 ימי עסקים.</li>
                  <li>איסוף עצמי: מקיבוץ כפר עציון (בתיאום מראש).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">מדיניות החזרות וביטולים</h2>
                <p>
                  ניתן לבטל עסקה תוך 14 יום מקבלת המוצר, כשהוא באריזתו המקורית ולא נעשה בו שימוש.
                </p>
                <p>
                  הודעת ביטול יש לשלוח במייל:{" "}
                  <a href="mailto:batsh.pam@gmail.com" className="text-terracotta hover:underline">
                    batsh.pam@gmail.com
                  </a>{" "}
                  או בוואטסאפ:{" "}
                  <a href="tel:0507803791" className="text-terracotta hover:underline" dir="ltr">
                    050-7803791
                  </a>.
                </p>
                <p>
                  החזרת המוצרים תתבצע לכתובתנו בקיבוץ כפר עציון על חשבון הלקוח.
                </p>
                <p>
                  במקרה של ביטול שלא עקב פגם, ייגבו דמי ביטול של 5% או 100 ₪ (הנמוך מביניהם).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif text-warm-brown mb-3">אחריות רפואית</h2>
                <p>
                  המוצרים הינם מוצרי אווירה וטיפוח ואינם מהווים תחליף לייעוץ או טיפול רפואי. האחריות על השימוש הינה על המשתמש בלבד.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                עדכון אחרון: דצמבר 2025
              </p>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Terms;