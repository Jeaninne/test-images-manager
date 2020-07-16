## Installation
1. `yarn install`
2. `yarn run start-dev` for App served at `http://localhost:8080`
3. `yarn run start-prod`for Build app once to `/dist/` at `http://localhost:3000`

**All commands**

Command | Description
--- | ---
`yarn run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`yarn run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`yarn run build` | Build app to `/dist/`
`yarn run lint` | Run Typescript linter
`yarn run lint --fix` | Run Typescript linter and fix issues
`yarn run start` | (alias of `yarn run start-dev`)

if loading is annoying - find getInitialData function and remove setTimeout