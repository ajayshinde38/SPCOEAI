import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-md animate-fade-in-up">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Home size={18} /> Go Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Contact Support <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              If you believe this is a mistake, please contact us:
            </p>
            <a
              href="mailto:info@vidyapratishthan.org"
              className="text-primary font-semibold hover:underline"
            >
              info@vidyapratishthan.org
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
