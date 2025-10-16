"use client";

import { useState } from "react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { createClient } from "@supabase/supabase-js";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Zod schema for validation
const formSchema = z.object({
  email: z.string().email(),
  role: z.string().optional(),
  meetings: z.string().optional(),
  suggestions: z.string().optional(),
  source: z.string().optional(),
});

interface EmailCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

export const EmailCaptureModal = ({
  open,
  onOpenChange,
  source = "general",
}: EmailCaptureModalProps) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [meetings, setMeetings] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = formSchema.safeParse({
      email,
      role,
      meetings,
      suggestions,
      source,
    });

    if (!result.success) {
      toast({
        title: "Invalid input",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const { error } = await supabase.from("waitlist_submissions").insert([
      {
        email,
        role,
        meetings,
        suggestions,
        source,
      },
    ]);

    setIsLoading(false);

    if (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "You're on the list! 🎉",
      description: "We'll update you when we launch.",
    });
  };

  const handleClose = () => {
    onOpenChange(false);
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
                Klyr is currently in development. We're targeting a Q1 2026 launch. Join the
                waitlist to:
              </DialogDescription>
            </DialogHeader>

            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent mt-1" />
                <span className="text-sm">Get 50% off for 3 months</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent mt-1" />
                <span className="text-sm">Be first to access beta</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent mt-1" />
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
                    <SelectItem value="5-10">5–10 meetings</SelectItem>
                    <SelectItem value="11-20">11–20 meetings</SelectItem>
                    <SelectItem value="21+">21+ meetings</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="suggestions">What features would you like to see? (Optional)</Label>
                <Textarea
                  id="suggestions"
                  placeholder="e.g., Slack integration, analytics, calendar rules..."
                  value={suggestions}
                  onChange={(e) => setSuggestions(e.target.value)}
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
