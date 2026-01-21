import { SearchBar } from './SearchBar';
import { GraduationCap, Briefcase, Users, Trophy } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalOpportunities: number;
}

export function HeroSection({ searchQuery, onSearchChange, totalOpportunities }: HeroSectionProps) {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-scholarship/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-scholarship-light">
              <GraduationCap className="w-5 h-5 text-scholarship" />
            </span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-internship-light">
              <Briefcase className="w-5 h-5 text-internship" />
            </span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-summit-light">
              <Users className="w-5 h-5 text-summit" />
            </span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-competition-light">
              <Trophy className="w-5 h-5 text-competition" />
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            Find Your Next{' '}
            <span className="text-primary">Opportunity</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover scholarships, internships, summits, and competitions from top organizations worldwide. 
            Your path to success starts here.
          </p>

          <div className="flex justify-center mb-6">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{totalOpportunities}</span> opportunities available
          </p>
        </div>
      </div>
    </section>
  );
}
