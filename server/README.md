# MARVEL APP SERVER 
This server app is built with `NodeJS` using `express`.

`Babel` is used in order to benefit from es6 syntax, modules and features.
  
## Description
This server communicates with the Marvel API in order to retrieve needed data.

## Content
- `config` : server internal config 
- `src` 
  - `controllers` : app controllers
  - `helpers` : utility file containing helper methods
  - `middelwares` : a set of middleware functions that make changes to the request/response
  - `services` : contains the services needed by the app (for the moment contains only a request-wrapper which is wrapper around the `request` call)
- `Dockerfile` : instructions to build the server image
- `server.js` : the main starting file
- `.prettierrc`: prettier config file for code formatting 
- `.eslintrc` : eslint config file for code linting  
- `package.json`

## Available scripts

This app contains two main tasks :

   - `yan start` : starts the server on PORT `8080`
   - `yarn run watch` : starts the server with `nodemon` watcher for development purposes
   - `yarn lint`: lints javascript files (executes eslint)
   - `yarn test`: runs the api tests (written with Jest and SuperTest)
   - `yarn run test-watch`: runs the `yarn test` task with watch mode enabled

## Dockerise  
## Running the client and the server applications simultaneously
Consider running both the client and server app simultaneously to use this application.
This is managed by the compose feature of docker. 

If you want to run the server and the client applications simultaneously in dev mode (with hot loading) or in a prod mode please refer to the root `README.md`.

### Building development mode (building server app only)
- Build your image  
```bash
docker build -t <your_image_name> . --build-arg app_env=development
```
## Building production mode (building server app only)
```bash
docker build -t <your_image_name> . --build-arg app_env=production
```
## Running the app (running server app only)
- Run the image 
```bash
docker run -p 8080:8080  -d <your_image_name>
```
where the option `-p` allow to publish the container’s port to your machine .

