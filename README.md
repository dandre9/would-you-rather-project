# WouldYouRather Project

This is the project from React Redux section of Udacity's React course. This is a Would You Rather game where users can create and answer poll's question, check leaderboard status, logout and login.

## Launch instruction

To launch the app:

- open terminal at project path
- install all dependencies with `npm install`
- start server with `npm start`

## Project structure

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions # actions folder from redux structure
    │   ├── authedUser.js # Deal with all logged user actions
    │   ├── questions.js # Deal with all questions related user actions
    │   ├── shared.js # Deal with all other actions
    │   └── users.js # Deal with all users related actions
    ├── components # components folder
    │   ├── App.js # Main component
    │   ├── Home.js # Home page component -> /
    │   ├── HomeQuestionCard.js # Card of poll from Home page component
    │   ├── LeaderBoard.js # Leaderboard page component -> /leaderboard
    │   ├── Login.js # Login page component -> /login
    │   ├── NavBar.js # Top nav bar component
    │   ├── NewQuestion.js # Page component to create questions -> /add
    │   ├── NotFound.js # Component that deals with error 404
    │   ├── Poll.js # Poll page component -> /question/:id
    │   ├── PollAnswered.js # Card component with answered question
    │   └── PollUnanswered.js # Card component with unanswered question
    ├── middleware # middleware folder from redux structure
    │   ├── index.js
    │   └── logger.js
    ├── reducers # reducers folder from redux structure
    │   ├── authedUser.js # Deal with all logged user updates to the state
    │   ├── index.js # Main reducer file
    │   ├── question.js # Deal with all questions updates to the state
    │   └── users.js # Deal with all users updates to the state
    ├── utils # utils folder
    │   ├── _DATA.js # Fake data for the project
    │   ├── api.js # Fake api for the project
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
