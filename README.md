# Resume Ninja

### Developer's Guide

#### Getting Started:

1. clone the repo
>`git clone git@github.ibm.com:ibmswadoption/ResumeNinja.git`
1. enter the `ResumeNinja` directory
>`cd ResumeNinja`
1. install the dependencies
>`npm install`
1. obtain the vcap file and place it in the ResumeNinja directory
>Contact a team member or look in the Box folder for the most current file.
1. start the app
>`npm run dev`
1. open a web browser and go to:
>`http://localhost:9999`

#### Overview
This project uses Webpack to build our front end and backend.  This allows you as a developer to take advantage of the latest in coding improvements that you may have otherwise not been able to utilize.  e.g. ES6 imports can be used.

This project utilizes the following technologies:
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Less](http://lesscss.org/)
- [React](https://reactjs.org/)
- [React Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Semantic UI](https://react.semantic-ui.com/introduction)

#### Development
When you start developing, you will want to launch the project in a terminal window with the command `npm run dev` to start your development server.  This will start your back end server and will watch for any changes you make.  It will immediately rebuild upon any changes build saved.  It is not a hot reload, so you will need to reload your browser.  (Hot reload will be added soon.)

As you develop, you will likely at some point see red error messages in your terminal window pointing to a line in your code that seems perfectly correct to you.  This is likely a message from ESLint notifying you that you did not follow the project's coding standards.  If the error message is not clear enough for you to determine how to resolve it, the should be a short descriptor at the end of the line which you can copy and search for at https://eslint.org/.  This is in place to help us as a team code consistently and to apply best practices.  Remember, you are writing code for the next developer that see it, so it should be clear and understandable.  (and commented if possible)
