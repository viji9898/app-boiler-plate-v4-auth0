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

### Already connected to a repo?

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

### Connect to Auth0

- create a new tenant
- create a new application - Single Page Web App

From Settings 
- add Domain + Client ID + Callback URL to .env file
```
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_CALLBACK_URL=
```

Complete Application URIs - add localhost + production domain 
- Allowed Callback URLs */callback 
- Allowed Logout URLs
- Allowed Web Orgin

Checkpoint: Deploy site - test login. 

### Create Actions in Auth0

- Actions - Library - Custom
- Login

- Dependencies include faunadb
- add FAUNA_SECRET_KEY= 

## create_auth0_profile_fauna

```
const faunadb = require("faunadb");
const q = faunadb.query;

exports.onExecutePostUserRegistration = async (event) => {
    const client = new faunadb.Client({
    secret: event.secrets.FAUNA_SECRET_KEY
  });



  return client
    .query(q.Create(q.Collection("Users"), { data: { userId: event.user.user_id, userEmail: event.user.email, profileCreated:false, created:q.Now(), location:event.request, auth0UserData: event.user,}} ))
};
```

### Connect to new Fauna Database

- create new DB
- Create Collections: Users + Profiles
- Create Indexes:
profile_by_auth0_user_id - serach by userId
user_by_auth0_user_id - search by userId


  


👍🏾 - well done!

Runs the app in the development mode.\
Open [http://localhost:8888](http://localhost:8888) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
