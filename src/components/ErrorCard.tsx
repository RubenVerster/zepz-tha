import { Card } from 'primereact/card';
import { useAppSelector } from '../hooks';

const ErrorCard = () => {
  const errorMessage = useAppSelector((state) => state.user.errorMessage);

  return (
    <Card title={<h1 className='text-3xl text-red-600'>Houston, we have a problem...</h1>} className='p-8 m-8'>
      <p className=''>Something went wrong!</p>
      <p className=''>
        {errorMessage
          ? errorMessage
          : `We can't quite put our finger on what is causing this yet, but if you know about it, our team is already working on fixing it :)`}
      </p>
    </Card>
  );
};
export default ErrorCard;
