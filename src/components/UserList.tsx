import { IExtractedUser } from '../types';
import UserCard from './UserCard';

const UserList: React.FC<{ users: IExtractedUser[] }> = ({ users }) => {
  return (
    <div className=' w-full flex flex-wrap flex-row'>
      {users.map((user: IExtractedUser) => {
        return <UserCard {...{ user }} />;
      })}
    </div>
  );
};
export default UserList;
