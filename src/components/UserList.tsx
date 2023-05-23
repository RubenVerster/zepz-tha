import { useState } from 'react';
import { IExtractedUser } from '../types';
import UserCard from './UserCard';

const UserList: React.FC<{ users: IExtractedUser[] }> = ({ users }) => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCardExpansion = (userId: number) => {
    if (expandedCards.includes(userId)) {
      setExpandedCards(expandedCards.filter((id) => id !== userId));
    } else {
      setExpandedCards([...expandedCards, userId]);
    }
  };

  return (
    <div className='w-full grid lg:grid-cols-3 grid-rows-12 gap-4 p-12 md:grid-cols-1'>
      {users.map((user: IExtractedUser) => {
        const isExpanded = expandedCards.includes(user.id);

        return (
          <UserCard
            key={user.id}
            user={user}
            isExpanded={isExpanded}
            toggleExpansion={() => toggleCardExpansion(user.id)}
          />
        );
      })}
    </div>
  );
};

export default UserList;
