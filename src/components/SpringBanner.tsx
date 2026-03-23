import { motion, useReducedMotion } from "framer-motion";
import springBannerImg from "@/assets/spring-banner.jpg";

const floatingPetals = [
  { emoji: "🌸", left: "5%",  top: "20%", duration: 3.2, delay: 0 },
  { emoji: "🌼", left: "50%", top: "65%", duration: 2.8, delay: 0.5 },
  { emoji: "🌺", left: "90%", top: "25%", duration: 3.8, delay: 1.1 },
];

export const SpringBanner = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative"
      >
        <img
          src={springBannerImg}
          alt="מבצעי אביב נומי"
          className="w-full object-cover max-h-[520px]"
          loading="lazy"
        />

        {/* Warm glow pulse */}
        {!reduceMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 80px 10px rgba(255,220,180,0.25)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Floating petals - skipped for reduced-motion users */}
      {!reduceMotion &&
        floatingPetals.map((petal, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl pointer-events-none select-none"
            style={{ left: petal.left, top: petal.top }}
            animate={{ y: [0, -18, 0], rotate: [0, 12, -12, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: petal.duration, repeat: Infinity, delay: petal.delay, ease: "easeInOut" }}
          >
            {petal.emoji}
          </motion.span>
        ))}
    </section>
  );
};
