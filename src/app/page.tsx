import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import BranchCard from '@/components/BranchCard';
import PassportCover from '@/components/PassportCover';

interface Branch {
  image: string;
  BranchCode: string;
  BranchName: string;
  visitCount: number;
  hasKidStuff: boolean;
  Address: string;
  PostalCode: string;
  NBHDName: string;
  NBHDNo: number;
  WardNo: number;
  WardName: string;
  id: string;
}

async function getBranches(): Promise<Branch[]> {
  const result = await fetch('http://localhost:4000/branches');

  // add delay to test skeleton
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return result.json();
}

export default async function Home() {
  const branches = await getBranches();

  return (
    <main>
      <div className='grid grid-cols-3 gap-8'>
        <PassportCover
          name='Christie Pits'
          homeBranch='Dovercourt'
          favoriteBook='The Paper Bag Princess'
          issuedDate='2024-02-15'
        />
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {branches.map((branch) => (
              <CarouselItem key={branch.id}>
                <BranchCard
                  image={branch.image}
                  Address={branch.Address}
                  hasKidStuff={branch.hasKidStuff}
                  visitCount={branch.visitCount}
                  BranchName={branch.BranchName}
                  BranchCode={branch.BranchCode}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <PassportCover />
      </div>
    </main>
  );
}
