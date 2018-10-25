# Southern California Trojans Futebol Club
This is the repository for the experimental Southern California Trojans Futbol Club 501(c)3

### Prerequisites

* KeystoneJS requires MongoDB v2.4 or greater
* [Cloudinary](https://cloudinary.com/) account
* Nodejs
* Node Package Manager (NPM) or Yarn package manager

## Build

run `npm install`
Create a file called `.env` and put the following environment variables in that file:  
`
CLOUDINARY_URL=<claudinary url string>
COOKIE_SECRET= <random string value>
ENV=<production or staging etc>
PORT=<default is 3000 when this variable is not provided>
`
## How To Run

To run the project first make sure the Mongo daemon is running as a service, then the keystone app:
`sudo service mongod start` on Ubuntu
 `node keystone`
 Site will then be available at `http://localhost:3000`.