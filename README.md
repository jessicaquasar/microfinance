# Microfinance

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## API
Before all set the correct URL in the main.ts file for prod environment.

`POST`: /simulator

`Body`: 
```
{
    "birthdate":"16/03/1982",
    "gender":"male",
    "retired":65,
    "year":10,
    "money":1212.21
}
```