# URL Shortner

## Running the application

This applitcation only runs inside a docker container so you must have Docker installed on your machine, can be found [here](https://www.docker.com/products/docker-desktop)

* Running this project is as simple as opening it up and in your terminal enter `docker-compose up`
* Once up and running go to [http://localhost:4200/](http://localhost:4200/)
  * it should look like this:

    ![Application](https://github.com/babco1kr/custom-url/blob/master/images/4200F.PNG?raw=true)

The server is running on `http://localhost:3000/`

Get URL accepts both a full Tiny URL, `http://localhost:3000/gRcg6_Z0`, and just the string identifier, `gRcg6_Z0`

### Technology Used
* Docker
* Ember Js
* Node Js
* Mysql
* Sequelize
* Express

The original file for the server repo while being developed before merged into this application to be all inclusive can be found [here](https://github.com/babco1kr/url-server)
