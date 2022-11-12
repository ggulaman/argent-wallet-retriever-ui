<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://logovectordl.com/wp-content/uploads/2020/11/argent-xyz-logo-vector.png" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Front-end service for the wallet retriever web-app</p>
  <p align="center">This project was bootstrapped with Create React App</p>

## Description
This is the front-end service used by wallet retriever web-app.

It fetches the back-end of the wallet retriever web-app and shows the details of a given wallet.

```bash
# GET Request
http://localhost:4000/<ethAddress>

# Response
{"address":"0x..","ethBalance":0.0,"numberOfGuardians":0,"ERC20Balances":[]}
```

This UI uses:
- [React](https://reactjs.org/) with Typescript
- ([Material UI](https://mui.com/)) for the components
- [Axios](https://axios-http.com/docs/intro) to handle the GET request
- [react-testing-library](https://testing-library.com/) and [jest](https://jestjs.io/) for testing

## Installation
```bash
$ npm install
```

## Set Up
#### 1. Edit `.env` with the variables accordingly, where:
- #### REACT_APP_API_URL
  The URL of the back-end of the wallet retriever web-app. i.e.: "http://localhost:4000"
- #### REACT_APP_ETH_CHAIN_BROWSER
  Etherscan browser URL for addresses. This is used to build the Links. i.e.: "https://etherscan.io/address/"
- #### WALLET_PRIVATE_KEY
  Any Ethereum private key.
- #### MANAGE_GUARDIANS_SC_ADDRESS
  The SC address of ManageGuardians. i.e.: 0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7
- #### MANAGE_GUARDIANS_SC_ABI
  The ABI of above SC

## Steps to Run it Locally
#### 1. Install the libraries following [Installation](#installation)
#### 2. Set up the .env file following [Set Up](#set-up)
#### 3. Running the app
```bash
# development
$ npm run start
```

## Test
```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Lint
```bash
# lint
$ npm run lint

# test coverage
$ npm run lint:fix
```

## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Stay in touch
- Author - [Raul Castillo Lopez](https://www.linkedin.com/in/raulcastillolopez/)
