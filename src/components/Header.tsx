import { useState, useEffect } from "react";

const navItems = ["About Us", "Our Service", "Member Support", "Our Plans", "Contact Us"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
        >
          <path
            d="M20 4C18 8 14 12 10 16C8 18 6 22 8 26C10 30 14 32 18 34C19 34.5 20 35 20 35C20 35 21 34.5 22 34C26 32 30 30 32 26C34 22 32 18 30 16C26 12 22 8 20 4Z"
            fill="currentColor"
          />
          <path
            d="M20 8C18.5 11 16 14 13 17C11.5 18.5 10 21 11.5 24C13 27 16 28.5 19 30C19.5 30.3 20 30.5 20 30.5C20 30.5 20.5 30.3 21 30C24 28.5 27 27 28.5 24C30 21 28.5 18.5 27 17C24 14 21.5 11 20 8Z"
            fill="hsl(var(--background))"
          />
          <path
            d="M20 14C19 16 17.5 18 15.5 20C14.5 21 14 23 15 25C16 27 18 28 19.5 28.5C20 28.7 20 28.7 20.5 28.5C22 28 24 27 25 25C26 23 25.5 21 24.5 20C22.5 18 21 16 20 14Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-foreground font-bold text-sm tracking-widest uppercase">
          AEROMARK
        </span>
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center rounded-full bg-secondary/60 px-2 py-1.5">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-foreground hover:bg-secondary/80 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Login CTA */}
      <button className="hidden md:block border border-foreground rounded-full px-6 py-2.5 text-sm font-medium text-foreground hover:bg-foreground/10 transition-all duration-300">
        Login As Member
      </button>

      {/* Mobile menu button */}
      <button className="md:hidden text-foreground">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
