import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-cream">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-8xl font-serif text-terracotta">404</h1>
          <p className="text-2xl text-warm-brown font-serif">הדף לא נמצא</p>
          <p className="text-muted-foreground">הקישור שחיפשת אינו קיים או הוסר.</p>
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-3 bg-terracotta text-white rounded-xl hover:bg-terracotta/90 transition-colors"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
