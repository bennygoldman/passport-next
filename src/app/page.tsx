import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../components/ui/card';

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

  return result.json();
}

export default async function Home() {
  const branches = await getBranches();

  return (
    <main>
      <div className='grid grid-cols-3 gap-8'>
        {branches.map((branch) => (
          <Card key={branch.id} className='flex flex-col justify-between'>
            <CardHeader className='flex-row gap-4 items-center'>
              {/* image to go here */}
              <div>
                <CardTitle>{branch.BranchName}</CardTitle>
                <CardDescription>{branch.NBHDName}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {!branch.visitCount && (
                <p className='bg-blue-400 bg-opacity-20'>
                  You haven't been here yet!
                </p>
              )}
              {branch.visitCount === 1 && (
                <p className=' bg-blue-400 bg-opacity-60'>You've been here!</p>
              )}
              {branch.visitCount > 1 && (
                <p className=' bg-blue-500 bg-opacity-80'>
                  You've been here {branch.visitCount} times!
                </p>
              )}
              <p>{branch.Address}</p>
              <p>{branch.PostalCode}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <button>View Branch</button>
              {branch.hasKidStuff && (
                <p className=' bg-green-400 bg-opacity-70'>Has Kid Stuff!</p>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
