import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoImg from "@/assets/numi-logo.jpg";
import { PHONE_DISPLAY, EMAIL } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-warm-brown text-cream/90 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img 
              src={logoImg} 
              alt="NUMI - שלווה בקופסא" 
              className="h-20 w-auto object-contain rounded-lg brightness-110"
            />
            <p className="text-sm text-cream/60">רגעים של שקט, עטופים באהבה</p>
            <a
              href="https://www.instagram.com/numi_box"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors text-sm"
              aria-label="עקבו אחרינו באינסטגרם"
            >
              <Instagram className="w-5 h-5" />
              <span>@numi_box</span>
            </a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-lg font-serif text-cream mb-2">פרטי התקשרות</h3>
            <p className="text-sm text-cream/80">בת-שבע פם גרינברג</p>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`}
              className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>{EMAIL}</span>
            </a>
            <div className="flex items-center gap-2 text-cream/70 text-sm">
              <MapPin className="w-4 h-4" />
              <span>קיבוץ כפר עציון</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-lg font-serif text-cream mb-2">מידע</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link 
                to="/terms" 
                className="text-cream/70 hover:text-cream transition-colors"
              >
                תקנון ומשלוחים
              </Link>
              <Link 
                to="/privacy" 
                className="text-cream/70 hover:text-cream transition-colors"
              >
                מדיניות פרטיות
              </Link>
              <Link 
                to="/accessibility" 
                className="text-cream/70 hover:text-cream transition-colors"
              >
                הצהרת נגישות
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cream/10 text-center space-y-3">
          <p className="text-xs text-cream/40 max-w-2xl mx-auto leading-relaxed">
            התמונות באתר להמחשה בלבד. מאחר ומדובר במוצרים טבעיים, ייתכנו שינויים קלים בגוון, בצורה או במרקם.
          </p>
          <p className="text-sm text-cream/50">
            © {new Date().getFullYear()} NUMI - שלווה בקופסא. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};
