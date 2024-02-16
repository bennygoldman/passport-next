import SkeletonCard from '@/components/SkeletonCard';

export default function loading() {
  return (
    <main>
      <div className='grid grid-cols-3 gap-8'>
        {'123456789'.split('').map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}
