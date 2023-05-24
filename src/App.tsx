/* eslint-disable react-hooks/exhaustive-deps */
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import React, { useEffect, useState } from 'react';
import './App.css';

import LoadingCard from './components/LoadingCard';
import UserList from './components/UserList';

import { extractUserData } from './utils';
import ErrorCard from './components/ErrorCard';
import SidebarComponent from './components/SidebarComponent';

import { useAppDispatch } from './hooks';
import { toggleSidebar, setExtractedUsers } from './store/slices/userSlice';
import { Button } from 'primereact/button';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  const fetchUserSO = async () => {
    setError(false);
    setLoading(true);
    try {
      // const response = await fetch(
      //   'https://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow',
      //   {
      //     mode: 'cors',
      //     headers: {
      //       'Access-Control-Allow-Origin': '*',
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
      // console.log(response);
      // const res = await response.json();
      // setUsers(res.items);

      const res = [
        {
          badge_counts: {
            bronze: 9167,
            silver: 9092,
            gold: 859,
          },
          account_id: 11683,
          is_employee: false,
          last_modified_date: 1684489800,
          last_access_date: 1684777721,
          reputation_change_year: 26318,
          reputation_change_quarter: 9203,
          reputation_change_month: 4075,
          reputation_change_week: 305,
          reputation_change_day: 215,
          reputation: 1403761,
          creation_date: 1222430705,
          user_type: 'registered',
          user_id: 22656,
          accept_rate: 86,
          location: 'Reading, United Kingdom',
          website_url: 'http://csharpindepth.com',
          link: 'https://stackoverflow.com/users/22656/jon-skeet',
          profile_image:
            'https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG',
          display_name: 'Jon Skeet',
        },
        {
          badge_counts: {
            bronze: 779,
            silver: 639,
            gold: 57,
          },
          account_id: 1165580,
          is_employee: false,
          last_modified_date: 1684764307,
          last_access_date: 1684150816,
          reputation_change_year: 13068,
          reputation_change_quarter: 3907,
          reputation_change_month: 1563,
          reputation_change_week: 70,
          reputation_change_day: 30,
          reputation: 1234644,
          creation_date: 1326311637,
          user_type: 'registered',
          user_id: 1144035,
          location: 'New York, United States',
          website_url: 'http://www.data-miners.com',
          link: 'https://stackoverflow.com/users/1144035/gordon-linoff',
          profile_image:
            'https://www.gravatar.com/avatar/e514b017977ebf742a418cac697d8996?s=256&d=identicon&r=PG',
          display_name: 'Gordon Linoff',
        },
        {
          badge_counts: {
            bronze: 5150,
            silver: 4332,
            gold: 515,
          },
          account_id: 4243,
          is_employee: false,
          last_modified_date: 1684688105,
          last_access_date: 1684784188,
          reputation_change_year: 36982,
          reputation_change_quarter: 15100,
          reputation_change_month: 7880,
          reputation_change_week: 740,
          reputation_change_day: 325,
          reputation: 1216455,
          creation_date: 1221344553,
          user_type: 'registered',
          user_id: 6309,
          accept_rate: 100,
          location: 'France',
          website_url: 'https://devstory.fyi/vonc',
          link: 'https://stackoverflow.com/users/6309/vonc',
          profile_image: 'https://i.stack.imgur.com/I4fiW.jpg?s=256&g=1',
          display_name: 'VonC',
        },
        {
          badge_counts: {
            bronze: 3546,
            silver: 3601,
            gold: 371,
          },
          account_id: 52822,
          is_employee: false,
          last_modified_date: 1684675200,
          last_access_date: 1684781351,
          reputation_change_year: 12533,
          reputation_change_quarter: 4172,
          reputation_change_month: 1629,
          reputation_change_week: 80,
          reputation_change_day: 70,
          reputation: 1075746,
          creation_date: 1250527322,
          user_type: 'registered',
          user_id: 157882,
          accept_rate: 93,
          location: 'Willemstad, Cura&#231;ao',
          website_url: 'https://balusc.omnifaces.org',
          link: 'https://stackoverflow.com/users/157882/balusc',
          profile_image:
            'https://www.gravatar.com/avatar/89927e2f4bde24991649b353a37678b9?s=256&d=identicon&r=PG',
          display_name: 'BalusC',
        },
        {
          badge_counts: {
            bronze: 3317,
            silver: 4018,
            gold: 292,
          },
          account_id: 35417,
          is_employee: false,
          last_modified_date: 1684532442,
          last_access_date: 1684419870,
          reputation_change_year: 25921,
          reputation_change_quarter: 9178,
          reputation_change_month: 3854,
          reputation_change_week: 310,
          reputation_change_day: 200,
          reputation: 1031001,
          creation_date: 1241362437,
          user_type: 'moderator',
          user_id: 100297,
          location: 'Cambridge, UK',
          website_url: 'http://www.zopatista.com/',
          link: 'https://stackoverflow.com/users/100297/martijn-pieters',
          profile_image:
            'https://www.gravatar.com/avatar/24780fb6df85a943c7aea0402c843737?s=256&d=identicon&r=PG',
          display_name: 'Martijn Pieters',
        },
        {
          badge_counts: {
            bronze: 1863,
            silver: 1907,
            gold: 187,
          },
          account_id: 52616,
          is_employee: false,
          last_modified_date: 1684766700,
          last_access_date: 1684778375,
          reputation_change_year: 21785,
          reputation_change_quarter: 6306,
          reputation_change_month: 2714,
          reputation_change_week: 134,
          reputation_change_day: 97,
          reputation: 1021119,
          creation_date: 1250420422,
          user_type: 'registered',
          user_id: 157247,
          accept_rate: 91,
          location: 'United Kingdom',
          website_url: 'https://thenewtoys.dev',
          link: 'https://stackoverflow.com/users/157247/t-j-crowder',
          profile_image: 'https://i.stack.imgur.com/lUM5Z.jpg?s=256&g=1',
          display_name: 'T.J. Crowder',
        },
        {
          badge_counts: {
            bronze: 2923,
            silver: 3284,
            gold: 270,
          },
          account_id: 14332,
          is_employee: false,
          last_modified_date: 1683548106,
          last_access_date: 1684770743,
          reputation_change_year: 8248,
          reputation_change_quarter: 2358,
          reputation_change_month: 926,
          reputation_change_week: 98,
          reputation_change_day: 68,
          reputation: 1018108,
          creation_date: 1224432467,
          user_type: 'registered',
          user_id: 29407,
          accept_rate: 86,
          location: 'Sofia, Bulgaria',
          website_url: 'http://stackoverflow.com/search?q=user%3a29407&tab=newest',
          link: 'https://stackoverflow.com/users/29407/darin-dimitrov',
          profile_image:
            'https://www.gravatar.com/avatar/e3a181e9cdd4757a8b416d93878770c5?s=256&d=identicon&r=PG',
          display_name: 'Darin Dimitrov',
        },
        {
          badge_counts: {
            bronze: 2888,
            silver: 2551,
            gold: 261,
          },
          account_id: 11975,
          is_employee: false,
          last_modified_date: 1683635400,
          last_access_date: 1684766385,
          reputation_change_year: 16090,
          reputation_change_quarter: 5156,
          reputation_change_month: 1923,
          reputation_change_week: 90,
          reputation_change_day: 80,
          reputation: 1017954,
          creation_date: 1222667162,
          user_type: 'registered',
          user_id: 23354,
          accept_rate: 100,
          location: 'Forest of Dean, United Kingdom',
          website_url: 'http://blog.marcgravell.com',
          link: 'https://stackoverflow.com/users/23354/marc-gravell',
          profile_image: 'https://i.stack.imgur.com/CrVFH.png?s=256&g=1',
          display_name: 'Marc Gravell',
        },
        {
          badge_counts: {
            bronze: 2463,
            silver: 2379,
            gold: 189,
          },
          account_id: 39846,
          is_employee: false,
          last_modified_date: 1683984605,
          last_access_date: 1684783856,
          reputation_change_year: 8935,
          reputation_change_quarter: 2991,
          reputation_change_month: 1618,
          reputation_change_week: 170,
          reputation_change_day: 90,
          reputation: 980966,
          creation_date: 1243786808,
          user_type: 'registered',
          user_id: 115145,
          accept_rate: 84,
          location: 'Pennsylvania, United States',
          website_url: 'https://commonsware.com',
          link: 'https://stackoverflow.com/users/115145/commonsware',
          profile_image: 'https://i.stack.imgur.com/wDnd8.png?s=256&g=1',
          display_name: 'CommonsWare',
        },
        {
          badge_counts: {
            bronze: 1279,
            silver: 1138,
            gold: 180,
          },
          account_id: 680,
          is_employee: false,
          last_modified_date: 1684162800,
          last_access_date: 1684725563,
          reputation_change_year: 18317,
          reputation_change_quarter: 5804,
          reputation_change_month: 2694,
          reputation_change_week: 148,
          reputation_change_day: 80,
          reputation: 940837,
          creation_date: 1218356820,
          user_type: 'registered',
          user_id: 893,
          accept_rate: 84,
          location: 'Christchurch, New Zealand',
          website_url: 'https://hewgill.com',
          link: 'https://stackoverflow.com/users/893/greg-hewgill',
          profile_image:
            'https://www.gravatar.com/avatar/747ffa5da3538e66840ebc0548b8fd58?s=256&d=identicon&r=PG',
          display_name: 'Greg Hewgill',
        },
        {
          badge_counts: {
            bronze: 2521,
            silver: 1680,
            gold: 145,
          },
          account_id: 9266,
          is_employee: false,
          last_modified_date: 1684723816,
          last_access_date: 1684781905,
          reputation_change_year: 6958,
          reputation_change_quarter: 2345,
          reputation_change_month: 1022,
          reputation_change_week: 60,
          reputation_change_day: 40,
          reputation: 917627,
          creation_date: 1221698729,
          user_type: 'registered',
          user_id: 17034,
          location: 'Madison, WI',
          website_url: '',
          link: 'https://stackoverflow.com/users/17034/hans-passant',
          profile_image: 'https://i.stack.imgur.com/Cii6b.png?s=256&g=1',
          display_name: 'Hans Passant',
        },
        {
          badge_counts: {
            bronze: 1325,
            silver: 1199,
            gold: 122,
          },
          account_id: 10162,
          is_employee: false,
          last_modified_date: 1684773017,
          last_access_date: 1684781996,
          reputation_change_year: 15969,
          reputation_change_quarter: 4953,
          reputation_change_month: 2042,
          reputation_change_week: 58,
          reputation_change_day: 31,
          reputation: 904226,
          creation_date: 1221842906,
          user_type: 'registered',
          user_id: 19068,
          location: 'United Kingdom',
          website_url: '',
          link: 'https://stackoverflow.com/users/19068/quentin',
          profile_image:
            'https://www.gravatar.com/avatar/1d2d3229ed1961d2bd81853242493247?s=256&d=identicon&r=PG',
          display_name: 'Quentin',
        },
        {
          badge_counts: {
            bronze: 653,
            silver: 531,
            gold: 37,
          },
          account_id: 4601727,
          is_employee: false,
          last_modified_date: 1683228006,
          last_access_date: 1684732908,
          reputation_change_year: 27353,
          reputation_change_quarter: 6362,
          reputation_change_month: 2164,
          reputation_change_week: 100,
          reputation_change_day: 60,
          reputation: 869094,
          creation_date: 1402536093,
          user_type: 'registered',
          user_id: 3732271,
          website_url: 'http://linkedin.com/in/akrun1',
          link: 'https://stackoverflow.com/users/3732271/akrun',
          profile_image:
            'https://www.gravatar.com/avatar/e015ca953dd884c1e0b13d543f0a3368?s=256&d=identicon&r=PG&f=y&so-version=2',
          display_name: 'akrun',
        },
        {
          badge_counts: {
            bronze: 1961,
            silver: 1900,
            gold: 176,
          },
          account_id: 15988,
          is_employee: false,
          last_modified_date: 1683270006,
          last_access_date: 1644608022,
          reputation_change_year: 9554,
          reputation_change_quarter: 2893,
          reputation_change_month: 1172,
          reputation_change_week: 80,
          reputation_change_day: 20,
          reputation: 863414,
          creation_date: 1225829805,
          user_type: 'registered',
          user_id: 34397,
          accept_rate: 87,
          location: 'New Jersey',
          website_url: 'https://SLaks.net',
          link: 'https://stackoverflow.com/users/34397/slaks',
          profile_image:
            'https://www.gravatar.com/avatar/7deca8ec973c3c0875e9a36e1e3e2c44?s=256&d=identicon&r=PG',
          display_name: 'SLaks',
        },
        {
          badge_counts: {
            bronze: 1394,
            silver: 1218,
            gold: 169,
          },
          account_id: 34048,
          is_employee: false,
          last_modified_date: 1684617001,
          last_access_date: 1677883091,
          reputation_change_year: 13187,
          reputation_change_quarter: 4148,
          reputation_change_month: 1628,
          reputation_change_week: 100,
          reputation_change_day: 50,
          reputation: 847383,
          creation_date: 1240625354,
          user_type: 'registered',
          user_id: 95810,
          accept_rate: 80,
          location: 'Sunnyvale, CA',
          website_url: 'http://www.aleax.it',
          link: 'https://stackoverflow.com/users/95810/alex-martelli',
          profile_image:
            'https://www.gravatar.com/avatar/e8d5fe90f1fe2148bf130cccd4dc311c?s=256&d=identicon&r=PG',
          display_name: 'Alex Martelli',
        },
        {
          badge_counts: {
            bronze: 1942,
            silver: 1568,
            gold: 233,
          },
          account_id: 8291,
          is_employee: false,
          last_modified_date: 1684761004,
          last_access_date: 1684755484,
          reputation_change_year: 12309,
          reputation_change_quarter: 3682,
          reputation_change_month: 1507,
          reputation_change_week: 156,
          reputation_change_day: 98,
          reputation: 846981,
          creation_date: 1221622605,
          user_type: 'registered',
          user_id: 14860,
          accept_rate: 100,
          website_url: '',
          link: 'https://stackoverflow.com/users/14860/paxdiablo',
          profile_image: 'https://i.stack.imgur.com/vXG1F.png?s=256&g=1',
          display_name: 'paxdiablo',
        },
        {
          badge_counts: {
            bronze: 1659,
            silver: 1770,
            gold: 180,
          },
          account_id: 64585,
          is_employee: false,
          last_modified_date: 1684598700,
          last_access_date: 1683580395,
          reputation_change_year: 19614,
          reputation_change_quarter: 6047,
          reputation_change_month: 2628,
          reputation_change_week: 190,
          reputation_change_day: 150,
          reputation: 831687,
          creation_date: 1255610900,
          user_type: 'registered',
          user_id: 190597,
          accept_rate: 88,
          website_url: '',
          link: 'https://stackoverflow.com/users/190597/unutbu',
          profile_image:
            'https://www.gravatar.com/avatar/8f7683207b9fcc8e77120265517f7ce9?s=256&d=identicon&r=PG&f=y&so-version=2',
          display_name: 'unutbu',
        },
        {
          badge_counts: {
            bronze: 1226,
            silver: 1310,
            gold: 92,
          },
          account_id: 3465245,
          is_employee: false,
          last_modified_date: 1684268700,
          last_access_date: 1684775522,
          reputation_change_year: 29026,
          reputation_change_quarter: 8364,
          reputation_change_month: 3506,
          reputation_change_week: 130,
          reputation_change_day: 90,
          reputation: 810310,
          creation_date: 1382300846,
          user_type: 'registered',
          user_id: 2901002,
          accept_rate: 97,
          location: 'Bratislava, Slovakia',
          website_url: '',
          link: 'https://stackoverflow.com/users/2901002/jezrael',
          profile_image: 'https://i.stack.imgur.com/hMDvl.jpg?s=256&g=1',
          display_name: 'jezrael',
        },
        {
          badge_counts: {
            bronze: 1450,
            silver: 1575,
            gold: 190,
          },
          account_id: 24377,
          is_employee: false,
          last_modified_date: 1684164000,
          last_access_date: 1684327085,
          reputation_change_year: 13391,
          reputation_change_quarter: 3848,
          reputation_change_month: 1570,
          reputation_change_week: 140,
          reputation_change_day: 100,
          reputation: 804275,
          creation_date: 1233672960,
          user_type: 'registered',
          user_id: 61974,
          location: 'Denmark',
          website_url: '',
          link: 'https://stackoverflow.com/users/61974/mark-byers',
          profile_image:
            'https://www.gravatar.com/avatar/ad240ed5cc406759f0fd72591dc8ca47?s=256&d=identicon&r=PG',
          display_name: 'Mark Byers',
        },
        {
          badge_counts: {
            bronze: 838,
            silver: 914,
            gold: 183,
          },
          account_id: 3748,
          is_employee: false,
          last_modified_date: 1681751100,
          last_access_date: 1684781006,
          reputation_change_year: 10908,
          reputation_change_quarter: 2992,
          reputation_change_month: 1256,
          reputation_change_week: 90,
          reputation_change_day: 40,
          reputation: 801928,
          creation_date: 1220976258,
          user_type: 'registered',
          user_id: 5445,
          location: 'Guatemala',
          website_url: 'http://codingspot.com',
          link: 'https://stackoverflow.com/users/5445/christian-c-salvad%c3%b3',
          profile_image:
            'https://www.gravatar.com/avatar/932fb89b9d4049cec5cba357bf0ae388?s=256&d=identicon&r=PG',
          display_name: 'Christian C. Salvad&#243;',
        },
      ];

      dispatch(setExtractedUsers(extractUserData(res)));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserSO();
  }, []);

  return (
    <React.Fragment>
      <div className='relative'>
        <div className='absolute top-2 right-2'>
          <Button icon='pi pi-arrow-right' onClick={() => dispatch(toggleSidebar())} />
        </div>
        <SidebarComponent />
        <h1 className='text-center text-6xl mt-2'>My SO Baes</h1>

        {!loading && (
          <>
            {!error && <UserList />}
            {error && <ErrorCard />}
          </>
        )}
        {loading && <LoadingCard />}
      </div>
    </React.Fragment>
  );
}

export default App;
