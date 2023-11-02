# Starter App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The app is intended to provide a boiler plate for a single page app.

## The Stack

- react framework
- react router
- ant design
- axios
- faunadb
- helmet (dynamic og)

## Getting Started

- clone the repo
  `git clone https://github.com/viji9898/app-boiler-plate.git <folder-name>`

### Connect to Github Repo

- create a new repo
- follow instructions to connect github repo to local repo

### lready connected to a repo?

- `rm -rf .git`
- `git init`
- `git remote add origin <remote-repo.git>`
- `git add.`
- `git commit -m"initial-commit-boiler-plate"`
- `git push --set-upstream origin main`

- install locally
  `npm install`

- run development server
  `ntl dev`

### Connect to Fauna

- add .env file
- add fauna key: `FAUNA_SECRET_KEY=fnAEjwFAKjACTEzZXOHLgAKKkfrX8rzpsD2LifVG` (sample db - create a new db + key if required)

### Connect to Netlify

- from netlfiy dashboard `Add new site` - `Import an exisiting project` - `GitHub`
- select repo
- `Deploy`
- Add environment variables from .env file
- re `Deploy`

👍🏾 - well done!

Runs the app in the development mode.\
Open [http://localhost:8888](http://localhost:8888) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
