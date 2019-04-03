# Visit Counter

Docker practice application that counts page visits with Express, NodeJS, and Redis

# Commands

The standard docker CLI does not allow developers to easily manage multiple containers and allow them to connect to each other. Docker Compose enables us to easily create a network of containers which will automatically allow network connections to each other.

**docker-compose up**

Pulls, builds and runs the listed services from `docker-compose.yml`.

**docker-compose up --build**

Similar to `docker-compose up` however this command rebuilds the containers if changes were made.

**docker-compose up -d**

Similar to `docker-composer up` however this command runs in the background allowing our terminal to remain free for executing other commands.

**docker-compose down**

Shuts down all running containers within the current project directory.

## Restart Policy

By default, docker-compose does not automatically restart containers if for any reason they crash. For example, forcing our node-app to exit with status of 0 completely stops the node-app container from running.

**Restart policies can be added to individual containers.**
