# ConsumeAPI

[Youtube Playlist of how to consume API with Angular](https://www.youtube.com/watch?v=ooAmdvpAE-o&list=PLIbWwxXce3VqQxabv3aT0nHnhHQH6F-qG)

## How to add Bootstrap in the project
* Type in terminal command `npm install jquery bootstrap --save`
* Go to node_modules/bootstrap/dist/js and node_modules/bootstrap/dist/css
* Right Click in bootstrap.min.js and bootstrap.min.css to Copy Relative Path
* Copy Path in Angular.json section scripts and styles
* Go to node_modules/jquery/dist/js
* Right Click in jquery.min.js to Copy Relative Path
* Copy Path in Angular.json section scripts (before bootstrap.min.js path)
* See images below for final position of Relatives Paths

![Screenshot 2021-10-31 at 10 31 26](https://user-images.githubusercontent.com/43299285/139576282-ba521717-3d75-4cfd-80ba-a16a44f30c1b.png)

* Then go to [BootSnipp](https://bootsnipp.com/) to use a Login Bootstrap Template in the project 
* Choose the right template for your login component
* Open HTML and add copy all code in login.component.html
* Open CSS and add copy all code in login.component.css
* Add command `ng serve -o`to see the login in the browser


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
