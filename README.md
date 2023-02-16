# My Sapia.ai Menu
A simple web application with a header menu and a home and login page.

Video demo:
[download video here](https://user-images.githubusercontent.com/81260130/219477398-0dc27f88-9fff-4640-9ecf-f3dbe35edee8.mov)

Live demo:
[https://my-sapiaai-menu.netlify.app/](https://my-sapiaai-menu.netlify.app/)

## Installation
1. Clone the project to your local machine, [this link](https://github.com/jeffrey-arias/my-sapiaai-menu.git), or by running:\
```gh repo clone jeffrey-arias/my-sapiaai-menu```

2. Run ```npm i``` to download and install all dependencies.

## Running 
To run the application, run ```npm start``` in your chosen terminal and open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing
To run all the tests, run ```npm test``` in your chosen terminal.\
To run a specific test within the ```___tests---``` library, run ```npm test <NameOfTest>```

## Brief outline of the technology stack

1. React / Typescript - core tech
2. Styled Components - CSS-in-JS library
3. React-Router-DOM - router library
4. Jest - Test library 

Other considerations:
1. Enzyme / react-test-renderer - briefly considered, but ultimately deemed unnecessary.
2. Material UI - great component library, but would otherwise not highlight my capabilities to create reusable components on my own.
3. React-Bootstrap - same with Material UI.
4. Any other state management libray (like Redux or MobX) and form management library (like react-hook-form or Formik) were all overkill for a simple project and would otherwise not highlight my skills to manage states and the forms properly.

## Folder structure

```src\``` - The root folder of the main source code.\
```src\pages``` - The location of all the page classes.\
```src\components``` - The location of all the reusable components.\
```src\utils``` - The location of all helper and utility classes.\
```src\styles``` - The location of all styling classes (using Styled Components library).\
```src\___tests___``` - The location of all the unit tests in the same folder structure as the main source code.

## Git branches
```main``` - The main stable branch that is deployed to the [hosting server](https://my-sapiaai-menu.netlify.app/).\
```dev``` - The development branch where all changes are initially committed to.

## Future considerations
1. Reusability of the ```MyMenu``` component by passing a JSON format props and determining the number and type of ```MyButton``` components to display.
2. Responsiveness of the web app when viewed in other gadgets (maybe consider Bootstrap here?).
3. Send a GET/POST to an actual API.
4. Create a dummy "Account Summary" page for a successful login.
