import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";

const Pricing = () => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("general");

  const openEmailModal = (source: string) => {
    setModalSource(source);
    setEmailModalOpen(true);
  };

  const pricingTiers = [
    {
      name: "🌱 Starter (Explore Mode)",
      price: "$0",
      period: "/month",
      description: "Dip your toes in Klyr’s time-saving magic 🪄",
      features: [
        "20 meeting analyses per month",
        "Basic meeting health score 🧮",
        "Monthly digest email 🗞️",
        "3 decline templates 💬",
      ],
    },
    {
      name: "⚡ Pro (Time Master)",
      price: "$15",
      period: "/month",
      description: "For professionals reclaiming hours every week ⏳",
      features: [
        "Everything in Starter",
        "Unlimited meeting analyses ♾️",
        "AI-powered recommendations 🤖",
        "Pre-meeting notifications (24hr) ⏰",
        "Custom decline templates ✍️",
        "Priority support 💬",
      ],
    },
    {
      name: "🧑‍🤝‍🧑 Team (Flow Together)",
      price: "$25",
      period: "/user/month",
      description: "For teams optimizing their calendars together 💡",
      features: [
        "Everything in Pro",
        "Team meeting dashboard 📊",
        "Shared meeting policies 🗂️",
        "Admin controls 🔑",
        "Slack integration 💬",
        "Dedicated success manager 👩‍💼",
      ],
    },
  ];

  const faqs = [
    {
      question: "💰 Are these the final prices?",
      answer:
        "Not yet — these are our **planned launch prices**! We’re collecting feedback 🧠 to make sure Klyr fits every user perfectly. Prices may evolve as we refine our product-market fit before the 2026 launch.",
    },
    {
      question: "🚀 When will Klyr launch?",
      answer:
        "We're targeting **Q1 2026**. Waitlist members 🎟️ will get early beta access starting in **late 2025**.",
    },
    {
      question: "🔒 How does Klyr protect my privacy?",
      answer:
        "We only read **calendar metadata** (title, time, attendees). We never store event descriptions or meeting content. 🔐 All data is encrypted, and we're **SOC 2 Type II** compliant.",
    },
    {
      question: "📅 Can I use Klyr with Google Calendar and Outlook?",
      answer:
        "Yes! Klyr connects to both **Google Calendar** and **Microsoft Outlook** — we support both personal and work accounts 🗓️.",
    },
    {
      question: "🤔 What makes Klyr different from Calendly or Reclaim.ai?",
      answer:
        "Those tools help you schedule meetings 📆 — Klyr helps you **avoid unnecessary ones** ✂️ using smart AI insights and behavioral analysis.",
    },
    {
      question: "🧠 How does Klyr decide which meetings to flag?",
      answer:
        "Klyr uses AI to analyze meeting patterns: frequency, attendee overlap, past outcomes, and duration vs. results. You always have the **final say** 👍.",
    },
    {
      question: "⚙️ Can I customize which meetings get flagged?",
      answer:
        "Absolutely! 🎛️ You can set custom rules, whitelist people or topics, and adjust sensitivity levels. Klyr learns from your preferences over time 🤖.",
    },
    {
      question: "❗ What if I accidentally decline an important meeting?",
      answer:
        "Don’t worry — Klyr never auto-declines. You review and approve all suggestions ✅. Plus, you can defer or propose alternatives instead of declining outright.",
    },
    {
      question: "💻 Does Klyr work with Zoom, Meet, or Teams?",
      answer:
        "Yes! We integrate with events that include **Zoom**, **Google Meet**, **Microsoft Teams**, and more 🔗.",
    },
    {
      question: "🎁 Is there a free trial?",
      answer:
        "Yes! Our Free plan gives you **20 analyses per month** forever. Paid plans will include a **14-day free trial** at launch 🎉.",
    },
    {
      question: "❌ Can I cancel anytime?",
      answer:
        "Of course! No penalties 🚫 — just cancel anytime and your access continues until the end of your billing cycle.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenEmailModal={() => openEmailModal("header")} />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="gradient-hero py-20 sm:py-24 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Simple, Transparent, and Fair Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              These are our <strong>planned launch prices</strong> —{" "}
              <span className="font-medium text-foreground">
                we’d love your feedback
              </span>{" "}
              to make Klyr the perfect fit for your workflow 💼.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section
          id="plans"
          className="py-20 sm:py-24"
          aria-labelledby="pricing-plans-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="pricing-plans-heading"
              className="text-3xl font-bold text-center mb-12"
            >
              🪄 Choose the plan that fits your vibe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={tier.name}
                  className={`relative flex flex-col border-border animate-slide-up hover:scale-[1.02] transition-transform`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground">
                        {tier.period}
                      </span>
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
                </Card>
              ))}
            </div>

            {/* Unified CTA */}
            <div className="mt-20 text-center max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                💡 Join our early community and help shape Klyr’s future!  
                Be part of our <span className="font-semibold text-foreground">founding users circle</span> —  
                the ones who get to say, “I used Klyr before it was cool.” 😎
              </p>
              <div className="flex justify-center flex-col sm:flex-row gap-4">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => openEmailModal("pricing-banner")}
                  className="text-lg px-8 py-6 h-auto"
                >
                  🚀 Join Early & Shape Klyr
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    (window.location.href =
                      "mailto:nakulbadwaik@gmail.com?subject=Contact Founders - Klyr Pricing")
                  }
                  className="text-lg px-8 py-6 h-auto"
                >
                  💌 Contact Founders
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-20 sm:py-24 bg-muted/30"
          aria-labelledby="faq-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-center mb-12"
            >
              ❓ Frequently Asked Questions
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
