import { extractUserData } from '../utils';

describe('extractUserData', () => {
  test('extracts user data correctly', () => {
    // Mock input data
    const dataSet = [
      {
        profile_image: 'https://example.com/image1.jpg',
        display_name: 'John Doe',
        reputation: 100,
        user_id: '123',
      },
      {
        profile_image: 'https://example.com/image2.jpg',
        display_name: 'Jane Smith',
        reputation: 200,
        user_id: '456',
      },
    ];

    // Call the function
    const extractedSet = extractUserData(dataSet);

    // Assert the extracted data
    expect(extractedSet).toEqual([
      {
        profile_image: 'https://example.com/image1.jpg',
        display_name: 'John Doe',
        reputation: 100,
        id: '123',
        blocked: false,
        favourite: false,
      },
      {
        profile_image: 'https://example.com/image2.jpg',
        display_name: 'Jane Smith',
        reputation: 200,
        id: '456',
        blocked: false,
        favourite: false,
      },
    ]);
  });
});
