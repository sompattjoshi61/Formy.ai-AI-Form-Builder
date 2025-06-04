import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ChevronRight, ExternalLink, Video } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Blurry Violet Background */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300 opacity-70 blur-[120px] z-0" />

      {/* Main Content */}
      <div className="text-center flex flex-col items-center justify-center max-w-4xl px-4 z-10">
        <div className="rounded-full flex items-center bg-white border font-medium gap-1 text-sm h-auto p-2 bg-muted max-w-80 mb-4">
          <div className="p-2 h-5 shrink-0 flex items-center text-xs justify-center text-white bg-primary rounded-full">
            New
          </div>
          Get Started with AI
          <ChevronRight className="w-4 h-4" />
        </div>

        <h1 className="text-6xl font-black">
          <span className="bg-gradient-to-r from-primary via-purple-300 to-primary bg-clip-text text-transparent animate-sparkle">
            AI Powered
          </span>{" "}
          Formy Builder
        </h1>

        <p className="text-lg mt-4 max-w-2xl text-black/70 font-medium">
          Create beautiful forms and share them anywhere. It takes seconds, with our built-in powered AI
        </p>

        <div className="flex items-center gap-3 mt-6">
          <Button className="h-12 text-base font-medium min-w-32" asChild>
            <RegisterLink>
              Get Started
              <ExternalLink />
            </RegisterLink>
          </Button>

          <Button
            variant="outline"
            className="h-12 border-primary text-primary text-base font-medium min-w-32"
            asChild
          >
            <a
              href="https://www.youtube.com/watch?v=2-iGFSEip48"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Video size="17px" />
              Watch video
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
