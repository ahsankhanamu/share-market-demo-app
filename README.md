# Getting Started with the App

This project is created with `react` and `recharts`.

## Available Scripts

This project is created with `yarn` package manager instead of `npm`

In the project directory, you can run:

### `yarn install`

to install all the depepndencies of the project.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- The App makes the API call to server with Authorization token and saves the data in it's store.
- The user can switch between the calendar views, which are `1G, 1H, 1A, 3A, 1Y, 5Y` by clicking on respective button.
- The App is using react-redux and redux toolkit as scalable solutions, although for view only at manual refresh rate could have been achieved by conventional approach.
- It is using the native browser fetch API along with centralized response handling rather than any third party library.
- Although comments can be found in the code of implementation, the code is mostly self explanatory.

### Upcoming features

- Realtime stock price data updated with websockets
