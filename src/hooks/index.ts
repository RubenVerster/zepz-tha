import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import { useEffect } from 'react';
import { setError, setErrorMessage, setExtractedUsers, setLoading } from '../store/slices/userSlice';
import { extractUserData } from '../utils';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetchUserSO = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUserSO = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(
          'https://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow',
          {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Our servers are down! Someone order pizza and call the devs!');
        }

        const res = await response.json();
        dispatch(setExtractedUsers(extractUserData(res.items)));
        dispatch(setError(false));
      } catch (error: unknown) {
        dispatch(setError(true));
        dispatch(setExtractedUsers([]));
        if (error instanceof Error) {
          dispatch(setErrorMessage(error.message));
        } else {
          dispatch(setErrorMessage('How did you even get here?'));
        }
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUserSO();
  }, [dispatch]);
};
