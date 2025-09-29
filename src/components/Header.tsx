import { Button } from "@/components/ui/button";
import { Calendar, Search, User, Menu, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

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
          <Link to="/events" className="text-sm font-medium hover:text-primary transition-smooth">
            Browse Events
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-primary transition-smooth">
            Categories
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-smooth">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-smooth">
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/events">
              <Search className="h-4 w-4" />
            </Link>
          </Button>
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">
                {user.email}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={signOut}
                disabled={loading}
              >
                <LogOut className="h-4 w-4 mr-1" />
                Sign Out
              </Button>
              <Button size="sm" asChild>
                <Link to="/create-event">Create Event</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">
                  <User className="h-4 w-4 mr-1" />
                  Sign In
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/register">Create Account</Link>
              </Button>
            </>
          )}
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
              <Link to="/events" className="block text-sm font-medium hover:text-primary transition-smooth">
                Browse Events
              </Link>
              <Link to="/categories" className="block text-sm font-medium hover:text-primary transition-smooth">
                Categories
              </Link>
              <Link to="/about" className="block text-sm font-medium hover:text-primary transition-smooth">
                About
              </Link>
              <Link to="/contact" className="block text-sm font-medium hover:text-primary transition-smooth">
                Contact
              </Link>
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t">
              {user ? (
                <>
                  <span className="text-sm text-muted-foreground px-3">
                    {user.email}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={signOut}
                    disabled={loading}
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Sign Out
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/create-event">Create Event</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/login">
                      <User className="h-4 w-4 mr-1" />
                      Sign In
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/register">Create Account</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}