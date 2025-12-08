import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import eyePillowImg from "@/assets/eye-pillow.jpeg";
import pillow1Img from "@/assets/pillow-1.jpeg";
import pillow2Img from "@/assets/pillow-2.jpeg";
import dreamOilImg from "@/assets/dream-oil.jpeg";
import roll2Img from "@/assets/roll-2.jpeg";
import roll3Img from "@/assets/roll-3.jpeg";
import roll4Img from "@/assets/roll-4.jpeg";
import goodMoodSprayImg from "@/assets/good-mood-spray.jpg";
import spray2Img from "@/assets/spray-2.jpeg";
import spray3Img from "@/assets/spray-3.jpeg";
import teaNumiImg from "@/assets/tea-numi.jpg";
import tea2Img from "@/assets/tea-2.jpeg";
import tea3Img from "@/assets/tea-3.jpeg";
import floatingCandleImg from "@/assets/floating-candle.jpg";

const products = [
  {
    name: "כרית עיניים עם פשתן ופרחי לבנדר",
    price: 69,
    description: "כרית עיניים עדינה, עטופה בבד טטרה רך ונושם ומלאה בפרחי לבנדר טבעיים שהריח שלהם משרה רוגע. הכרית טובה להרפיית העיניים והראש, לשחרור מתחים והזמנה לשקט פנימי ואיזון בין הגוף לנשימה. כרית מושלמת למדיטציה, שינה עמוקה או רגע של התכנסות.",
    images: [eyePillowImg, pillow1Img, pillow2Img]
  },
  {
    name: "רול שמנים Dream",
    price: 49,
    description: "להרגעה ושינה טובה. שילוב של שמנים אתריים טבעיים שנבחרו בקפידה כדי לעזור להרגיע את הגוף והנפש. מרחי לפני השינה על שורש כף היד, על הרקות, מאחורי האוזניים או על הצוואר, הריח עדין, מרגיע ומכין אותך לשינה עמוקה.",
    images: [dreamOilImg, roll2Img, roll3Img, roll4Img]
  },
  {
    name: "ספריי Good Mood",
    price: 49,
    description: "לספריי ריח מעולה של לבנדר ופרדס הדרים. אפשר להשתמש בו לפני השינה, כדי ליצור אווירה רגועה ונעימה בחדר, או פשוט לרסס בחלל כשצריך נשימה של רוגע וטוב. ריסוס קטן וכל החדר מתמלא באנרגיה חיובית.",
    images: [spray2Img, spray3Img]
  },
  {
    name: "חליטת נומי",
    price: 40,
    description: "חליטת לואיזה ומליסה - ניחוח של רוגע, וטעם של שלווה. תערובת טבעית של עלי לואיזה ומליסה, עם ארומה לימונית מרעננת וטעם עדין ונעים. כל לגימה מהחליטה הזו מרגישה כמו רגע של מנוחה בתוך היום.",
    images: [tea2Img, tea3Img]
  },
  {
    name: "נר צף",
    price: 20,
    description: "נר עדין עם להבה חמימה וניחוח רך שמלטף את החושים. הוא נמס באיטיות, מפזר אור שקט וניחוח מרגיע, ויוצר אווירה עוטפת, נעימה ומזמינה. מושלם לרגעים של התכנסות פנימה, מדיטציה, אמבטיה לילית או זמן שקט עם עצמך.",
    images: [floatingCandleImg]
  }
];

export const Products = () => {
  return (
    <section id="products" className="section-padding bg-sage-soft/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-terracotta font-medium tracking-wide">הקולקציה</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-warm-brown mt-4 mb-6">
            המוצרים שלנו:
          </h2>
          <div className="divider-elegant mb-6" />
          <p className="text-muted-foreground">
            כל מוצר נבחר בקפידה כדי להעניק לך רגעים של שקט ורוגע
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} delay={index * 0.1} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          התמונות באתר להמחשה בלבד. מאחר ומדובר במוצרים טבעיים, ייתכנו שינויים קלים בגוון, בצורה או במרקם.
        </motion.p>
      </div>
    </section>
  );
};
