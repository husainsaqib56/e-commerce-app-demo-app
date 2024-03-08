# EComm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




# Angular Application Dockerization

This repository contains an Angular application that has been dockerized for easy deployment.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

## Getting Started

To build and run the Angular application using Docker, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/husainsaqib56/e-commerce-app-demo-app.git
   ```

2. Navigate to the root directory of the cloned repository:
   ```bash
   cd e-commerce-app-demo-app
   ```

3. Build the Docker image:
   ```bash
   docker build -t angular-app .
   ```

4. Run the Docker container:
   ```bash
   docker run -p 4200:4200 angular-app
   ```

5. Open your web browser and navigate to [http://localhost:4200](http://localhost:4200) to view the Angular application.

## Additional Information

- The Dockerfile provided in this repository uses the Node.js base image, installs Angular CLI, installs project dependencies, copies the application code, and exposes port 4200 to run the Angular application.
- The application is served using the Angular CLI's built-in development server (`ng serve`) within the Docker container.
- For production deployment, you may need to adjust the Dockerfile and use a different setup.

