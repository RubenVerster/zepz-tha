import React, { useState } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { IExtractedUser } from '../types';
import UserCard from './UserCard';
import { useAppSelector } from '../hooks';

const UserList = () => {
  const users = useAppSelector((state) => state.user.extractedUsers);
  const filterBlocked = useAppSelector((state) => state.user.filterBlocked);
  const filterFavourite = useAppSelector((state) => state.user.filterFavourite);
  const filterString = useAppSelector((state) => state.user.filter);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCardExpansion = (userId: number) => {
    if (expandedCards.includes(userId)) {
      setExpandedCards(expandedCards.filter((id) => id !== userId));
    } else {
      setExpandedCards([...expandedCards, userId]);
    }
  };

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const filteredUsers = users?.filter((user) => {
    // Check if user's display_name matches the filter string
    const doesNameMatch = user.display_name.toLowerCase().includes(filterString.toLowerCase());

    // Apply the filtered string to the existing filters
    if (filterBlocked) return user.blocked && doesNameMatch;
    if (filterFavourite) return user.favourite && doesNameMatch;

    // If no filters are active, return true only if the name matches the filter string
    return doesNameMatch;
  });
  const userList = filteredUsers?.slice(first, first + rows).map((user: IExtractedUser) => {
    const isExpanded = expandedCards.includes(user.id);
    return (
      <UserCard
        key={user.id}
        user={user}
        isExpanded={isExpanded}
        toggleExpansion={() => toggleCardExpansion(user.id)}
      />
    );
  });

  return (
    <div className='w-full p-12'>
      <div className='flex justify-center'>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={filteredUsers?.length}
          rowsPerPageOptions={[3, 6]}
          onPageChange={onPageChange}
          template='RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink'
        />
      </div>
      <div className='w-full grid lg:grid-cols-3 md:grid-cols-1 gap-4 grid-rows-12  mt-4'>{userList}</div>
    </div>
  );
};

export default UserList;
