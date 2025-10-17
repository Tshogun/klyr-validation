import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";
import { SignupCounter } from "@/components/SignUpCounter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarX, Clock, DollarSign, Briefcase, Code, Users2, Zap, TrendingDown, TrendingUp, Shield, Sparkles, Target, BarChart3 } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import dev1 from "@/assets/dev-1.jpg";
import dev2 from "@/assets/dev-2.jpg";

const Index = () => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("general");
  const [wastedHours, setWastedHours] = useState(0);
  const [reclaimedHours, setReclaimedHours] = useState(0);

  useEffect(() => {
    // Animate wasted hours counter
    const wastedInterval = setInterval(() => {
      setWastedHours(prev => (prev < 31 ? prev + 1 : 31));
    }, 50);

    // Animate reclaimed hours counter
    const reclaimedInterval = setInterval(() => {
      setReclaimedHours(prev => (prev < 12 ? prev + 0.5 : 12));
    }, 80);

    return () => {
      clearInterval(wastedInterval);
      clearInterval(reclaimedInterval);
    };
  }, []);

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
      icon: "🔗"
    },
    {
      number: "2",
      title: "ANALYZE",
      description: "Our AI examines meeting patterns, attendee overlap, recurring events, and historical productivity metrics.",
      icon: "🧠"
    },
    {
      number: "3",
      title: "ALERT",
      description: "Receive smart notifications 24 hours before low-value meetings with data-backed reasons and suggested alternatives.",
      icon: "🔔"
    },
    {
      number: "4",
      title: "DECLINE",
      description: "Use one-click professional templates to gracefully decline, reschedule, or propose async alternatives.",
      icon: "✉️"
    },
    {
      number: "5",
      title: "OPTIMIZE",
      description: "Track your meeting health score weekly and see exactly how many hours you've reclaimed for focused work.",
      icon: "📊"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenEmailModal={() => openEmailModal("header")} />

      <main className="flex-1 pt-16">
        {/* Hero Section - Enhanced */}
        <section className="gradient-hero py-20 sm:py-32 overflow-hidden relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                Stop Wasting <span className="relative inline-block">
                  <span className="relative z-10 text-primary font-bold">{wastedHours} Hours Every Month</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -rotate-1"></span>
                </span> in Pointless Meetings
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
                Klyr is your AI meeting gatekeeper — helping you skip pointless meetings and protect your focus time.
                Join early and help shape how professionals reclaim their days 🧠.
              </p>


              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 animate-slide-up">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => openEmailModal("hero-primary")}
                  className="text-lg px-8 py-6 h-auto font-semibold transform hover:scale-105 transition-all duration-200"
                >
                  🚀 Join the Early Access Crew
                </Button>

              </div>

              <div className="animate-fade-in">
                <SignupCounter />
              </div>

              {/* Hero Image */}
              <div className="mt-16 animate-scale-in">
                <div className="relative max-w-5xl mx-auto">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <img
                    src={heroDashboard}
                    alt="Klyr Dashboard showing Meeting Health Score and analytics"
                    className="relative rounded-2xl shadow-2xl border border-border/50 w-full"
                  />
                </div>
              </div>

              {/* Visual Comparison - NEW */}
              <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="border-2 border-red-200 bg-red-50/50">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <TrendingDown className="w-8 h-8 text-red-600" />
                      <h3 className="text-2xl font-bold text-red-900">Without Klyr</h3>
                    </div>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-lg">✗</span>
                        <p className="text-foreground">31+ hours wasted in meetings monthly</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-lg">✗</span>
                        <p className="text-foreground">Constant context switching kills deep work</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-lg">✗</span>
                        <p className="text-foreground">Awkward "no" or silent acceptance</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-lg">✗</span>
                        <p className="text-foreground">No visibility into meeting ROI</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200 bg-green-50/50 shadow-lg">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                      <h3 className="text-2xl font-bold text-green-900">With Klyr</h3>
                    </div>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold text-lg">✓</span>
                        <p className="text-foreground">Reclaim <strong>{reclaimedHours.toFixed(1)}+ hours</strong> in month one</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold text-lg">✓</span>
                        <p className="text-foreground">Protected 4+ hour focus blocks daily</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold text-lg">✓</span>
                        <p className="text-foreground">Professional AI-crafted decline templates</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold text-lg">✓</span>
                        <p className="text-foreground">Data-driven meeting health scores</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Built For Section */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Built For Busy Professionals
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Whether you're leading teams or shipping code, Klyr helps you reclaim time for what matters most.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Code className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Engineers</h3>
                  <p className="text-sm text-muted-foreground">
                    Protect deep work time and minimize context switching
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Product Managers</h3>
                  <p className="text-sm text-muted-foreground">
                    Balance stakeholder meetings with execution time
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Users2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Team Leads</h3>
                  <p className="text-sm text-muted-foreground">
                    Make time for strategy while supporting your team
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Founders</h3>
                  <p className="text-sm text-muted-foreground">
                    Focus on building without drowning in meetings
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Problem Section - Enhanced with Stats */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
              The Meeting Crisis Is Real
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
              And it's costing you more than you think
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => (
                <Card
                  key={index}
                  className="text-center border-border hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up"
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

            {/* Story Element - NEW */}
            <div className="mt-16 max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-10 pb-10 px-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-2xl">
                      💭
                    </div>
                    <div>
                      <p className="text-lg text-foreground leading-relaxed mb-4 italic">
                        "I joined a meeting because I didn't want to seem difficult. Thirty minutes later, I realized I contributed nothing—and neither did half the room. That's when I knew something had to change."
                      </p>
                      <p className="text-muted-foreground font-semibold">— Every professional ever</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works - Enhanced with Icons */}
        <section className="py-20 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
              How It Works
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
              From overwhelmed to in control in 5 simple steps
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Mid-page CTA */}
            <div className="mt-16 max-w-3xl mx-auto text-center">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-purple-500/10">
                <CardContent className="pt-10 pb-10 px-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ready to Reclaim Your Time?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Join the early community of curious professionals taking control of their calendars 🗓️
                  </p>

                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => openEmailModal("how-it-works-cta")}
                    className="text-lg px-8 py-6 h-auto font-semibold transform hover:scale-105 transition-all duration-200"
                  >
                    🚀 Get Early Access & Shape Klyr
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    ⚡ 60-second setup • 🌱 Built by founders, for builders • 🔒 Privacy-first
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why We Built This - Founder Story */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Why We Built Klyr
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Our journey from meeting fatigue to building a solution
            </p>

            <div className="max-w-4xl mx-auto mb-16">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5">
                <CardContent className="pt-10 pb-10 px-8 md:px-12">
                  <div className="space-y-6 text-lg text-foreground leading-relaxed">
                    <p>
                      <strong>It started with a simple realization:</strong> We were spending more time talking about work than actually doing it.
                    </p>
                    <p>
                      As college students juggling classes, projects, and internships, we found ourselves trapped in back-to-back video calls. Sprint planning. Status updates. Quick syncs. Follow-ups to follow-ups.
                    </p>
                    <p>
                      <strong>The breaking point?</strong> Missing a project deadline because we spent the entire week in meetings <em>about</em> the project instead of building it.
                    </p>
                    <p>
                      We realized the solution wasn't better meeting tools—it was fewer meetings. So we built Klyr: an AI that helps you decline gracefully, protect your focus time, and say "no" without the guilt.
                    </p>
                    <p className="text-primary font-semibold text-xl">
                      Because your time is too valuable to waste in meetings that don't matter.
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-border/50 text-center">
                    <Button
                      variant="default"
                      size="lg"
                      onClick={() => openEmailModal("founder-story")}
                      className="text-base px-8 py-5 h-auto font-semibold"
                    >
                      Join Our Mission → Get Early Access
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
              <Card className="border-border hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">📊 Data-Driven Insights</h3>
                  <p className="text-muted-foreground">Get objective meeting scores based on attendance patterns, duration, and productivity metrics—not gut feelings.</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">⚡ Proactive Prevention</h3>
                  <p className="text-muted-foreground">Stop meetings before they happen. Get 24-hour advance warnings about low-value meetings with suggested alternatives.</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">🎯 Focus Time Protection</h3>
                  <p className="text-muted-foreground">Reclaim deep work blocks. Klyr helps you maintain 4+ hour uninterrupted windows for actual productivity.</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">🤝 Professional Templates</h3>
                  <p className="text-muted-foreground">Decline gracefully with AI-crafted responses that maintain relationships while protecting your time.</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">📈 Weekly Analytics</h3>
                  <p className="text-muted-foreground">Track your meeting health score over time and see exactly how many hours you've reclaimed.</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-bold mb-4">🔒 Privacy First</h3>
                  <p className="text-muted-foreground">We only analyze calendar metadata. No meeting content, no recordings, no privacy compromises.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Devs - Original Section 
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Meet the Team
            </h2>

            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
              We're just two <strong>college students</strong> who got tired of spending more time in meetings than actually building things.
              <br /><br />
              <strong>Klyr</strong> started as a side project after a few too many back-to-back Zoom calls left us drained and unproductive. We're building it for ourselves — and for anyone who's ever sat through yet another <em>"this could've been an email"</em> meeting.
              <br /><br />
              We don't have fancy titles or VC funding — just a simple goal: <strong>help people protect their focus time</strong> and get back to doing deep, meaningful work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Nakul *
              <div className="text-center animate-slide-up">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <img
                    src={dev1}
                    alt="Nakul Badwaik - Co-Founder & Lead Developer"
                    className="relative rounded-full w-full h-full object-cover border-4 border-border shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Nakul Badwaik</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder & Lead Developer</p>
                <p className="text-muted-foreground leading-relaxed">
                  Nakul is building Klyr's AI engine to help teams spot and skip low-value meetings — before they ever hit the calendar. Less time wasted, more time to actually build.
                </p>
              </div>

              {/* Labdhi 
              <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <img
                    src={dev2}
                    alt="Labdhi Soni - Co-Founder & Product Lead"
                    className="relative rounded-full w-full h-full object-cover border-4 border-border shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Labdhi Soni</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder & Product Lead</p>
                <p className="text-muted-foreground leading-relaxed">
                  Labdhi is focused on designing a calm, helpful experience — one that protects your deep work without burning bridges or making you the bad guy.
                </p>
              </div>
            </div>
          </div>
        </section>
        */}
        {/* Final CTA - Enhanced */}
        <section className="py-20 sm:py-32 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Take Back Your Calendar?
            </h2>
            <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              🚀 Join 2,500+ early professionals already taking back control of their time.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              💡 No discounts, no gimmicks — just early access, real feedback, and a front-row seat to the future of focus work.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => openEmailModal("final-cta")}
                  className="text-lg px-8 py-6 h-auto font-semibold flex-1 transform hover:scale-105 transition-all duration-200"
                >
                  🌟 Join Early Access
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No spam. Just one email when we launch — from the founders 💌
              </p>
              <p className="text-sm font-medium mt-4">
                🚀 Launching Q1 2026 | Built with ❤️ by two tired college founders
              </p>

              {/* Trust Badges - NEW */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Privacy First</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>60-Second Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Data-Driven</span>
                </div>
              </div>
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