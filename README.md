# MARVEL APP  
This mini application displays Marvel characters in a paginated gallery-like view.

## Description
This application is composed of a a `NODEJS` server and a `ReactJS` webapp. Please refer to app README.md file to learn more.

## Content
- `client` : client application  
- `server` : server application
- `.env` : contains the env variables used by the docker compose files
- `docker-compose.yml` : runs the application (client + server) in a `development` mode (with `hot loader` for both apps)
- `docker-compose.prod.yml` : runs the application (client + server) in a `production` mode.

 
## Available scripts 
### Development mode 
In order to start your application in a a `development` mode and communicate the client and the server together please run :
```bash
docker-compose up --build
```

- This commands will execute the instructions specified in `docker-compose.yml`.

- The compose file will build the client and server images from their respective dockerfiles `./server/Dockerfile` and `./client/Dockerfile`.
When you develop and change files in both applications folders, the results will be instantly reflected in the container (and accessed via your host mapped port).

- The client app port (running in the container) is mapped on the `3000` port of your machine.

- The server app port (running in the container) is mapped on the `8080` port of your machine.

- Theses ports can be changed in the `.env` file.

### Production mode 
In order to package your application  `production` mode :
```bash
docker-compose -f docker-compose.prod.yml up --build
```

- This commands will execute the instructions specified in `docker-compose.prod.yml`.

 This commands will execute the instructions specified in `docker-compose.yml`.

- The compose file will build the client and server images from their respective dockerfiles `./server/Dockerfile` and `./client/Dockerfile`.

- The client application will be packaged in a `build` folder that will be  served statically from an express server (see `./client/server.js`). 

- The express server used to serve the application plays the role of a proxy as well in order to redirect tha `/api` calls to our NodeJS backend server. 

- The port of the webapp application (running in the container) is mapped on the `3000` port of your machine.

- This port can be changed in the `.env` file.
