import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Accessibility, 
  ZoomIn, 
  ZoomOut, 
  Type, 
  Contrast, 
  MousePointer, 
  X,
  RotateCcw
} from "lucide-react";

interface AccessibilityState {
  fontSize: number;
  highContrast: boolean;
  largeCursor: boolean;
  linkHighlight: boolean;
}

const defaultState: AccessibilityState = {
  fontSize: 100,
  highContrast: false,
  largeCursor: false,
  linkHighlight: false,
};

export const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilityState>(defaultState);

  const updateFontSize = (delta: number) => {
    const newSize = Math.min(150, Math.max(80, settings.fontSize + delta));
    setSettings(prev => ({ ...prev, fontSize: newSize }));
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleHighContrast = () => {
    const newValue = !settings.highContrast;
    setSettings(prev => ({ ...prev, highContrast: newValue }));
    document.documentElement.classList.toggle("high-contrast", newValue);
  };

  const toggleLargeCursor = () => {
    const newValue = !settings.largeCursor;
    setSettings(prev => ({ ...prev, largeCursor: newValue }));
    document.documentElement.classList.toggle("large-cursor", newValue);
  };

  const toggleLinkHighlight = () => {
    const newValue = !settings.linkHighlight;
    setSettings(prev => ({ ...prev, linkHighlight: newValue }));
    document.documentElement.classList.toggle("highlight-links", newValue);
  };

  const resetAll = () => {
    setSettings(defaultState);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.classList.remove("high-contrast", "large-cursor", "highlight-links");
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-warm-brown hover:bg-warm-brown-light text-cream p-2 rounded-r-none rounded-l-lg shadow-elegant transition-all duration-300"
        aria-label="פתח תפריט נגישות"
        title="נגישות"
      >
        <Accessibility className="w-5 h-5" />
      </motion.button>

      {/* Toolbar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-card border border-border rounded-l-2xl shadow-elegant p-4 w-56"
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Accessibility className="w-4 h-4" />
                נגישות
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="סגור תפריט נגישות"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Font Size */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Type className="w-4 h-4" />
                גודל טקסט: {settings.fontSize}%
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => updateFontSize(-10)}
                  className="flex-1 p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  aria-label="הקטן טקסט"
                >
                  <ZoomOut className="w-4 h-4 mx-auto" />
                </button>
                <button
                  onClick={() => updateFontSize(10)}
                  className="flex-1 p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  aria-label="הגדל טקסט"
                >
                  <ZoomIn className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>

            {/* Toggle Options */}
            <div className="space-y-2 mb-4">
              <button
                onClick={toggleHighContrast}
                className={`w-full p-2 rounded-lg text-sm text-right flex items-center gap-2 transition-colors ${
                  settings.highContrast 
                    ? "bg-terracotta text-white" 
                    : "bg-muted hover:bg-muted/80"
                }`}
                aria-pressed={settings.highContrast}
              >
                <Contrast className="w-4 h-4" />
                ניגודיות גבוהה
              </button>

              <button
                onClick={toggleLargeCursor}
                className={`w-full p-2 rounded-lg text-sm text-right flex items-center gap-2 transition-colors ${
                  settings.largeCursor 
                    ? "bg-terracotta text-white" 
                    : "bg-muted hover:bg-muted/80"
                }`}
                aria-pressed={settings.largeCursor}
              >
                <MousePointer className="w-4 h-4" />
                סמן מוגדל
              </button>

              <button
                onClick={toggleLinkHighlight}
                className={`w-full p-2 rounded-lg text-sm text-right flex items-center gap-2 transition-colors ${
                  settings.linkHighlight 
                    ? "bg-terracotta text-white" 
                    : "bg-muted hover:bg-muted/80"
                }`}
                aria-pressed={settings.linkHighlight}
              >
                <Type className="w-4 h-4" />
                הדגשת קישורים
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetAll}
              className="w-full p-2 border border-border rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-muted transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              איפוס הגדרות
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
