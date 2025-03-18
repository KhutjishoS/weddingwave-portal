
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassPanel from "@/components/ui/GlassPanel";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-wedding-50 px-4">
      <GlassPanel intensity="medium" className="max-w-lg w-full p-12 text-center">
        <h1 className="text-6xl font-display font-bold text-wedding-800 mb-4">404</h1>
        <div className="w-16 h-1 bg-wedding-300 mx-auto mb-8"></div>
        <p className="text-xl text-wedding-700 mb-8">
          We couldn't find the page you're looking for. The page may have been moved or no longer exists.
        </p>
        <Button 
          asChild
          className="bg-wedding-700 hover:bg-wedding-800 text-white"
        >
          <Link to="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </GlassPanel>
    </div>
  );
};

export default NotFound;
