import { Badge } from "@/components/ui/badge";
import type { PropertyBadgeTone } from "@/lib/data/properties";
import { cn } from "@/lib/utils";

type PropertyBadgeProps = {
  label: string;
  tone: PropertyBadgeTone;
  className?: string;
};

const badgeToneClassMap: Record<PropertyBadgeTone, string> = {
  new: "bg-emerald-100 text-emerald-900 hover:bg-emerald-100",
  featured: "bg-sky-100 text-sky-900 hover:bg-sky-100",
  "open-house": "bg-amber-100 text-amber-900 hover:bg-amber-100",
  exclusive: "bg-violet-100 text-violet-900 hover:bg-violet-100",
};

export function PropertyBadge({ label, tone, className }: PropertyBadgeProps) {
  return (
    <Badge className={cn("border-transparent", badgeToneClassMap[tone], className)}>
      {label}
    </Badge>
  );
}
