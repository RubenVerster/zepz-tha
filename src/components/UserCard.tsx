import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useState } from 'react';
import { useAppSelector } from '../hooks';
import { IExtractedUser } from '../types';

interface IUserCardProps {
  user: IExtractedUser;
}

const UserCard: React.FC<IUserCardProps> = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [userBlocked, setUserBlocked] = useState(Math.random() > 0.7 ? true : false);
  const [userFollowed, setUserFollowed] = useState(Math.random() > 0.7 ? true : false);
  const theme = useAppSelector((state) => state.user.theme);

  const handleUserBlocking = () => {
    setUserBlocked(true);
    setVisible(false);
    if (userFollowed) setUserFollowed(false);
  };

  const toggleUserFollow = () => {
    setUserFollowed(!userFollowed);
  };

  return (
    <Card
      className={`border-4 ${userFollowed && 'border-yellow-400'} relative row-span-${!visible ? '1' : '2'} ${
        userBlocked ? 'dimmed' : ''
      }}`}
    >
      <div>
        <div
          onClick={() => setVisible(!visible)}
          className='flex justify-center cursor-pointer hover:scale-110 transition-all ease-in-out relative duration-200'
        >
          <>
            <img
              className={`h-64 w-64 rounded-full border-2 ${userFollowed && 'border-4 border-yellow-400'}`}
              alt='Card'
              src={user.profile_image}
            />
            {userFollowed && (
              <i className='rounded-full bg-yellow-500 p-2 border-2 border-white pi pi-star-fill absolute left-3/4 text-5xl text-yellow-300'></i>
            )}
          </>
          <h5 className={`absolute text-center user_name user_name--${theme}`}>{user.display_name}</h5>
        </div>
        <p className='mt-6 text-center'>Reputation: {user.reputation}</p>
      </div>

      {visible && (
        <div className={`mt-12 lg:p-12 ${visible ? 'flex flex-col' : 'hidden'}`}>
          <Button
            className='h-32 p-button-outlined p-button-secondary'
            label={userFollowed ? 'Unfollow User' : 'Follow User'}
            icon={`pi pi-${userFollowed ? 'star' : 'star-fill'}`}
            size='large'
            severity={userFollowed ? 'secondary' : 'warning'}
            onClick={() => toggleUserFollow()}
          />
          <Button
            className='my-6 h-16 bottom-0'
            label='Block'
            severity='danger'
            icon='pi pi-ban'
            onClick={() => handleUserBlocking()}
          />
        </div>
      )}

      {userBlocked && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            flexDirection: 'column',
            zIndex: 2,
          }}
        >
          <h3 className='text-lg mb-2'>You have blocked this user</h3>
          <Button
            onClick={() => setUserBlocked(false)}
            label='Unblock User'
            severity='warning'
            icon='pi pi-eraser'
          />
        </div>
      )}
    </Card>
  );
};
export default UserCard;
