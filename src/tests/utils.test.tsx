import { extractUserData } from '../utils';
import users from './test';

describe('extractUserData', () => {
  test('extracts user data correctly', () => {
    // Call the function
    const extractedSet = extractUserData(users);

    // Assert the extracted data
    expect(extractedSet).toEqual([
      {
        profile_image:
          'https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG',
        display_name: 'Jon Skeet',
        reputation: 1403761,
        id: 22656,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/e514b017977ebf742a418cac697d8996?s=256&d=identicon&r=PG',
        display_name: 'Gordon Linoff',
        reputation: 1234644,
        id: 1144035,
        blocked: false,
        favourite: false,
      },
      {
        profile_image: 'https://i.stack.imgur.com/I4fiW.jpg?s=256&g=1',
        display_name: 'VonC',
        reputation: 1216455,
        id: 6309,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/89927e2f4bde24991649b353a37678b9?s=256&d=identicon&r=PG',
        display_name: 'BalusC',
        reputation: 1075746,
        id: 157882,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/24780fb6df85a943c7aea0402c843737?s=256&d=identicon&r=PG',
        display_name: 'Martijn Pieters',
        reputation: 1031001,
        id: 100297,
        blocked: false,
        favourite: false,
      },
      {
        profile_image: 'https://i.stack.imgur.com/lUM5Z.jpg?s=256&g=1',
        display_name: 'T.J. Crowder',
        reputation: 1021119,
        id: 157247,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/e3a181e9cdd4757a8b416d93878770c5?s=256&d=identicon&r=PG',
        display_name: 'Darin Dimitrov',
        reputation: 1018108,
        id: 29407,
        blocked: false,
        favourite: false,
      },
      {
        profile_image: 'https://i.stack.imgur.com/CrVFH.png?s=256&g=1',
        display_name: 'Marc Gravell',
        reputation: 1017954,
        id: 23354,
        blocked: false,
        favourite: false,
      },
      {
        profile_image: 'https://i.stack.imgur.com/wDnd8.png?s=256&g=1',
        display_name: 'CommonsWare',
        reputation: 980966,
        id: 115145,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/747ffa5da3538e66840ebc0548b8fd58?s=256&d=identicon&r=PG',
        display_name: 'Greg Hewgill',
        reputation: 940837,
        id: 893,
        blocked: false,
        favourite: false,
      },
      {
        profile_image: 'https://i.stack.imgur.com/Cii6b.png?s=256&g=1',
        display_name: 'Hans Passant',
        reputation: 917627,
        id: 17034,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/1d2d3229ed1961d2bd81853242493247?s=256&d=identicon&r=PG',
        display_name: 'Quentin',
        reputation: 904226,
        id: 19068,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/e015ca953dd884c1e0b13d543f0a3368?s=256&d=identicon&r=PG&f=y&so-version=2',
        display_name: 'akrun',
        reputation: 869094,
        id: 3732271,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/7deca8ec973c3c0875e9a36e1e3e2c44?s=256&d=identicon&r=PG',
        display_name: 'SLaks',
        reputation: 863414,
        id: 34397,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/e8d5fe90f1fe2148bf130cccd4dc311c?s=256&d=identicon&r=PG',
        display_name: 'Alex Martelli',
        reputation: 847383,
        id: 95810,
        blocked: false,
        favourite: false,
      },
      {
        profile_image: 'https://i.stack.imgur.com/vXG1F.png?s=256&g=1',
        display_name: 'paxdiablo',
        reputation: 846981,
        id: 14860,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/8f7683207b9fcc8e77120265517f7ce9?s=256&d=identicon&r=PG&f=y&so-version=2',
        display_name: 'unutbu',
        reputation: 831687,
        id: 190597,
        blocked: false,
        favourite: false,
      },
      {
        profile_image: 'https://i.stack.imgur.com/hMDvl.jpg?s=256&g=1',
        display_name: 'jezrael',
        reputation: 810310,
        id: 2901002,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/ad240ed5cc406759f0fd72591dc8ca47?s=256&d=identicon&r=PG',
        display_name: 'Mark Byers',
        reputation: 804275,
        id: 61974,
        blocked: false,
        favourite: false,
      },
      {
        profile_image:
          'https://www.gravatar.com/avatar/932fb89b9d4049cec5cba357bf0ae388?s=256&d=identicon&r=PG',
        display_name: 'Christian C. Salvad&#243;',
        reputation: 801928,
        id: 5445,
        blocked: false,
        favourite: false,
      },
    ]);
  });
});
