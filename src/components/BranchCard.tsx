import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import TextareaWithLabel from '@/components/TextareaWithLabel';
import VisitBadge from '@/components/VisitBadge';

interface BranchCardProps {
  image: string;
  BranchCode: string;
  BranchName: string;
  visitCount: number;
  hasKidStuff: boolean;
  Address: string;
}

export default function BranchCard({
  image,
  BranchCode,
  BranchName,
  visitCount,
  hasKidStuff,
  Address,
}: BranchCardProps) {
  return (
    <Card className='flex flex-col justify-between'>
      <CardHeader className='flex-row gap-4 items-center'>
        <Avatar>
          {/* <AvatarImage
          src={`/img/${branch.image}`}
          alt={branch.BranchName}
        /> */}
          <AvatarFallback>{BranchCode.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{BranchName}</CardTitle>
          <CardDescription>{Address}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className=''>
        <CardImage src={`/img/${image}`} alt={BranchName} />
        <VisitBadge className='py-4' visitCount={visitCount} />
        <TextareaWithLabel
          className=''
          label='My notes:'
          placeholder='Write anything you want...'
        />
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button
          variant={`outline`}
          className='border-2 border-primary/80 hover:bg-primary/60'
        >
          View Branch
        </Button>
        {hasKidStuff && (
          <Badge
            variant='secondary'
            className='text-sm text-green-600/90 border-green-600/90'
          >
            Has Kid Stuff!
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}
