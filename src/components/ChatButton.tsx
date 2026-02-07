import { MessageSquare } from "lucide-react";

const ChatButton = () => (
  <button
    className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-all duration-300"
    aria-label="Chat support"
  >
    <MessageSquare className="w-5 h-5" />
  </button>
);

export default ChatButton;
