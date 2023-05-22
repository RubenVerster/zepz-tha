import { IUser } from '../types';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const userCard: React.FC<{ user: IUser }> = ({ user }) => {
  const title = (
    <div className='relative'>
      <div className='flex justify-center'>
        <img className='h-32 w-32 rounded-full opacity-75' alt='Card' src={user.profile_image} />
        <h5 className='absolute text-center user_name'>{user.display_name}</h5>
      </div>
    </div>
  );

  return (
    <div className='relative'>
      <div className='absolute w-full top-0 left-0 bg-gray-600'></div>
      <Card
        title={title}
        footer={
          <div className='flex flex-wrap justify-content-end gap-2 mt-4'>
            <Button label='Save' icon='pi pi-check' />
            <Button label='Cancel' icon='pi pi-times' className='p-button-outlined p-button-secondary' />
          </div>
        }
        className='p-2 m-4'
      ></Card>
    </div>
  );
};
export default userCard;
