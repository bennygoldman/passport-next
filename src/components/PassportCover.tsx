import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface PassportCoverProps {
  name?: string;
  homeBranch?: string;
  favoriteBook?: string;
  issuedDate?: string;
}

export default function PassportCover({
  name,
  homeBranch,
  favoriteBook,
  issuedDate,
}: PassportCoverProps) {
  return (
    <Card className='flex flex-col justify-evenly items-center bg-secondary/85 text-lg leading-tight text-primary-foreground'>
      {!!name && (
        <CardHeader className=''>
          <CardTitle className='text-6xl text-yellow-300 font-bold font-serif'>
            PASSPORT
          </CardTitle>
          <CardDescription className='text-primary-foreground text-center text-xl font-semibold '>
            Toronto Public Library
          </CardDescription>
        </CardHeader>
      )}
      <CardContent className='flex flex-col gap-6'>
        {!!name && (
          <div className='text-center'>
            <p>This document belongs to:</p>
            <p className='text-2xl border-b-2 border-dashed border-primary-foreground font-semibold'>
              {name}
            </p>
          </div>
        )}

        {!!homeBranch && (
          <div className='text-center'>
            <p>
              Home branch:{' '}
              <span className='font-semibold border-b-2 border-dashed border-primary-foreground'>
                {homeBranch}
              </span>
            </p>
          </div>
        )}
        {!!favoriteBook && (
          <div className='text-center'>
            <p>Favorite book:</p>
            <p className='font-semibold italic border-b-2 border-dashed border-primary-foreground'>
              {' '}
              {favoriteBook}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className=''>
        <div className='leading-tight text-center'>
          {!!issuedDate && <p>Issued {issuedDate}</p>}
        </div>
        {!name && <p className='text-2xl'>Happy reading!</p>}
      </CardFooter>
    </Card>
  );
}
