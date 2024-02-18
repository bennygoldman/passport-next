import { Badge } from '@/components/ui/badge';

interface VisitBadgeProps {
  className?: string;
  visitCount: number;
}

const NoVisitBadge = () => (
  <Badge variant='outline' className='font-semibold text-sm'>
    {' '}
    ✖️ No visits
  </Badge>
);

const OneVisitBadge = () => (
  <Badge className='w-max bg-primary/35 text-secondary-foreground pointer-events-none text-sm'>
    ✅ Visited
  </Badge>
);

const ManyVisitBadge = ({ visitCount }: VisitBadgeProps) => (
  <Badge className='w-max bg-primary/80 pointer-events-none text-sm'>
    🌟 {visitCount} visits 🌟
  </Badge>
);

export default function VisitBadge({ className, visitCount }: VisitBadgeProps) {
  return (
    <div className={className}>
      {!visitCount && <NoVisitBadge />}
      {visitCount === 1 && <OneVisitBadge />}
      {visitCount > 1 && <ManyVisitBadge visitCount={visitCount} />}
    </div>
  );
}
