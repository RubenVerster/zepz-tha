import { IExtractedUser } from '../types';
import UserCard from './UserCard';

const UserList: React.FC<{ users: IExtractedUser[] }> = ({ users }) => {
  return (
    <div className='w-full grid lg:grid-cols-3 grid-rows-12 gap-4 p-12 md:grid-cols-1'>
      {users.map((user: IExtractedUser) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};
export default UserList;
