import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { CategoryBadge } from './CategoryBadge';
import type { Opportunity } from '@/data/opportunities';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleApply = () => {
    window.open(opportunity.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group h-full flex flex-col bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CategoryBadge type={opportunity.type} size="sm" />
          {opportunity.amount && (
            <span className="text-sm font-semibold text-primary">
              {opportunity.amount}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground mt-3 line-clamp-2 group-hover:text-primary transition-colors">
          {opportunity.title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium">
          {opportunity.organization}
        </p>
      </CardHeader>

      <CardContent className="flex-1 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {opportunity.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {opportunity.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>Deadline: {formatDate(opportunity.deadline)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{opportunity.location}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button
          onClick={handleApply}
          className="w-full gap-2 font-semibold"
        >
          Apply Now
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
