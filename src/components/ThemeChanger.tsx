import { toggleTheme } from '../store/slices/userSlice';
import { Button } from 'primereact/button';

import { useAppDispatch, useAppSelector } from '../hooks';

const ThemeChanger = () => {
  const theme = useAppSelector((state) => state.user.theme);
  const dispatch = useAppDispatch();

  return (
    <div className='absolute top-2 right-2'>
      <Button
        className={`p-2 text-center  rounded ${
          theme === 'dark' ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'
        }`}
        onClick={() => dispatch(toggleTheme())}
      >
        <span className={`pi pi-${theme === 'dark' ? 'sun' : 'moon'}`}></span>
      </Button>
    </div>
  );
};
export default ThemeChanger;
