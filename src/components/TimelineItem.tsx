interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  location?: string;
}

export const TimelineItem = ({
  title,
  organization,
  period,
  description,
  location,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0">
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
      <div className="space-y-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <span className="text-sm text-muted-foreground font-medium">{period}</span>
        </div>
        <div className="flex items-center gap-2 text-primary font-medium">
          <span>{organization}</span>
          {location && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{location}</span>
            </>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
