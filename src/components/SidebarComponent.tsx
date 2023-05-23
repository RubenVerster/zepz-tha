import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleSidebar, toggleTheme } from '../store/slices/userSlice';

const SidebarComponent = () => {
  const sideBarVisible = useAppSelector((state) => state.user.sidebarVisible);
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.user.theme);

  return (
    <div className='card flex justify-content-center'>
      <Sidebar position='right' visible={sideBarVisible} onHide={() => dispatch(toggleSidebar())}>
        <Button
          className={`p-4 w-full text-center  rounded ${
            theme === 'dark' ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'
          }`}
          label='Change Theme'
          icon={`pi pi-${theme === 'dark' ? 'sun' : 'moon'}`}
          onClick={() => dispatch(toggleTheme())}
        ></Button>
      </Sidebar>
    </div>
  );
};
export default SidebarComponent;
