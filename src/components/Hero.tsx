import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Calendar, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-events.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional event and conference" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover Amazing
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Events Near You
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals in conferences, workshops, and seminars. 
            Register instantly, connect with peers, and advance your career.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search events, workshops, conferences..."
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Find Events
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Browse All Events
              <Calendar className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Create Event
              <Zap className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">50K+</div>
              <div className="text-white/80">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">200K+</div>
              <div className="text-white/80">Happy Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">1K+</div>
              <div className="text-white/80">Event Organizers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}