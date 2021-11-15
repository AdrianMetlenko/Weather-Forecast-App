# Weather Forecast App

A simple React app which allows the user to search for a city by name, and displays the forecast for the upcoming 3 days. 

All data is sourced form the [weatherapi.com](www.weatherapi.com) API.

The App assumes a home location of Sydney, Australia. Therefore, Metric attributes are used (as opposed to Imperial).

All development & testing has been with Google Chrome Browser.

## Design

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), with TypeScript enabled.

The [MUI.com](https://mui.com/) library was chosen, as it is highly robust, includes most desired components, and I am most familiar with it.

The layout was designed to be modular, with breakpoints used to rearrange components for an optimal fit.

Completing this exercise as a candidate for the 'Charts' team, I felt it was necessary to include a chart to display time-series data.
The [React-Charts](https://react-charts.tanstack.com/) library was used for this.
I used the MUI chips to allow the user to select which attribute series to display, as each attribute has significantly varying data ranges.

While the API provides a large quantity of attributes, only some were selected to simplify the design. Where both imperial and metric values are provided, only the metric is displayed.

## Testing

The [JestJS](https://jestjs.io/) Testing Framework has been used, as it is a leading option and can be included in the [Create React App](https://github.com/facebook/create-react-app) setup.

A smoke test checks successful compile, and identifies the title is rendered.

Basic unit tests have been written to spot-check some sample data, and demonstrate testing understanding. See details in scripts > `npm test`

Basic end-to-end testing has been confirgured following [this Blog](https://blog.logrocket.com/react-end-to-end-testing-jest-puppeteer/#whatispuppeteer)
The test case ensures the API is successful in retrieving and displaying the default city data. See details in scripts > `npm test:e2e`

While the value of testing on a larger codebase with multiple contributors is recognised, in this instance, as the code is developed by a single developer, in a short span of time, minimal testing has been implemented.
Additionally, it is my first time using these frameworks. I hope provided tests demonstrate an understanding of testing and ability to use such frameworks.


## Scripts

### 1 Initialise
#### `npm initialise` or `npm i`

Please initialise the project by running the above command.
This will download all package dependencies required to run.

In the project directory, you can run:

### 2 Run
#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


#### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run test:e2e`

Launches the [Puppeteer](https://jestjs.io/docs/puppeteer) test runner in the interactive watch mode.

NOTE: Requires production build to be served. \
Use `npx serve -s build -p 8000` once a build has been created.