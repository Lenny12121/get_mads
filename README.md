##Description##
This is a dashboard built for users to be able to track their CO2 and Plastic offsets. The front-end was built using React and the backend is built using Node (Express). The front-end was a adapted from [Vibe](https://github.com/NiceDash/Vibe "Vibe")


##Deployed Link##
[Demo](https://rocky-basin-96559.herokuapp.com/home "Demo")

##Using the App##
In order to use the app, download the full folder for the site to work. You will need a baseline understanding of Express, MongoDB/Mongoose/Atlas, React & auth0 to understand how it is put together and what changes can be made.

Install the dependencies by running `npm install` in both the root and the client folders. To the application run `npm start`, as concurrently is used this will start both the server and the React front-end. 

##Still Required##
1. Signup flow needs to be improved in production app.

2. Chargebee is to be integrated for payment flow.

3. Dynamic badge rendering is missing and to be implemented using the HCTI API.

4. CO2 Offsetting & Plastic Offsetting pages can only be built once Chargebee is integrated.

5. Public ledger page still requires design and upload.


##Built With##
1. [Node](https://nodejs.org/en/ "Node") - JavaScript Runtime Environment
2. [NPM](https://www.npmjs.com/ "NPM") - Package Manager
3. [Express](https://expressjs.com/en/starter/installing.html "Express") - Web Framework
4. [React](https://reactjs.org/ "React") - Frontend Framework, [Vibe](https://github.com/NiceDash/Vibe "Vibe")
5. [auth0](https://auth0.com/ "auth0") - Authorization
6. [MongoDB](https://www.mongodb.com/ "MongoDB") - Database
7. [Mongoose](https://mongoosejs.com/ "Mongoose") - Database ORM
8. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas "MongoDB Atlas") - Cloud Database 
9. [Reactstrap](https://reactstrap.github.io/ "Reactstrap") - Front-end Toolkit
10. [SASS](https://sass-lang.com/ "SASS") - CSS Framework
11. [Cloudinary](https://cloudinary.com/ "Cloudinary") - Image Management
12. [Reactfeather](https://feathericons.com/ "Reactfeather") - Icons
13. [Concurrently](https://www.npmjs.com/package/concurrently "Concurrently") - Concurrent Actions
14. [React Pretty Numbers](https://www.npmjs.com/package/react-pretty-numbers "React Pretty Numbers") - Number Management
15. [React Copy](https://www.npmjs.com/package/react-copy-to-clipboard "React Copy") - Copy to Clipboard
16. [VS Code](https://code.visualstudio.com/ "VS Code") - Code Editor
17. Data from our own calculations