# CYF Progress Tracker
![Logo](./client/src/assets/images/logo.png)

## Table of Contents
[`Introduction`](#Introduction)
[`Features`](#Features)
[`Getting Started`](#Getting-Started)
[`Development Keys`](#Development-Keys)
[`Tech Stack`](#Tech-Stack)
[`Dependencies`](#Dependencies)
[`Contributors`](#Contributors)


## Introduction
The CYF Progress Tracker is a web application designed to help trainees at CodeYourFuture (CYF) overcome the challenges of tracking their progress toward key milestones throughout their course. Recognizing the difficulty trainees face in monitoring their advancement, this application provides a centralized platform where they can easily track their progress against the milestones set by the Course Director.

## Features
### Trainee Progress Tracker
The application integrates with external platforms such as Codewars and GitHub to fetch data related to the trainees' activities. By displaying this data within the app, trainees can view their progress against milestones without the need for manual updates. This integration ensures that progress information is consistently updated and accessible, providing a clear overview of trainees' achievements and activities.

Home page
<img src="./client/src/assets/images/homepage.png" alt="Home" width="900" height="300">

Home page displays the enter field for trainee.

Trainee Dashboard
<img src="./client/src/assets/images/dashtr.png" alt="Trainee Dashboard" width="600" height="300">
 <img src="./client/src/assets/images/mob%20dashtr.png" alt="Trainee Dashboard Mob" width="100" height="450">

The trainee dashboard provides trainees with essential information, including their cohort, the names of their previous and upcoming milestones, and the deadlines for each milestone. For each milestone, it displays the target number of pull requests (PRs) and the number of PRs achieved, the target Codewars rank and the achieved rank, and for both PRs and Codewars, a conclusion on whether the trainee is on track with the milestone or falling behind.

Using the collected data, the app assesses trainees' progress toward predefined milestones. This feature provides both trainees and the Course Director with a clear overview of where each trainee stands in their learning journey.

The application empowers trainees to monitor their own progress, identify areas where they need to improve, and work more effectively towards achieving their goals.

### Manager Dashboard
 <img src="./client/src/assets/images/admindash1.png" alt="Trainee Dashboard" width="900" height="300">
<img src="./client/src/assets/images/admindash2.png" alt="Trainee Dashboard" width="200" height="300">
 <img src="./client/src/assets/images/admindash3.png" alt="Trainee Dashboard" width="200" height="300">
  <img src="./client/src/assets/images/addtrainee.png" alt="Trainee Dashboard" width="300" height="300">
  
This app includes an admin dashboard for managers, allowing them to view cohorts, add new cohorts, edit existing cohorts, set milestones, and add trainees.

## Getting Started

To use the app, follow these steps:

Clone the repository.
Install the dependencies by running 
```npm install```

Start the development server by running
```npm run dev```


## Tech Stack
- [x] Full stack ES8+ with [Babel]
- [x] [Node] LTS support (verified working on 16.x, 18.x and 20.x LTS releases)
- [x] [Express] server
- [x] Logging with [Winston] and [Morgan]
- [x] [React] client with [Webpack]
- [x] Client-side routing with [React Router]
- [x] Linting with [ESLint] and [Prettier]
- [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
- [x] Production build (single deployment artifact, React loaded via CDN)
- [x] [Render] deployment
- [x] [Cloud Foundry] deployment
- [x] [Docker] build
- [x] [Postgres] database with [node-postgres]

## Dependencies
   "@babel/cli": "^7.21.5",    
   "@babel/core": "^7.21.5",    
 "@babel/eslint-parser": "^7.21.3",    
  "@babel/node": "^7.20.7",    
 "@babel/plugin-proposal-class-properties": "^7.18.6",    
  "@babel/plugin-transform-runtime": "^7.21.4",    
  "@babel/preset-env": "^7.21.5",    
   "@babel/preset-react": "^7.18.6",    
		"@codeyourfuture/eslint-config-standard": "^3.0.3",    
		"@testing-library/dom": "^10.4.0",    
		"@testing-library/jest-dom": "^6.4.8",    
		"@testing-library/react": "^16.0.0",    
		"@textbook/build-info": "^0.5.1",    
		"babel-loader": "^9.1.2",    
		"concurrently": "^8.0.1",    
		"cross-env": "^7.0.3",    
		"css-loader": "^6.7.3",    
		"del-cli": "^5.0.0",    
		"eslint": "^8.39.0",    
		"eslint-plugin-jsx-a11y": "^6.7.1",    
		"eslint-plugin-react": "^7.32.2",    
		"eslint-plugin-react-hooks": "^4.6.0",    
		"file-loader": "^6.2.0",    
		"history": "^5.3.0",    
		"html-webpack-plugin": "^5.5.1",    
		"html-webpack-tags-plugin": "^3.0.2",    
		"jest-environment-jsdom": "^29.5.0",    
		"nodemon": "^2.0.22",    
		"prettier": "^2.8.8",    
		"prop-types": "^15.8.1",    
		"react": "^18.2.0",    
		"react-dom": "^18.2.0",    
		"react-router-dom": "^6.11.0",    
		"react-test-renderer": "^18.3.1",    
		"style-loader": "^3.3.2",    
		"wait-on": "^7.0.1",    
		"webpack": "^5.81.0",    
		"webpack-cli": "^5.0.2",    
		"webpack-dev-server": "^4.13.3",    
		"webpack-merge": "^5.8.0"  
    
  ## Contributors
1. Olena Reukova - [`Link`](https://github.com/OlenaReukova)
2. Boshra Mahmoudi - [`Link`](https://github.com/BoshraM)
3. Zober Rigi - [`Link`](https://github.com/Zobeir-Rigi)
4. Mohammad Sefidgar- [`Link`](https://github.com/MohammadSefidgar)
      