import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";

const Pricing = () => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("general");

  const openEmailModal = (source: string) => {
    setModalSource(source);
    setEmailModalOpen(true);
  };

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out Klyr",
      features: [
        "20 meeting analyses per month",
        "Basic meeting health score",
        "Monthly digest email",
        "3 decline templates",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Individual",
      price: "$15",
      period: "/month",
      description: "For professionals who want to reclaim their time",
      features: [
        "Everything in Free",
        "Unlimited meeting analyses",
        "AI-powered recommendations",
        "Pre-meeting notifications (24hr)",
        "Custom decline templates",
        "Priority support",
      ],
      cta: "Join Waitlist",
      popular: true,
    },
    {
      name: "Team",
      price: "$25",
      period: "/user/month",
      description: "For teams that want to optimize together",
      features: [
        "Everything in Individual",
        "Team meeting dashboard",
        "Shared meeting policies",
        "Admin controls",
        "Slack integration",
        "Dedicated success manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "When will Klyr launch?",
      answer: "We're targeting Q1 2026. Waitlist members will get early beta access starting in late 2025.",
    },
    {
      question: "How does Klyr protect my privacy?",
      answer: "We only read calendar metadata (title, time, attendees). We never store your event descriptions or meeting content. All data is encrypted and we're SOC 2 Type II compliant.",
    },
    {
      question: "Can I use Klyr with Google Calendar and Outlook?",
      answer: "Yes! Klyr connects to both Google Calendar and Microsoft Outlook. We support both personal and work accounts.",
    },
    {
      question: "What makes Klyr different from Calendly or Reclaim.ai?",
      answer: "Those tools help you schedule meetings. Klyr helps you avoid unnecessary meetings entirely by analyzing patterns and giving you data-driven reasons to decline.",
    },
    {
      question: "How does Klyr determine if a meeting is unnecessary?",
      answer: "Klyr uses AI to analyze multiple factors: meeting frequency, attendee overlap, historical outcomes, meeting duration vs. content, and whether the meeting could be replaced by async communication. You always have final say on whether to attend.",
    },
    {
      question: "Can I customize which meetings get flagged?",
      answer: "Absolutely. You can set custom rules, whitelist certain people or meeting types, and adjust sensitivity levels. Klyr learns from your preferences over time.",
    },
    {
      question: "What if I accidentally decline an important meeting?",
      answer: "Klyr never auto-declines. You always review and approve before declining. Plus, our templates include options to defer or propose alternatives, not just decline outright.",
    },
    {
      question: "Does Klyr work with virtual meeting tools like Zoom or Teams?",
      answer: "Yes! Klyr integrates with calendar events that include Zoom, Google Meet, Microsoft Teams, and other conferencing links.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, the Free plan gives you 20 meeting analyses per month forever. Paid plans will have a 14-day free trial when we launch.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no penalties. Your access continues until the end of your billing period.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenEmailModal={() => openEmailModal("header")} />
      
      <main className="flex-1 pt-16">
        {/* Pricing Hero */}
        <section className="gradient-hero py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Choose the plan that works for you. Cancel anytime.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <Card 
                  key={tier.name}
                  className={`relative flex flex-col ${
                    tier.popular ? "border-primary shadow-glow scale-105" : "border-border"
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button
                      variant={tier.popular ? "cta" : "default"}
                      size="lg"
                      className="w-full font-semibold"
                      onClick={() => {
                        if (tier.cta === "Contact Sales") {
                          window.location.href = "mailto:sales@klyr.app?subject=Team Plan Inquiry";
                        } else {
                          openEmailModal(`pricing-${tier.name.toLowerCase()}`);
                        }
                      }}
                    >
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                Want to see if Klyr is right for you? Join the waitlist and we'll give you{" "}
                <span className="font-semibold text-foreground">50% off any plan</span> for your first 3 months.
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={() => openEmailModal("pricing-banner")}
                className="text-lg px-8 py-6 h-auto"
              >
                Join Waitlist for 50% Off
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

export default Pricing;
