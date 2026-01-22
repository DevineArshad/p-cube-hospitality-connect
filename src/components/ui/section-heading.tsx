import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ badge, title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4 mb-12", centered && "text-center", className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-teal-light text-primary text-sm font-medium rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
