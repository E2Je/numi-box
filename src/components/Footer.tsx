import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logoImg from "@/assets/numi-logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-warm-brown text-cream/90 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img 
              src={logoImg} 
              alt="NUMI - שלווה בקופסא" 
              className="h-20 w-auto object-contain rounded-lg brightness-110"
            />
            <p className="text-sm text-cream/60">רגעים של שקט, עטופים באהבה</p>
            {/* Instagram */}
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

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/terms" 
              className="text-cream/70 hover:text-cream transition-colors"
            >
              תקנון האתר
            </Link>
            <Link 
              to="/accessibility" 
              className="text-cream/70 hover:text-cream transition-colors"
            >
              הצהרת נגישות
            </Link>
            <a 
              href="tel:0507803791" 
              className="text-cream/70 hover:text-cream transition-colors"
            >
              050-780-3791
            </a>
          </nav>
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
