## Installation

No extra setup require, just `npm i` to install all dependencies.

There will be some errors and warnings in the terminal after installing. That's because CRA is an absolute mess and I don't have time to fix it. It's just a warning, so it's fine.
Vite is much better for using the technologies I used, but you know, client wanted CRA, so I used CRA

Using node `v16.14.2` is recommended, or is it forced...?

## Usage

Run `npm run start` to start the application.

## Production

Project is live here: https://zepz-tha.vercel.app/

## Design Decisions

- React is sexy, so I used React
- TypeScript is sexy too, so I used TypeScript
- React + Typescript is sexy, so I used React + TypeScript
- Tailwind is sexy, so I used Tailwind
- And PrimeReact was used, since I am using it in a sideproject and it was a nice changeup from MUI, but I think PrimeReact is also sexy
- The architecture is sexy for a small application, otherwise I'd be losing unnecessary of time implementing a more complex architecture
- There are barely any comments since the code is pretty self explanitory, which is, yes, sexy

## Time Constraints Limitations, aka, 'Assign To Junior'

- some nice animations would also have been nice, even some micro-interactions
- some more in-depth tests would've been nice as well, but there are basic ones
- Split up the redux store some more, where there would be 'settings' and the 'fetched users'
- - When I reached my query limits for the API, I would have liked to set an error in the store that would prevent the data call. Something that would grab the time limit from the error response and then implement a timer that would prevent the call until the time limit is up

## Time Category Allocation

- Review: Reading the tech spec and email? Like 10mins
- Design: 0min. I design with CSS and Component Libraries
- Implementation: About 1-2 hours out of my night for 2 days, so about 4.5 hours
- Testing: 30min
- Documentation: Like 15min or summin, I dunno. I have a 60WPM, so it goes quick :P
