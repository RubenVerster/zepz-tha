import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import App from '../App';

// Mock the custom hooks used in App
jest.mock('../hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
  useFetchUserSO: jest.fn(),
}));

describe('App', () => {
  test('successfully mounts the app with mock state', async () => {
    // Mock the state
    const mockState = {
      user: {
        error: null,
        loading: true,
      },
    };

    // Mock the useDispatch and useAppSelector hooks
    const mockDispatch = jest.fn();
    const mockUseAppSelector = jest.fn((selector) => selector(mockState));
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: () => mockDispatch,
      useSelector: mockUseAppSelector,
    }));

    render(
      <Provider store={configureStore({ reducer: { user: userReducer } })}>
        <App />
      </Provider>
    );

    // Assert that the loading card is rendered
    const cardComponent = screen.getByRole('heading');
    expect(cardComponent).toBeInTheDocument();
    expect(cardComponent).toHaveClass('text-4xl');
    expect(screen.queryByText(/UserList/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Error/i)).not.toBeInTheDocument();
  });
});
