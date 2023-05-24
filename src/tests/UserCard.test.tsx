import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import UserCard from '../components/UserCard';

// Mock the custom hooks used in UserCard
jest.mock('../hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

describe('UserCard', () => {
  test('renders user card with correct user information', () => {
    // Mock the state
    const mockState = {
      user: {
        theme: 'dark',
        extractedUsers: [
          {
            id: 1,
            display_name: 'John Doe',
            profile_image: 'avatar.png',
            reputation: 100,
            favourite: false,
            blocked: false,
          },
        ],
      },
    };

    // Mock the useSelector hook to return the mock state
    const mockUseAppSelector = jest.fn((selector) => selector(mockState));
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useSelector: mockUseAppSelector,
    }));

    // Render the UserCard component
    render(
      <Provider store={configureStore({ reducer: { user: userReducer } })}>
        <UserCard user={mockState.user.extractedUsers[0]} isExpanded={false} toggleExpansion={() => {}} />
      </Provider>
    );

    // Assert that the user card is rendered with the correct information
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByAltText('Card')).toBeInTheDocument();
    expect(screen.getByText(/Reputation: 100/i)).toBeInTheDocument();
  });

  // Add more test cases to cover different scenarios and component behaviors
});
