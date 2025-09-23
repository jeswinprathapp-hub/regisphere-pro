import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-secondary border-t">
      <div className="container py-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-8 w-8" />
              <span className="text-2xl font-bold">EventHub</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Streamlining event registration and management for organizations worldwide. 
              Join thousands of successful events powered by our platform.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-smooth" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-smooth" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-smooth" />
              <Linkedin className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Browse Events",
                "Create Event", 
                "Event Categories",
                "Pricing",
                "About Us",
                "Help Center"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-smooth">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Categories</h3>
            <ul className="space-y-2">
              {[
                "Technology",
                "Business",
                "Marketing",
                "Design",
                "Health & Wellness",
                "Education"
              ].map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-smooth">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/60" />
                <span className="text-white/80">support@eventhub.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white/60" />
                <span className="text-white/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 EventHub. All rights reserved. Made with ❤️ for event organizers.
          </p>
        </div>
      </div>
    </footer>
  );
}