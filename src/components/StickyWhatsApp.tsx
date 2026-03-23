import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

export const StickyWhatsApp = () => {
  const link = whatsappLink("היי בתשבע, אשמח לשמוע פרטים על מארז נומי");

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 z-50 bg-whatsapp hover:bg-whatsapp-hover text-white p-4 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300"
      aria-label="צור קשר בוואטסאפ"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
};
