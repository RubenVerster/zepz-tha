import { Card } from 'primereact/card';
import { Skeleton } from 'primereact/skeleton';

export default function LoadingCard() {
  const cards = new Array(4).fill(0);

  return (
    <ul className='p-4 list-none flex flex-wrap gap-2'>
      {cards.map((_, index) => (
        <Card className='p-2 w-1/4' key={index}>
          <li>
            <div className='flex'>
              <Skeleton shape='circle' size='4rem' className='mr-2'></Skeleton>
              <div style={{ flex: '1' }}>
                <Skeleton width='100%' className='mb-2'></Skeleton>
                <Skeleton width='75%'></Skeleton>
              </div>
            </div>
          </li>
        </Card>
      ))}
    </ul>
  );
}
