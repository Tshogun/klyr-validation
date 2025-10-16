import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const SignupCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  // Fetch count from Supabase
  const fetchWaitlistCount = async () => {
    const { count, error } = await supabase
      .from("waitlist_submissions")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Error fetching count:", error.message);
    } else {
      setCount(count ?? 0);
    }
  };

  useEffect(() => {
    fetchWaitlistCount();

    // Optionally refetch every 60 seconds to show fresh count
    const interval = setInterval(fetchWaitlistCount, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
      <Users className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium">
        <span className="text-primary font-bold">
          {count !== null ? `${count}+` : "…"}
        </span>{" "}
        professionals joined
      </span>
    </div>
  );
};
