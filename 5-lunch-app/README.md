## Tech Stack

Project is setup using Vite (React / TypeScript), PostCSS, Jest, React Testing Library.

## How to setup and run the project

### Prerequisites

##### NVM

First, make sure that you have NVM installed on your machine, guideliness on how to do that and the documentation can be found here

**Linux**

https://github.com/nvm-sh/nvm

**Windows**

https://github.com/coreybutler/nvm-windows

Once that is done, install the node version specified in the `.nvmrc` file. You can do that by running `nvm install version` in the root directory. Then go run the command `nvm use` to use Node version declared in the `.nvmrc` file.

If the error `Invalid version` is received, enter the node version specified in the `.nvmrc` file manually: `nvm use version`.

---

You can install all the required dependencies by running the `npm i` command in the root directory. If everything is alright, dependencies for the app will be installed.

To run the applications in development mode, run these commands in terminal:

`npm run dev` - to run the development server, launches on `localhost` on port `3000`.

The following `npm` commands that are available from the projects root:

`npm run server` - runs json-server with available endpoints listed in console. You can find json-server documentation here: https://www.npmjs.com/package/json-server.\
`npm run test` - run all tests.\
`npm run coverage` - run tests coverage.\
`npm run build` - build the application.\
`npm run preview` - run the production build.\
`npm run lint` - run eslint.\
`npm run lint:fix` - fix eslint errors.\
`npm run stylelint` - run stylelinter.\
`npm run stylelint:fix` - fix stylelint errors.\
`npm run pretify` - run prettier.\
