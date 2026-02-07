import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import ScrollIndicator from "@/components/ScrollIndicator";
import ChatButton from "@/components/ChatButton";
import heroBackground from "@/assets/background.png";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/25" />

      <Header />

      <main className="relative h-screen flex items-center">
        <HeroContent />
      </main>

      <ScrollIndicator />
      <ChatButton />
    </div>
  );
};

export default Index;
