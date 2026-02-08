import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center h-full max-w-xl px-6 md:px-16 lg:px-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
        Cybernetic Raptor
        <br />
        Precision Eye View
      </h1>

      <p className="text-foreground/85 text-base md:text-lg leading-relaxed max-w-md mb-10">
        Experience the pinnacle of tactical surveillance with a cybernetic falcon,
        featuring a high-tech retinal HUD designed for extreme precision, unmatched
        target locking, and hyper-accurate tracking in any environment
      </p>

      <div>
        <button className="inline-flex items-center gap-3 bg-foreground text-primary-foreground rounded-3xl px-7 py-3.5 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-foreground/20 transition-all duration-300">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
