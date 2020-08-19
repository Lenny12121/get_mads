## Description
This is a dashboard built for users to be able to track their CO2 and Plastic offsets. The front-end was built using React and the backend is built using Node (Express). The front-end was a adapted from [Vibe](https://github.com/NiceDash/Vibe "Vibe")


## Deployed Link
[Demo](https://rocky-basin-96559.herokuapp.com/home "Demo")

## Using the App
In order to use the app, download the full folder for the site to work. You will need a baseline understanding of Express, MongoDB/Mongoose/Atlas, React & auth0 to understand how it is put together and what changes can be made.

Install the dependencies by running `npm install` in both the root and the client folders. To start the application run `npm start` in the client folder to start the React front-end and `nodemon server.js` in the root to start the Express server. 

## Still Required
1. Signup flow needs to be improved in production app.

2. Chargebee is to be integrated for payment flow.

3. Dynamic badge rendering is missing and to be implemented using the HCTI API.

4. CO2 Offsetting & Plastic Offsetting pages can only be built once Chargebee is integrated.

5. Public ledger page still requires design and upload.


##Built With##
- [Node](https://nodejs.org/en/ "Node") - JavaScript Runtime Environment
- [NPM](https://www.npmjs.com/ "NPM") - Package Manager
- [Express](https://expressjs.com/en/starter/installing.html "Express") - Web Framework
- [React](https://reactjs.org/ "React") - Frontend Framework, [Vibe](https://github.com/NiceDash/Vibe "Vibe")
- [auth0](https://auth0.com/ "auth0") - Authorization
- [MongoDB](https://www.mongodb.com/ "MongoDB") - Database
- [Mongoose](https://mongoosejs.com/ "Mongoose") - Database ORM
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas "MongoDB Atlas") - Cloud Database 
- [Reactstrap](https://reactstrap.github.io/ "Reactstrap") - Front-end Toolkit
- [SASS](https://sass-lang.com/ "SASS") - CSS Framework
- [Cloudinary](https://cloudinary.com/ "Cloudinary") - Image Management
- [Reactfeather](https://feathericons.com/ "Reactfeather") - Icons
- [Concurrently](https://www.npmjs.com/package/concurrently "Concurrently") - Concurrent Actions
- [React Pretty Numbers](https://www.npmjs.com/package/react-pretty-numbers "React Pretty Numbers") - Number Management
- [React Copy](https://www.npmjs.com/package/react-copy-to-clipboard "React Copy") - Copy to Clipboard
- [VS Code](https://code.visualstudio.com/ "VS Code") - Code Editor
- Data from our own calculations