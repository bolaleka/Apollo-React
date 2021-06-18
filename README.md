# React-App
The aim of this project is to create Single Page React (SPA) using Apollo server graphql and apollo client with react.

## Requirements tools
* Node version instal
* Apollo server/client dependencies
* GraphQL
* React 
* Typescript

Note: There are some dependencies you will need to install individually when require but for now befor starting your
      App, Run `npm  instal` to include node-module in client folder and as well in server folder 

## Run `npm start` in the root folder
- The package.jso in the root directory will compile both client and server folder
- Wait for the browswr to launch a new tab or open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
## Features
### Server Side:
* Fetch API endpoint from (https://swapi.dev/api/people/) and display Person's details (name, height,mass, gender, homeworld).
* The Query should cater for pagination 
* The respective People should be returned when a page number is selected.

### Client Side:
* Develop a React Single Page App SPA
* SPA should consume the above GraphQL API
* SPA should have a Home page listing the first page of People as queried from the above GraphQL API.
* There should be pagination implemented allowing for a particular People page to be Queried when a page number is selected.
* When a Person is clicked on, a Detail page outlining the Person's details should be displayed, in a thoughtful (styled) manner.
* The User should be able to navigate back to the Home page to the previouslyactive People page from the Detail page.

