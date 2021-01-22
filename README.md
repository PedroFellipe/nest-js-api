Task Manager Project
=======================

Technologies Used:
-----------------------

 * Node v14.15.4
 * nestjs v^7.5.1
 * MySql v5.7

Project Installation and Execution
------------
Clone the project:

    git clone https://github.com/PedroFellipe/novo-projeto.git

After cloning the project, access the folder and run the following command to install the dependencies:

    npm install

Then, use docker-composer to run the project

    docker-compose up

# Api Doc

## Open Endpoints

Open endpoints require no Authentication.

* [Login]: `POST /auth/login/`


## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Profile
* [My Profile] : `GET /profile`

### Tasks
* [My Tasks] : `GET /task`
* [Create Task] : `POST /task`
* [Update Task] : `PUT /atask/{id}`
* [Cancel Task] : `DELETE /task/{id}`