import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmap | CYNE AI',
  description: 'Our journey and future plans for CYNE AI',
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 