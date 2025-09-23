import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  attendees: number;
  category: string;
  image: string;
  rating?: number;
  featured?: boolean;
}

export default function EventCard({
  title,
  description,
  date,
  time,
  location,
  price,
  attendees,
  category,
  image,
  rating = 4.8,
  featured = false
}: EventCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-smooth cursor-pointer border-0 shadow-card bg-gradient-card">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        
        {/* Overlay Content */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <Badge variant={featured ? "default" : "secondary"} className="bg-primary text-primary-foreground">
            {category}
          </Badge>
          {featured && (
            <Badge className="bg-event-accent text-white">
              Featured
            </Badge>
          )}
        </div>

        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-gradient-secondary text-white px-4 py-2 rounded-xl font-semibold shadow-button">
            {price === "Free" ? "Free" : `$${price}`}
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{date}</span>
            <Clock className="h-4 w-4 text-primary ml-2" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="line-clamp-1">{location}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>{attendees} attending</span>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button className="flex-1" size="sm">
            Register Now
          </Button>
          <Button variant="outline" size="sm">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}