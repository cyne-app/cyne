import { cn } from "@/lib/utils";

interface RoadmapItemProps {
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export function RoadmapItem({ date, title, description, status }: RoadmapItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[11px] top-1 bottom-0 w-[1px] bg-zinc-800" />
      
      {/* Status dot */}
      <div className={cn(
        "absolute left-0 top-1 h-[22px] w-[22px] rounded-full border-4 border-[#0B0F17]",
        status === 'completed' && "bg-[#FF4D4D]",
        status === 'in-progress' && "bg-zinc-400",
        status === 'planned' && "bg-zinc-800"
      )} />
      
      {/* Content */}
      <div className="space-y-2">
        <span className="text-sm text-zinc-500">{date}</span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
} 