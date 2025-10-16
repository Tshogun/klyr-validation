import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface EmailCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

export const EmailCaptureModal = ({ open, onOpenChange, source = "general" }: EmailCaptureModalProps) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [meetings, setMeetings] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Waitlist submission:", { email, role, meetings, suggestions, source });
    
    // TODO: Store in Supabase once Cloud is enabled
    
    setIsLoading(false);
    setIsSubmitted(true);

    toast({
      title: "Success! 🎉",
      description: "You're on the list! Check your email for confirmation.",
    });
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation completes
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setRole("");
      setMeetings("");
      setSuggestions("");
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Almost There!</DialogTitle>
              <DialogDescription className="text-base">
                Klyr is currently in development. We're targeting a Q1 2026 launch. Join the waitlist to:
              </DialogDescription>
            </DialogHeader>
            
            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Get 50% off for 3 months</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Be first to access beta</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Help shape the product</span>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">What's your role?</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product-manager">Product Manager</SelectItem>
                    <SelectItem value="engineer">Engineer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="consultant">Consultant</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meetings">How many meetings per week?</Label>
                <Select value={meetings} onValueChange={setMeetings}>
                  <SelectTrigger id="meetings">
                    <SelectValue placeholder="Select meeting frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5-10 meetings</SelectItem>
                    <SelectItem value="11-20">11-20 meetings</SelectItem>
                    <SelectItem value="21+">21+ meetings</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="suggestions">What features would you like to see? (Optional)</Label>
                <Textarea
                  id="suggestions"
                  placeholder="e.g., Slack integration, custom meeting rules, team analytics..."
                  value={suggestions}
                  onChange={(e) => setSuggestions(e.target.value)}
                  className="min-h-[80px] resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Reserving..." : "Reserve My Spot"}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-2">You're on the list! 🎉</h3>
            <p className="text-muted-foreground mb-6">
              Check your email for confirmation and next steps.
            </p>
            <Button onClick={handleClose} variant="default" size="lg">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
