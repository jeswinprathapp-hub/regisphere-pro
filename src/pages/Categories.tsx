import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    name: "Technology",
    description: "Conferences, workshops, and seminars about the latest in tech, AI, and digital innovation.",
    count: 245,
    icon: "💻",
    trending: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Business",
    description: "Leadership seminars, networking events, and business strategy workshops.",
    count: 189,
    icon: "💼",
    trending: true,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Design",
    description: "Creative workshops, design thinking sessions, and UX/UI masterclasses.",
    count: 156,
    icon: "🎨",
    trending: false,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Marketing",
    description: "Digital marketing strategies, social media workshops, and brand building events.",
    count: 134,
    icon: "📈",
    trending: true,
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Health & Wellness",
    description: "Medical conferences, wellness workshops, and healthcare innovation events.",
    count: 98,
    icon: "🏥",
    trending: false,
    color: "from-teal-500 to-green-500"
  },
  {
    name: "Education",
    description: "Academic conferences, teaching workshops, and educational technology events.",
    count: 87,
    icon: "📚",
    trending: false,
    color: "from-indigo-500 to-blue-500"
  },
  {
    name: "Finance",
    description: "Investment seminars, fintech conferences, and financial planning workshops.",
    count: 76,
    icon: "💰",
    trending: true,
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Entertainment",
    description: "Music festivals, film screenings, and entertainment industry networking events.",
    count: 65,
    icon: "🎭",
    trending: false,
    color: "from-pink-500 to-rose-500"
  },
  {
    name: "Sports",
    description: "Athletic competitions, sports management seminars, and fitness workshops.",
    count: 54,
    icon: "⚽",
    trending: false,
    color: "from-lime-500 to-green-500"
  }
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Categories</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore events across different industries and interests. Find the perfect category for your professional development.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Trending Categories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {categories.filter(cat => cat.trending).map((category, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-smooth cursor-pointer border-0 shadow-card">
                <div className={`h-32 bg-gradient-to-br ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-4xl group-hover:scale-110 transition-smooth">
                      {category.icon}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white font-medium">
                      Trending
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {category.count} events
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={`/events?category=${category.name.toLowerCase()}`}>
                <Card className="group overflow-hidden hover:shadow-elegant transition-smooth cursor-pointer border-0 shadow-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-smooth">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                            {category.name}
                          </h3>
                          {category.trending && (
                            <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                              Trending
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">
                            {category.count} events available
                          </span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-hero text-white rounded-3xl p-12 shadow-elegant">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Category?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We're always adding new categories based on demand. Suggest a category or create your own event in any field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Suggest Category
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20">
              Create Event
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}