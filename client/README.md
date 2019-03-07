# MARVEL APP CLIENT 
This client app is a web application built with `ReactJS` and written in `typescript`.
The app was created with the `create-react-app` tool.

## Description
This app communicates with the `server` nodeJS app in order to retrieve Marvel characters data and display them in a paginated gallery-like view.

## Content
- `build` : contains the production packaged application after the build
- `public` : contains the app template
- `src` 
  - `assets` : app svg images
  - `components` : the the app components (each component folder contains the typescript, css and typing file)
  - `services` : contains the app services (treating data, fetching the api ...)
  - `styles` : contains the app global styling 
- `Dockerfile` : instructions to build the webapp image
- `server.js` : in prod mode, this server is used to serve statically the react app. It also plays the role of proxy in order to redirect api calls to backend server.
- `tsconfig.json` : typescript configuration file
- `tsling.json` : typescript linter
- `.prettierrc` : prettier config file for code formatting
- `package.json`
 
## Available scripts

This app contains four main tasks :

   - `yan start` : Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   - `yarn build` : Builds the app for production to the `build` folder.
   - `yarn test` : Launches the test runner in the interactive watch mode.
   - `yarn run eject` : ejects webpack config 
   - `yarn lint`: lints typescript (ts, tsx) files (executes tslint)

## Dockerise  
## Running the client and the server applications simultaneously
Consider running both the client and server app simultaneously to use this application.
This is managed by the compose feature of docker. 

If you want to run the server and the client applications simultaneously in dev mode (with hot loading) or in a prod mode please refer to the root `README.md`.  

NOTE: the frontend application is tightly coupled to the backend since it gets the displayed data from the api.
Therefore it's recommended to run it simultaneously with the backend via the docker compose command line (refer to the root README.md) 
### Building development mode (building client app only)
- Build your image  
```bash
docker build -t <your_image_name> . --build-arg app_env=development
```
## Building production mode (building client app only)
```bash
docker build -t <your_image_name> . --build-arg app_env=production
```
## Running the app (running client app only)
- Run the image 
```bash
docker run -p 3000:3000  -d <your_image_name>
```
where the option `-p` allow to publish the container’s port to your machine .

