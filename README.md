# ConsumeAPI

Training attended via YouTube channel to discover how to handling requests from API, using Http protocols to manage data in different ways, including [Observable](https://angular.io/guide/observables) design pattern as subject to pass the data and being [subscribed](https://rxjs.dev/guide/subscription) to deliver the data either to be modified or for publishing purposes.

In order to be an adaptable App, we have used Bootstrap Framework implementing responsiveness in all screen sizes. And finally, [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) to notify end user that actions in UI has been doen accordingly. 

## Resources used... 

[Youtube Playlist of how to consume API with Angular](https://www.youtube.com/watch?v=ooAmdvpAE-o&list=PLIbWwxXce3VqQxabv3aT0nHnhHQH6F-qG)

[Docs Patients API](https://api.solodata.es/)

## How to add Bootstrap...
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
* Add command `ng serve -o` to see the login in the browser

## Interacting with API...

### Request...
`GET - https://api.solodata.es/pacientes?page=$pageNumber`
### Response...
```
{
    Correo: "sam@gmail.com"
    DNI: "75932"
    Nombre: "Samantha Medina Castill"
    PacienteId: "172"
    Telefono: "55583021", …
}
```
### Request...
`GET - https://api.solodata.es/pacientes?id=$idPatient`
### Response...
```
{
    Correo: "sam@gmail.com"
    DNI: "75932"
    Nombre: "Samantha Medina Castill"
    PacienteId: "172"
    Telefono: "55583021"
}
```
### Request...
`PUT - https://api.solodata.es/pacientes`
### Response...
```
{
    pacienteId: "172"
}
```
### Request...
`POST - https://api.solodata.es/pacientes`
### Response...
```
{
    pacienteId: "173"
}
```
### Request...
`DELETE - https://api.solodata.es/pacientes`
### Response...
```
{
    pacienteId: "173"
}
```
## App Structure...
<div align="center">
<img width="250" alt="app" src="https://user-images.githubusercontent.com/43299285/141678365-58c37055-bf48-4ebb-acfe-be942ef51a03.PNG">
</div>

## Installing...
* [NodeJS ^12.14.1](https://nodejs.org/en/)
* NPM (Node Package Manager) If download Node JS from official site is downloaded simultaneously.
* [Angular CLI](https://github.com/angular/angular-cli) ^12.2.9.

### Commands to check installation is accordingly to proceed with building new project
#### Add in Terminal or powershell
* node -v or node --version
* npm -v or npm --version
* ng --version or ng -v

## Dependencies...
* [Bootstrap Framework](https://getbootstrap.com/docs/3.4/getting-started/)
* [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)
* [rxjs](https://rxjs.dev/)
* [@angular/router](https://angular.io/api/router)
* [@angular/common/http](https://angular.io/guide/http)
## Author
Jose MMorales

