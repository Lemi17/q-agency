# Q Agency - React Task Assignment

![alt text](https://media.licdn.com/dms/image/D4D16AQG1RP8pQCdy3g/profile-displaybackgroundimage-shrink_350_1400/0/1675349293965?e=1707350400&v=beta&t=phxa-oD45tG3sL_CxY05BxJF4EhgKqck4TbPdhYOZC0)

## Table of Contents

1. [Introduction](#introduction)
2. [Assignment](#assignment)
   - [Overview](#overview)
   - [Features](#features)
   - [Conditions](#conditions)
   - [API](#api)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
   - [Running Tests](#running-tests)
4. [Have Questions?](#have-questions)
5. [Time Spent](#time-spent)

## 1. Introduction<a name="introduction"></a>

This project is a React application developed as part of a skill assessment assignment for Q's selection process. The goal is to create a web application that displays a list of posts and their associated comments using the JSONPlaceholder API.

## 2. Assignment<a name="assignment"></a>

### Overview<a name="overview"></a>

Create a React application that shows a list of Posts and associated post Comments fetched via the provided API. The code should be pushed to GitHub, and the build/run process should be documented in a README file. Additionally, provide an approximate time needed to complete the assignment.

### Features<a name="features"></a>

- Create two routes: '/posts' & 'post/{id}'.
- The '/posts' route should display a list of posts and their associated comments. Each post should have the user's name associated.
- Implement a search input to filter posts by user name.
- Clicking on a post should redirect to a new page.

MUST! EVERY component, once rendered, must log in the console 'Hello from <insert component name>'. The 'Hello from' message must be sent to a component via props and defined only once within the scope of the application. Example: `console.log('${props.message} ${componentName}')`. Variables can be named as deemed appropriate.

### Conditions<a name="conditions"></a>

- The UI design is at the discretion of the developer, but it should be minimally usable, visually appealing, and not break.
- Do not use any 3rd party state management solution.
- Avoid using 3rd party UI component libraries or CSS utility libraries (e.g., Bootstrap, Tailwind).
- Ensure components are reusable and resilient for easy integration into other applications.
- Utilize advanced concepts such as HOC, Render props, Compound components, etc.
- Choose any React bootstrapping tool (e.g., create-react-app or Vite).
- TypeScript is highly recommended; if not used, ensure type checking with PropTypes.
- Code structuring is flexible but aim for a real-world, organized approach.
- Include any tools (e.g., linters, code style checkers, UI component testers) that facilitate task completion.
- While unit tests are not mandatory, they are highly recommended.

### API<a name="api"></a>

Use the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for fetching data.

## 3. Getting Started<a name="getting-started"></a>

### Prerequisites<a name="prerequisites"></a>

- Node.js and npm installed on your machine.

### Installation<a name="installation"></a>

1. Clone the repository: `git clone https://github.com/Lemi17/q-agency`
2. Navigate to the project directory: `cd q-agency`
3. Install dependencies: `npm install`

### Running the App<a name="running-the-app"></a>

Run the development server: `npm run dev`

Before running the application, make sure to create a `.env.local` file based on the provided `.env.example` file. This `.env.local` file should contain all the necessary environment variables required for the proper functioning of the application.

### Running Tests<a name="running-tests"></a>

To run tests, use the following command: `npm run test`

This command will execute all the tests in the project and provide feedback on their status.

## 4. Have Questions?<a name="have-questions"></a>

If you have any questions or need clarification, feel free to reach out for assistance.

## 5. Time Spent<a name="time-spent"></a>

I spent approximately 7-8 hours working on this project. This includes time for understanding the requirements, coding, testing, documentation and deploy.

**Whatever the Q, We got the A**
