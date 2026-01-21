import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FilterSidebar } from '@/components/FilterSidebar';
import { OpportunityCard } from '@/components/OpportunityCard';
import { opportunities, type OpportunityType } from '@/data/opportunities';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<OpportunityType[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedDeadline, setSelectedDeadline] = useState('all');

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === '' ||
        opp.title.toLowerCase().includes(searchLower) ||
        opp.organization.toLowerCase().includes(searchLower) ||
        opp.description.toLowerCase().includes(searchLower) ||
        opp.tags.some((tag) => tag.toLowerCase().includes(searchLower));

      // Type filter
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(opp.type);

      // Location filter
      const matchesLocation =
        selectedLocation === 'All Locations' ||
        opp.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
        (selectedLocation === 'International' && opp.location !== 'United States') ||
        (selectedLocation === 'Global' && opp.location === 'Global');

      // Deadline filter
      let matchesDeadline = true;
      if (selectedDeadline !== 'all') {
        const days = parseInt(selectedDeadline);
        const deadlineDate = new Date(opp.deadline);
        const today = new Date();
        const diffTime = deadlineDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        matchesDeadline = diffDays >= 0 && diffDays <= days;
      }

      return matchesSearch && matchesType && matchesLocation && matchesDeadline;
    });
  }, [searchQuery, selectedTypes, selectedLocation, selectedDeadline]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalOpportunities={opportunities.length}
      />

      <main className="container pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            selectedTypes={selectedTypes}
            onTypeChange={setSelectedTypes}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
            selectedDeadline={selectedDeadline}
            onDeadlineChange={setSelectedDeadline}
          />

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                {filteredOpportunities.length} {filteredOpportunities.length === 1 ? 'Result' : 'Results'}
              </h2>
            </div>

            {filteredOpportunities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredOpportunities.map((opportunity, index) => (
                  <div
                    key={opportunity.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <OpportunityCard opportunity={opportunity} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-2">No opportunities found</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
