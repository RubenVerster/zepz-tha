import { Card } from 'primereact/card';

const ErrorCard = () => {
  return (
    <Card title={<h1 className='text-3xl text-red-600'>Error</h1>} className='p-8 m-8'>
      <p className=''>Something went wrong</p>
    </Card>
  );
};
export default ErrorCard;
