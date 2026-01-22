import { Compass } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 items-center">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-lg bg-primary">
            <Compass className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
          </div>
          <span className="text-base md:text-xl font-bold text-foreground">OpportunityHub</span>
        </div>
      </div>
    </header>
  );
}
