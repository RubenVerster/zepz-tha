import React, { useCallback } from 'react';
import { InputText } from 'primereact/inputtext';

import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  toggleSidebar,
  toggleTheme,
  toggleUserBlockedFilter,
  toggleUserFavouriteFilter,
  setFilter,
} from '../store/slices/userSlice';
import { debounce } from 'lodash';

const SidebarComponent = () => {
  const sideBarVisible = useAppSelector((state) => state.user.sidebarVisible);
  const filterBlocked = useAppSelector((state) => state.user.filterBlocked);
  const filterFavourite = useAppSelector((state) => state.user.filterFavourite);
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.user.theme);

  const debouncedDispatch = useCallback(
    debounce((filterValue: string) => {
      dispatch(setFilter(filterValue));
    }, 300),
    [dispatch]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedDispatch(e.target.value);
  };

  return (
    <div className='card flex justify-content-center'>
      <Sidebar position='right' visible={sideBarVisible} onHide={() => dispatch(toggleSidebar())}>
        <InputText className='w-full' placeholder='Search...' onChange={handleSearchChange} />

        <Button
          className={`p-4 w-full mt-4 text-center  rounded ${
            theme === 'dark' ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'
          }`}
          label='Change Theme'
          icon={`pi pi-${theme === 'dark' ? 'sun' : 'moon'}`}
          onClick={() => dispatch(toggleTheme())}
        ></Button>
        <Button
          className={`p-4 w-full mt-3`}
          label='Toggle Blocked Users'
          severity='danger'
          icon={`pi pi-${filterBlocked ? 'eraser' : 'ban'}`}
          onClick={() => dispatch(toggleUserBlockedFilter())}
        ></Button>
        <Button
          severity='warning'
          className={`p-4 w-full mt-3`}
          label='Toggle Favourite Users'
          icon={`pi pi-${filterFavourite ? 'star-fill' : 'star'}`}
          onClick={() => dispatch(toggleUserFavouriteFilter())}
        ></Button>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
