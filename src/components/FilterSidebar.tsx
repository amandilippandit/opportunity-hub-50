import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { OpportunityType } from '@/data/opportunities';
import { locations, deadlineFilters } from '@/data/opportunities';

interface FilterSidebarProps {
  selectedTypes: OpportunityType[];
  onTypeChange: (types: OpportunityType[]) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  selectedDeadline: string;
  onDeadlineChange: (deadline: string) => void;
}

const opportunityTypes: { value: OpportunityType; label: string; color: string }[] = [
  { value: 'scholarship', label: 'Scholarships', color: 'bg-scholarship' },
  { value: 'internship', label: 'Internships', color: 'bg-internship' },
  { value: 'summit', label: 'Summits', color: 'bg-summit' },
  { value: 'competition', label: 'Competitions', color: 'bg-competition' },
];

export function FilterSidebar({
  selectedTypes,
  onTypeChange,
  selectedLocation,
  onLocationChange,
  selectedDeadline,
  onDeadlineChange,
}: FilterSidebarProps) {
  const toggleType = (type: OpportunityType) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  const clearFilters = () => {
    onTypeChange([]);
    onLocationChange('All Locations');
    onDeadlineChange('all');
  };

  const hasActiveFilters =
    selectedTypes.length > 0 ||
    selectedLocation !== 'All Locations' ||
    selectedDeadline !== 'all';

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="bg-card rounded-xl border border-border/50 shadow-card p-5 sticky top-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Filters</h2>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          )}
        </div>

        <div className="space-y-5">
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Category</h3>
            <div className="space-y-2">
              {opportunityTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => toggleType(type.value)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    selectedTypes.includes(type.value)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  )}
                >
                  <span className={cn('w-3 h-3 rounded-full shrink-0', type.color)} />
                  <span className="flex-1 text-left">{type.label}</span>
                  {selectedTypes.includes(type.value) && (
                    <Check className="h-4 w-4 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Location Filter */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Location</h3>
            <div className="space-y-1">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => onLocationChange(location)}
                  className={cn(
                    'w-full px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors',
                    selectedLocation === location
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  )}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Deadline Filter */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Deadline</h3>
            <div className="space-y-1">
              {deadlineFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => onDeadlineChange(filter.value)}
                  className={cn(
                    'w-full px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors',
                    selectedDeadline === filter.value
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
