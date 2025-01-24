import { TopBar } from '@/components/layout/top-bar';
import { RoadmapItem } from '@/components/roadmap/roadmap-item';

const roadmapItems = [
  {
    date: 'Q1 2025',
    title: 'Zen Framework',
    description: 'Initial release of the Zen Framework.',
    status: 'planned' as const,
  },
  {
    date: 'Q1 2025',
    title: 'Toolkit',
    description: 'Release of the Toolkit framework.',
    status: 'planned' as const,
  },
  {
    date: 'Q1 2025',
    title: 'Solana Toolkit Release',
    description: 'Full release of Solana-specific AI tools and integrations.',
    status: 'planned' as const,
  },
  {
    date: 'Q1 2025',
    title: 'Hana Launch',
    description: 'Launch of Hana, our AI Twitter agent powered by Zen and Toolkit.',
    status: 'planned' as const,
  },
  {
    date: 'Q2 2025',
    title: 'Consumer Product Release',
    description: 'Consumer facing product release; product will be voted on by the community.',
    status: 'planned' as const,
  },
];

export default function RoadmapPage() {
  return (
    <>
      <TopBar />
      <div className="min-h-screen bg-[#0B0F17] pt-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative">
          {/* Header */}
          <div className="border-b border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-6 py-20">
              <h1 className="text-4xl font-bold text-white mb-4">Roadmap</h1>
              <p className="text-lg text-zinc-400 max-w-2xl">
                This roadmap shows our current plans, but we're just getting started. All completed features are actively maintained and updated.
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF4D4D]" />
                <span className="text-sm text-zinc-400">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-zinc-400" />
                <span className="text-sm text-zinc-400">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-zinc-800" />
                <span className="text-sm text-zinc-400">Planned</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto px-6 py-12">
            {roadmapItems.map((item, index) => (
              <RoadmapItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                status={item.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 