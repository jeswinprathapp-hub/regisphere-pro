import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Calendar, MapPin } from "lucide-react";
import conferenceImage from "@/assets/event-conference.jpg";
import workshopImage from "@/assets/event-workshop.jpg";
import seminarImage from "@/assets/event-seminar.jpg";

const featuredEvents = [
  {
    title: "Annual Tech Conference 2024",
    description: "Join industry leaders discussing the latest in technology, AI, and digital transformation. Network with 500+ professionals.",
    date: "Dec 15, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco Convention Center, CA",
    price: "299",
    attendees: 487,
    category: "Conference",
    image: conferenceImage,
    rating: 4.9,
    featured: true,
  },
  {
    title: "React Development Workshop",
    description: "Hands-on workshop covering advanced React concepts, hooks, and best practices. Perfect for intermediate developers.",
    date: "Dec 8, 2024",
    time: "10:00 AM - 4:00 PM", 
    location: "TechHub Austin, TX",
    price: "149",
    attendees: 28,
    category: "Workshop",
    image: workshopImage,
    rating: 4.8,
  },
  {
    title: "Business Leadership Seminar",
    description: "Learn essential leadership skills and strategies from successful executives. Interactive sessions and networking opportunities.",
    date: "Dec 12, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Downtown Business Center, NYC",
    price: "199",
    attendees: 156,
    category: "Seminar", 
    image: seminarImage,
    rating: 4.7,
  },
];

const upcomingEvents = [
  {
    title: "Digital Marketing Masterclass",
    description: "Master the latest digital marketing strategies and tools. Learn from industry experts and get hands-on experience.",
    date: "Dec 18, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Creative Space Miami, FL",
    price: "179",
    attendees: 89,
    category: "Masterclass",
    image: conferenceImage,
    rating: 4.6,
  },
  {
    title: "AI & Machine Learning Summit",
    description: "Explore the future of AI and ML with leading researchers and practitioners. Deep dive into practical applications.",
    date: "Dec 22, 2024", 
    time: "9:00 AM - 5:00 PM",
    location: "Innovation Hub Seattle, WA",
    price: "399",
    attendees: 234,
    category: "Summit",
    image: workshopImage,
    rating: 4.9,
  },
  {
    title: "Startup Pitch Competition",
    description: "Watch innovative startups pitch their ideas to investors. Great networking opportunity for entrepreneurs.",
    date: "Dec 20, 2024",
    time: "6:00 PM - 9:00 PM", 
    location: "Startup Incubator Boston, MA",
    price: "Free",
    attendees: 312,
    category: "Competition",
    image: seminarImage,
    rating: 4.5,
  },
];

export default function EventsSection() {
  return (
    <div className="py-20 space-y-20">
      {/* Featured Events */}
      <section className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Don't miss these highly-rated events happening soon. Limited seats available.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="lg">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="lg">
              View All Events
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gradient-to-br from-accent to-muted/50 py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Categories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover events across different industries and interests
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Technology", count: 245, icon: "💻" },
              { name: "Business", count: 189, icon: "💼" },
              { name: "Design", count: 156, icon: "🎨" },
              { name: "Marketing", count: 134, icon: "📈" },
              { name: "Health", count: 98, icon: "🏥" },
              { name: "Education", count: 87, icon: "📚" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 text-center hover:shadow-card transition-smooth cursor-pointer group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-smooth">
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} events</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Plan ahead with these exciting events coming up this month
            </p>
          </div>
          
          <Button variant="event" size="lg">
            <Calendar className="h-4 w-4 mr-2" />
            View Calendar
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero text-white py-20 rounded-3xl mx-4 md:mx-8 shadow-elegant">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Host Your Event?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Join thousands of organizers using EventHub to create successful events. 
              Easy setup, powerful tools, and seamless registration management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                Create Your Event
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/20">
                <MapPin className="h-5 w-5 mr-2" />
                Find Venues
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}