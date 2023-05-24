import { Card } from 'primereact/card';
import { Skeleton } from 'primereact/skeleton';

export default function LoadingCard() {
  const cards = new Array(4).fill(0);

  return (
    <ul className='w-full grid lg:grid-cols-3 md:grid-cols-1 gap-4 p-12 grid-rows-12'>
      {cards.map((_, index) => (
        <Card className='p-2' key={index}>
          <li>
            <div className='grid'>
              <Skeleton shape='circle' size='6rem' className='m-auto mb-3'></Skeleton>
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
