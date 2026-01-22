import { SearchBar } from './SearchBar';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
  return (
    <section className="relative py-8 md:py-16 lg:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-scholarship/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-2 md:mb-4 tracking-tight">
            Find Your Next{' '}
            <span className="text-primary">Opportunity</span>
          </h1>

          <p className="text-sm md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-2xl mx-auto px-4 md:px-0">
            Discover scholarships, internships, summits, and competitions from top organizations worldwide.
          </p>

          <div className="flex justify-center px-4 md:px-0">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </div>
        </div>
      </div>
    </section>
  );
}
