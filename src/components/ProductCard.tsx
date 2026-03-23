import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  delay?: number;
}

const FALLBACK_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23f5ede6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='%23a07855'%3Eתמונה לא זמינה%3C/text%3E%3C/svg%3E";

export const ProductCard = ({
  name,
  price,
  originalPrice,
  description,
  images,
  delay = 0,
}: ProductCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const link = whatsappLink(`היי בתשבע, אשמח להזמין את ${name}`);

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const goToNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="card-elegant overflow-hidden h-full flex flex-col">
        {/* Image Container with Carousel */}
        <div className="relative overflow-hidden aspect-square bg-sand/30">
          <img
            src={images[currentIndex]}
            alt={`${name} - תמונה ${currentIndex + 1}`}
            className="w-full h-full object-contain p-4 transition-all duration-500"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
            }}
          />

          {/* Navigation Arrows - only show if multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card rounded-full p-1.5 shadow-soft transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="תמונה הבאה"
              >
                <ChevronRight className="w-5 h-5 text-warm-brown" />
              </button>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card rounded-full p-1.5 shadow-soft transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="תמונה קודמת"
              >
                <ChevronLeft className="w-5 h-5 text-warm-brown" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? "bg-terracotta w-4"
                        : "bg-warm-brown/30 hover:bg-warm-brown/50"
                    }`}
                    aria-label={`עבור לתמונה ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Price Badge */}
          <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-soft flex flex-col items-center">
            {originalPrice && (
              <span className="text-sm text-muted-foreground font-mono line-through">
                ₪{originalPrice}
              </span>
            )}
            <span className="text-xl text-terracotta font-mono text-center">
              ₪{price}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-serif text-warm-brown mb-3">{name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
            {description}
          </p>
          <Button variant="soft" size="sm" asChild className="w-full">
            <a
              href={link}
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
