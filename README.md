# Lecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##khj
2017.10.04 03:30
Resolver
  1. create todo.resolve.ts
      override resolve()
  2. do register TodoResolver at the app.module.ts file (same as service)
  3. define TodoResolver at the route.ts file
  4. get todo using resolver at the detail.component.ts file
     like this: this.todo = this._activatedRoute.snapshot.data['resolver-person'];
2017.10.05 01:10
ex:\\ url = 'localhost:4200:/api/todo-list.json' 
    get data from virtual server with Observable datatype
  1. api create directory and json file
  2. do register "asset": ["app"] at the angular-cli.json
  3. create http method at the todoService.ts file
      * return datatype is Observable, using .map() operator to convert data from Observable to json
  4. import HttpModule at the app.moudle.ts file
  5. display data at in the component.ts file
    *there is 2 kinds of getting data
      @ using common variable
      @ using Observable variable
