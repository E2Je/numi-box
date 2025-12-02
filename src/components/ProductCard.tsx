import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
  delay?: number;
}

export const ProductCard = ({ name, price, description, image, delay = 0 }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(`היי בתשבע, אשמח להזמין את ${name}`);
  const whatsappLink = `https://wa.me/972507803791?text=${whatsappMessage}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="card-elegant overflow-hidden h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square bg-sand/30">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
          />
          {/* Price Badge */}
          <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-soft">
            <span className="text-xl font-serif text-terracotta">₪{price}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-serif text-warm-brown mb-3">{name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
            {description}
          </p>
          <Button
            variant="soft"
            size="sm"
            asChild
            className="w-full"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`הזמנת ${name} בוואטסאפ`}
            >
              <MessageCircle className="w-4 h-4" />
              הזמנה בוואטסאפ
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
};
