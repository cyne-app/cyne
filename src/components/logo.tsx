import Link from 'next/link';

import { cn } from '@/lib/utils';
import { DynamicImage } from './dynamic-image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 100, height = width, className }: LogoProps) {
  return (
    <DynamicImage
      lightSrc="/elyx.svg"
      darkSrc="/elyx_w.svg"
      alt="ELYX"
      width={width}
      height={height}
      className={cn('select-none', className)}
    />
  );
}

interface BrandProps {
  className?: string;
}

export function Brand({ className }: BrandProps) {
  return (
    <Link href="/" className={className}>
      <div className="flex items-center gap-2">
        <Logo width={32} />
      </div>
    </Link>
  );
}
