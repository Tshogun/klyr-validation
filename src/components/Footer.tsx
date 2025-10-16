export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Klyr | Built to help professionals reclaim their time
          </p>
          <div className="flex gap-6 text-sm">
            <a 
              href="mailto:hello@klyr.app" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
