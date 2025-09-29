import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { label: "Events Hosted", value: "50,000+", icon: Target },
  { label: "Happy Attendees", value: "200,000+", icon: Users },
  { label: "Event Organizers", value: "1,000+", icon: Award },
  { label: "Years of Experience", value: "8+", icon: Zap },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=400&h=400&fit=crop&crop=face",
    bio: "Former event manager with 15+ years of experience in organizing large-scale conferences."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Tech entrepreneur passionate about building scalable platforms for event management."
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Operations expert who ensures every event runs smoothly from registration to completion."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About EventHub
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're on a mission to revolutionize event management and make professional networking 
              accessible to everyone. Since 2016, we've been connecting people through meaningful events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/events">
                  Browse Events
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-br from-accent to-muted/50 py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-card bg-background">
                  <CardContent className="p-8">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We believe that great events have the power to transform careers, build communities, 
                and drive innovation. Our platform makes it easy for organizers to create memorable 
                experiences and for attendees to discover opportunities that matter.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Simplify event management</strong> - From registration to check-in, we handle the complexity
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Connect professionals</strong> - Building networks that drive career growth
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Enable learning</strong> - Facilitating knowledge sharing across industries
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-hero overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gradient-card py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We're a passionate team of event professionals, technologists, and community builders 
                dedicated to making events better for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-0 shadow-card bg-background">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at EventHub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We continuously improve our platform with cutting-edge features and user-friendly design.",
                icon: "🚀"
              },
              {
                title: "Community",
                description: "We believe in the power of bringing people together and fostering meaningful connections.",
                icon: "🤝"
              },
              {
                title: "Excellence",
                description: "We strive for the highest quality in everything we do, from our platform to our customer service.",
                icon: "⭐"
              },
              {
                title: "Accessibility",
                description: "Everyone should have access to great events and networking opportunities, regardless of background.",
                icon: "🌍"
              },
              {
                title: "Trust",
                description: "We build secure, reliable tools that event organizers and attendees can depend on.",
                icon: "🔒"
              },
              {
                title: "Growth",
                description: "We're committed to helping our users grow personally and professionally through events.",
                icon: "📈"
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-hero text-white py-16 mx-4 md:mx-8 rounded-3xl shadow-elegant">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of event organizers and attendees who trust EventHub for their professional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/register">Create Account</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/events">Browse Events</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}