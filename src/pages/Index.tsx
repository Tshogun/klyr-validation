import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarX, Clock, DollarSign, Play } from "lucide-react";
import heroDashboard from "../assets/hero-dashboard.png";

const Index = () => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("general");

  const openEmailModal = (source: string) => {
    setModalSource(source);
    setEmailModalOpen(true);
  };

  const problems = [
    {
      icon: CalendarX,
      stat: "71% of meetings are unproductive",
      description: "You're drowning in back-to-back meetings with no time for actual work",
    },
    {
      icon: Clock,
      stat: "31 hours wasted per month",
      description: "That's nearly a full work week spent in meetings that could be emails",
    },
    {
      icon: DollarSign,
      stat: "$450B lost annually",
      description: "Meeting overload costs the US economy billions in lost productivity",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "CONNECT",
      description: "Seamlessly integrate with Google Calendar and Microsoft Outlook. Setup takes less than 60 seconds.",
    },
    {
      number: "2",
      title: "ANALYZE",
      description: "Our AI examines meeting patterns, attendee overlap, recurring events, and historical productivity metrics.",
    },
    {
      number: "3",
      title: "ALERT",
      description: "Receive smart notifications 24 hours before low-value meetings with data-backed reasons and suggested alternatives.",
    },
    {
      number: "4",
      title: "DECLINE",
      description: "Use one-click professional templates to gracefully decline, reschedule, or propose async alternatives.",
    },
    {
      number: "5",
      title: "OPTIMIZE",
      description: "Track your meeting health score weekly and see exactly how many hours you've reclaimed for focused work.",
    },
  ];

  const testimonials = [
    {
      quote: "I used to spend 15+ hours a week in meetings. Klyr helped me reclaim 40% of that time in the first month.",
      author: "Sarah Chen",
      role: "Product Manager",
    },
    {
      quote: "Finally, a tool that prevents meetings instead of just optimizing them.",
      author: "Marcus Johnson",
      role: "Engineering Lead",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenEmailModal={() => openEmailModal("header")} />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="gradient-hero py-20 sm:py-32 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                Stop Wasting <span className="text-primary font-bold">31 Hours Every Month</span> in Pointless Meetings
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
                Klyr is your AI meeting gatekeeper. We analyze your calendar and prevent unnecessary meetings before they steal your focus time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 animate-slide-up">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => openEmailModal("hero-primary")}
                  className="text-lg px-8 py-6 h-auto font-semibold"
                >
                  Get Early Access
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground animate-fade-in">
                Join 50+ professionals reclaiming their time
              </p>

              {/* Hero Image */}
              <div className="mt-16 animate-scale-in">
                <div className="relative max-w-5xl mx-auto">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <img
                    src={heroDashboard}
                    alt="Klyr Dashboard showing Meeting Health Score"
                    className="relative rounded-2xl shadow-2xl border border-border/50 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => (
                <Card 
                  key={index} 
                  className="text-center border-border hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <problem.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{problem.stat}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="border-border animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Why Klyr Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-border">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">📊 Data-Driven Insights</h3>
                  <p className="text-muted-foreground">Get objective meeting scores based on attendance patterns, duration, and productivity metrics—not gut feelings.</p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">⚡ Proactive Prevention</h3>
                  <p className="text-muted-foreground">Stop meetings before they happen. Get 24-hour advance warnings about low-value meetings with suggested alternatives.</p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">🎯 Focus Time Protection</h3>
                  <p className="text-muted-foreground">Reclaim deep work blocks. Klyr helps you maintain 4+ hour uninterrupted windows for actual productivity.</p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">🤝 Professional Templates</h3>
                  <p className="text-muted-foreground">Decline gracefully with AI-crafted responses that maintain relationships while protecting your time.</p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">📈 Weekly Analytics</h3>
                  <p className="text-muted-foreground">Track your meeting health score over time and see exactly how many hours you've reclaimed.</p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">🔒 Privacy First</h3>
                  <p className="text-muted-foreground">We only analyze calendar metadata. No meeting content, no recordings, no privacy compromises.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-32 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Take Back Your Calendar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the waitlist and get 50% off when we launch
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => openEmailModal("final-cta")}
                  className="text-lg px-8 py-6 h-auto font-semibold flex-1"
                >
                  Get Early Access
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                No spam. Unsubscribe anytime. We'll email you when Klyr launches.
              </p>
              
              <p className="text-sm font-medium mt-4">
                Launching Q1 2026 | Built for overwhelmed professionals
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EmailCaptureModal 
        open={emailModalOpen} 
        onOpenChange={setEmailModalOpen}
        source={modalSource}
      />
    </div>
  );
};

export default Index;
