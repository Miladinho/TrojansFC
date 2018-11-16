# Southern California Trojans Futebol Club
The Southern California Trojans Futbol Club 501(c)3 experimental website.

### Prerequisites

* KeystoneJS requires MongoDB v2.4 or greater
* [Cloudinary](https://cloudinary.com/) account
* Nodejs
* Node Package Manager (NPM) or Yarn package manager
* Docker and docker-compose (optional)

Create a file called `.env` and put the following environment variables in that file:

`CLOUDINARY_URL=<claudinary url string>`  
`COOKIE_SECRET= <random string value>`  
`ENV=<production or staging etc>`  
`MONGO_URI=< set to 'mongodb://mongo:27017' for docker-compose builds>`  
`PORT=<default is 3000 when this variable is not provided>`  

### How To Run
Site will be available at `http://localhost:3000` by default, or at the port specified from 'PORT' in the .env file.

#### Docker
* Run `docker-compose up --build` or
* Run `sudo docker-compose up --build` 
* To run in the backgroudn add the `-d` flag: `docker-compose up --build -d`

#### Manual
* Remove `MONGO_URI` from .env file, or from keystone.js init options
* Install dependencies `npm install`
* Run mongo daemon `mongod`
* Run `node keystone` or `node keystone.js`
