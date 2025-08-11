import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <nav aria-label="Footer navigation" className="text-sm text-muted-foreground">
            <a href="#about" className="hover:underline">About</a>
            <span className="px-3">|</span>
            <a href="#contact" className="hover:underline">Contact</a>
            <span className="px-3">|</span>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">© 2025 Digital Intelligence Marketplace</p>
      </div>
    </footer>
  );
};

export default Footer;
