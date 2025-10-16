import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenEmailModal: () => void;
}

export const Header = ({ onOpenEmailModal }: HeaderProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">klyr</span>
          </Link>
          <Badge variant="secondary" className=" sm:flex items-center gap-1 text-xs">
            <Sparkles className="w-3 h-3" />
            Built in Public
          </Badge>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className=" text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            to="/pricing"
            className=" text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Button 
            variant="hero" 
            size="default"
            onClick={onOpenEmailModal}
            className="font-semibold"
          >
            Get Early Access
          </Button>
        </div>
      </nav>
    </header>
  );
};
