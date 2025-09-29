import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Calendar, MapPin, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import conferenceImage from "@/assets/event-conference.jpg";
import workshopImage from "@/assets/event-workshop.jpg";
import seminarImage from "@/assets/event-seminar.jpg";

const allEvents = [
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

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["Conference", "Workshop", "Seminar", "Masterclass", "Summit", "Competition"];
  const locations = ["San Francisco, CA", "Austin, TX", "New York, NYC", "Miami, FL", "Seattle, WA", "Boston, MA"];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || event.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Events</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover amazing events happening near you. Filter by category, location, or search for specific topics.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-card rounded-2xl p-6 mb-8 shadow-card">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events, workshops, conferences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="shrink-0"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== "all" || selectedLocation !== "all" || searchQuery) && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: {searchQuery}
                  <button onClick={() => setSearchQuery("")} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory("all")} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              )}
              {selectedLocation !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  {selectedLocation}
                  <button onClick={() => setSelectedLocation("all")} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-muted-foreground">
            Showing {filteredEvents.length} of {allEvents.length} events
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Calendar View
            </Button>
            <Button variant="outline" size="sm">
              <MapPin className="h-4 w-4 mr-2" />
              Map View
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all events
            </p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedLocation("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}