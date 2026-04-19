import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Phase = "inhale" | "hold1" | "exhale" | "hold2";
type Stage = "idle" | "active" | "done";

const PHASE_SEQUENCE: Phase[] = ["inhale", "hold1", "exhale", "hold2"];
const PHASE_DURATION = 4;

const PHASE_SUBTITLE: Record<Phase, string> = {
  inhale: "שאיפה",
  hold1:  "שהייה",
  exhale: "נשיפה",
  hold2:  "מנוחה",
};

// Each phase gets a distinct color from the site palette
const PHASE_COLORS: Record<Phase, { gradient: string; glow: string }> = {
  inhale: {
    gradient: "linear-gradient(135deg, hsl(270 35% 72%), hsl(270 28% 60%))",
    glow:     "hsl(270 35% 72% / 0.5)",
  },
  hold1: {
    gradient: "linear-gradient(135deg, hsl(20 42% 58%), hsl(15 38% 68%))",
    glow:     "hsl(20 42% 58% / 0.5)",
  },
  exhale: {
    gradient: "linear-gradient(135deg, hsl(135 28% 58%), hsl(135 22% 70%))",
    glow:     "hsl(135 28% 58% / 0.45)",
  },
  hold2: {
    gradient: "linear-gradient(135deg, hsl(35 38% 75%), hsl(25 32% 68%))",
    glow:     "hsl(35 38% 75% / 0.5)",
  },
};

const CIRCLE_SCALE: Record<Phase, number> = {
  inhale: 1.45,
  hold1:  1.45,
  exhale: 0.85,
  hold2:  0.85,
};

const TRANSITION_DURATION: Record<Phase, number> = {
  inhale: PHASE_DURATION - 0.3,
  hold1:  0.15,
  exhale: PHASE_DURATION - 0.3,
  hold2:  0.15,
};

// 10 texts per phase — one shown per full cycle (cycle 0–9, then wraps)
const PHASE_TEXTS: Record<Phase, string[]> = {
  inhale: [
    "שאיפה עמוקה ורכה",
    "תכניסי אוויר לאט פנימה",
    "תני לבית החזה להתרחב",
    "שאיפה נקייה של חיּוּת",
    "תמלאי את הריאות בנחת",
    "תני לבטן לעלות בעדינות",
    "שאיפה איטית דרך האף",
    "תכניסי רוגע פנימה",
    "תני לאוויר למלא אותך",
    "שאיפה של התחדשות",
  ],
  hold1: [
    "פשוט להיות עם המלאות",
    "להחזיק את השלווה בפנים",
    "רגע של שקט מוחלט",
    "גוף נינוח, ראש שקט",
    "תני לשמן השלווה לעטוף אותך",
    "שהייה רכה בתוך השקט",
    "לנצור את הרגע הזה",
    "להרגיש את הלב נרגע",
    "יציבות ושלווה פנימית",
    "את כאן, בזמן שלך",
  ],
  exhale: [
    "שחררי הכל החוצה",
    "תני לכתפיים לצנוח מטה",
    "נשיפה ארוכה ומרפה",
    "להוציא את כל המתח",
    "להרפות את הלסת והפנים",
    "לתת לגוף להפוך כבד",
    "נשיפה איטית דרך הפה",
    "שחררי את המחשבות",
    "רפיון מלא של כל הגוף",
    "להוציא את המאמץ החוצה",
  ],
  hold2: [
    "מנוחה מוחלטת בריק",
    "שקט לפני השאיפה הבאה",
    "להתמסר לרגע של ריקנות",
    "הגוף משחרר הכל",
    "תחושת קלילות ורפיון",
    "להישאר בשקט הפנימי",
    "מנוחה עמוקה למערכת",
    "חכי לרגע הבא בנחת",
    "ריק שקט ומרגיע",
    "להתכונן להתחלה חדשה",
  ],
};

const TIMER_OPTIONS = [
  { label: "דקה",    value: 60  },
  { label: "3 דקות", value: 180 },
  { label: "5 דקות", value: 300 },
];

const formatTime = (s: number) =>
  `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

export const BreathingExercise = () => {
  const [stage,            setStage]            = useState<Stage>("idle");
  const [phaseIndex,       setPhaseIndex]       = useState(0);
  const [phaseTimeLeft,    setPhaseTimeLeft]    = useState(PHASE_DURATION);
  const [totalTimeLeft,    setTotalTimeLeft]    = useState(180);
  const [selectedDuration, setSelectedDuration] = useState(180);
  const [cycleIndex,       setCycleIndex]       = useState(0);

  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef   = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const currentPhase = PHASE_SEQUENCE[phaseIndex];
  const cycleText    = PHASE_TEXTS[currentPhase][cycleIndex % 10];

  useEffect(() => {
    if (stage !== "active") return;

    intervalRef.current = setInterval(() => {
      setTotalTimeLeft(prev => Math.max(0, prev - 1));
      setPhaseTimeLeft(prev => {
        const next = prev - 1;
        if (next <= 0) {
          setPhaseIndex(i => {
            const nextPhase = (i + 1) % PHASE_SEQUENCE.length;
            if (nextPhase === 0) setCycleIndex(c => c + 1);
            return nextPhase;
          });
          return PHASE_DURATION;
        }
        return next;
      });
    }, 1000);

    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [stage]);

  useEffect(() => {
    if (stage === "active" && totalTimeLeft === 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setStage("done");
    }
  }, [totalTimeLeft, stage]);

  const startExercise = useCallback(() => {
    setPhaseIndex(0);
    setPhaseTimeLeft(PHASE_DURATION);
    setTotalTimeLeft(selectedDuration);
    setCycleIndex(0);
    setStage("active");
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [selectedDuration]);

  const stopExercise = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setStage("done");
  };

  const resetExercise = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setPhaseIndex(0);
    setPhaseTimeLeft(PHASE_DURATION);
    setCycleIndex(0);
    setStage("idle");
  };

  return (
    <section id="breathing" ref={sectionRef} className="section-padding bg-cream/60">
      <div className="w-full max-w-2xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <AnimatePresence mode="wait">

          {/* ── IDLE ── */}
          {stage === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="w-full space-y-8"
            >
              {/* Header */}
              <div className="space-y-4">
                <motion.span
                  className="text-4xl block"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  🌿
                </motion.span>
                <h2 className="text-2xl md:text-3xl font-serif text-warm-brown leading-snug">
                  לפני שנמשיך —<br />
                  אני מזמינה אותך לקחת רגע של שקט לעצמך<br className="hidden md:block" />
                  <span className="text-terracotta"> ולנשום עם נומי</span>
                </h2>
                <div className="divider-elegant" />
              </div>

              {/* What is box breathing */}
              <div className="space-y-4 text-right">
                <p className="text-muted-foreground leading-relaxed">
                  נשימת קופסה היא הזמנה לעצור את רעשי הרקע ולהתחבר לקצב הפנימי שלך.
                  זו טכניקה עוצמתית המאפשרת לגוף ולנפש להסתנכרן מחדש, להוריד את רמת המתח
                  ולשפר את הריכוז.
                </p>
                <p className="text-warm-brown font-medium text-sm">למה זה טוב עבורך?</p>
                <ul className="space-y-2">
                  {[
                    ["השקטת המחשבות", "הריכוז בספירה ובקצב משחרר עומס מנטלי."],
                    ["איזון המערכת העצבית", "מעבר ממצב של מתח למצב של רגיעה עמוקה."],
                    ["חיבור חושי", "הזדמנות לעצור הכל ולהרגיש את הגוף שלך כאן ועכשיו."],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-terracotta mt-0.5 flex-shrink-0">✦</span>
                      <span><strong className="text-warm-brown">{title}</strong> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparation */}
              <div className="bg-card/60 rounded-2xl p-5 space-y-3 border border-border/40 text-right">
                <p className="text-warm-brown font-medium">הכנה לתרגול</p>
                <p className="text-sm text-muted-foreground">כדי להפיק את המקסימום מהרגע הזה:</p>
                <ol className="space-y-2">
                  {[
                    "מרחי מעט משמן הרול Dream על פרקי הידיים ונשמי את הניחוח.",
                    "רססי מתרסיס ה Good Mood בחלל החדר.",
                    "הניחי את הטלפון במקום יציב מולך, בגובה העיניים.",
                    "שבי בתנוחה נינוחה והתרכזי בעיגול שעל המסך — הוא יוביל אותך.",
                    "טיפ של NUMI: אם יש לך כרית עיניים, מומלץ לבצע 5 סבבים מול המסך ולאחר מכן להניח את הכרית על העיניים ולהמשיך בנשימות עם העיגול הפנימי שלך.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-terracotta font-medium flex-shrink-0">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* How to */}
              <div className="space-y-3 text-right">
                <p className="text-warm-brown font-medium">איך מבצעים?</p>
                <p className="text-sm text-muted-foreground">ארבעה שלבים שווים — 4 שניות לכל שלב:</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "שאיפה",  desc: "הכניסי אוויר לאט ובנחת",           bg: "bg-lavender/20"    },
                    { label: "שהייה",  desc: "החזיקי (ריאות מלאות)",              bg: "bg-terracotta/15"  },
                    { label: "נשיפה",  desc: "שחררי את האוויר והמתח",             bg: "bg-sage/20"        },
                    { label: "מנוחה",  desc: "שהייה רגועה לפני הסבב הבא",        bg: "bg-blush/40"       },
                  ].map(({ label, desc, bg }) => (
                    <div key={label} className={`${bg} rounded-xl p-3 text-right`}>
                      <p className="text-warm-brown font-medium text-sm">{label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timer selector */}
              <div className="space-y-3">
                <p className="text-warm-brown font-medium text-sm">בחרי משך תרגול:</p>
                <div className="flex justify-center gap-3 flex-wrap">
                  {TIMER_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setSelectedDuration(opt.value)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedDuration === opt.value
                          ? "bg-terracotta text-white shadow-soft"
                          : "bg-card border border-border text-muted-foreground hover:border-terracotta hover:text-terracotta"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="hero" size="lg" onClick={startExercise}>
                להתחיל
              </Button>

              <p className="text-xs text-muted-foreground/60 pt-2">
                התרגול מיועד למטרות רווחה כללית בלבד ואינו מהווה תחליף לייעוץ רפואי.
                כל מי שמבצע את התרגיל עושה זאת על אחריותו בלבד.
              </p>
            </motion.div>
          )}

          {/* ── ACTIVE ── */}
          {stage === "active" && (
            <motion.div
              key="active"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-8 w-full"
            >
              {/* Circle — timer + phase label live inside */}
              <div className="relative flex items-center justify-center" style={{ height: 300 }}>
                {/* Halo */}
                {!reduceMotion && (
                  <motion.div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: 160, height: 160,
                      background: PHASE_COLORS[currentPhase].gradient,
                      opacity: 0.18,
                    }}
                    animate={{
                      scale: CIRCLE_SCALE[currentPhase] * 1.45,
                      background: PHASE_COLORS[currentPhase].gradient,
                    }}
                    transition={{ duration: TRANSITION_DURATION[currentPhase], ease: "easeInOut" }}
                  />
                )}

                {/* Main circle */}
                <motion.div
                  className="relative rounded-full flex flex-col items-center justify-center gap-0.5"
                  style={{ width: 160, height: 160 }}
                  animate={{
                    scale:      CIRCLE_SCALE[currentPhase],
                    background: PHASE_COLORS[currentPhase].gradient,
                    boxShadow:  `0 0 60px ${PHASE_COLORS[currentPhase].glow}`,
                  }}
                  transition={{
                    scale:      { duration: TRANSITION_DURATION[currentPhase], ease: "easeInOut" },
                    background: { duration: 0.8 },
                    boxShadow:  { duration: 0.8 },
                  }}
                >
                  {/* Phase label */}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`label-${currentPhase}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs font-medium tracking-widest uppercase"
                      style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}
                    >
                      {PHASE_SUBTITLE[currentPhase]}
                    </motion.span>
                  </AnimatePresence>

                  {/* Countdown */}
                  <motion.span
                    key={phaseTimeLeft}
                    initial={{ scale: 1.25, opacity: 0.6 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="font-mono font-bold leading-none"
                    style={{ fontSize: "3rem", color: "white", textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
                  >
                    {phaseTimeLeft}
                  </motion.span>

                  {/* שניות */}
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.75)", textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}
                  >
                    שניות
                  </span>
                </motion.div>
              </div>

              {/* Rotating phrase — below the circle */}
              <div className="min-h-[3.5rem] flex items-center justify-center px-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${currentPhase}-${cycleIndex}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5 }}
                    className="text-base text-warm-brown font-medium text-center leading-relaxed"
                  >
                    {cycleText}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Total time remaining */}
              <p className="text-sm text-muted-foreground font-mono tracking-wide">
                זמן שנותר: {formatTime(totalTimeLeft)}
              </p>

              <Button variant="outline" size="sm" onClick={stopExercise}>
                סיום
              </Button>
            </motion.div>
          )}

          {/* ── DONE ── */}
          {stage === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.span
                className="text-5xl block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                🌸
              </motion.span>
              <h3 className="text-2xl font-serif text-warm-brown">כל הכבוד</h3>
              <p className="text-muted-foreground leading-relaxed">
                הקדשת לעצמך רגע אמיתי של שקט.
                <br />
                הגוף שלך מרגיש את ההבדל.
              </p>
              <p className="text-terracotta text-sm font-medium">
                ✦ תמיד אפשר לחזור לפה לתרגל ✦
              </p>
              <Button variant="hero" onClick={resetExercise}>
                לתרגל שוב
              </Button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};
