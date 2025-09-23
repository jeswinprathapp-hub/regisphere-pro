import { Button } from "@/components/ui/button";
import { Calendar, Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            EventHub
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
            Browse Events
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
            Categories
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
            About
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">
              <User className="h-4 w-4 mr-1" />
              Sign In
            </Link>
          </Button>
          <Button size="sm">Create Event</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <nav className="space-y-3">
              <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">
                Browse Events
              </a>
              <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">
                Categories
              </a>
              <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">
                About
              </a>
              <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">
                Contact
              </a>
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">
                  <User className="h-4 w-4 mr-1" />
                  Sign In
                </Link>
              </Button>
              <Button size="sm">Create Event</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}