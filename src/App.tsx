import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import React from 'react';
import './App.css';

import LoadingCard from './components/LoadingCard';
import UserList from './components/UserList';

import ErrorCard from './components/ErrorCard';
import SidebarComponent from './components/SidebarComponent';

import { Button } from 'primereact/button';
import { useAppDispatch, useAppSelector, useFetchUserSO } from './hooks';
import { toggleSidebar } from './store/slices/userSlice';

function App() {
  const error = useAppSelector((state) => state.user.error);
  const loading = useAppSelector((state) => state.user.loading);

  const dispatch = useAppDispatch();

  useFetchUserSO();

  return (
    <React.Fragment>
      <div className='relative '>
        <div className='flex justify-between p-2 bg-blue-500'>
          <h1 className='text-4xl '>My SO Baes</h1>
          <Button icon='pi pi-arrow-right' onClick={() => dispatch(toggleSidebar())} />
        </div>
        {!loading && (
          <>
            {!error && <UserList />}
            {error && <ErrorCard />}
          </>
        )}
        {loading && <LoadingCard />}
        <SidebarComponent />
      </div>
    </React.Fragment>
  );
}

export default App;
