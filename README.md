# Selekta

<br>

## Description

This is an app that selects, organizes and streams music from the Spoyify API.

## Must have User Stories

-  **Signup:** As an selekta I must sign up in the web app so that I can start managing my profile and curating my playlists
-  **Login:** As a selekta I must login to the web app so that I can start curating and managing my playlists in my profile
-  **Logout:** As a selekta I must logout from the web app so no one else can mess with my selections
-  **Search** As a selekta I must search for music by artist and title so I can prepare for my next tour
-  **Add playlist** As a selekta I must add playlist to my profile to keep my sound fresh
-  **Add tracks** As a selekta I must add tracks to my playlist for a musical onslaught 
-  **Add images to playlist** As a selekta I must add images to my playlist so I know what when to play what
-  **Delete tracks** As a selekta I must delete tracks from my playlist when I played out said track
-  **Delete/edit playlist** As a selekta I must delete/edit playlist from my profile when the tour is over and I need revise
-  **Delete/edit images from playlist** As a selekta I must be able to delete images to my playlist to stau current
-  **Transport controls** As a selekta I must have transport control of my tracks so I can play music, rewind, fast-foward and stop

## Backlog

## Should have User Stories
- **404:** As a selekta I should see a 404 page if I try to reach a page that does not exist
- **Images:** As a selekta I should see images thumbnails for playlist, tracks, and artist
- **Track Info:** As a selekta I should see track info like artist, title, and descriptions
- **Sharing:** As a selekta I should be able to share my playlist across network
- **About:**  As a selekta I should have an about page to give props to the devs 
- **Audio analysis features:** TBD 


## Could Have

- Track buying options
- Recommendations engine
- Check profile to see stats
- Random music from my backlog
- Chat Bot
- Addintioal API's

## Wont Have 
- User settings
- Language profile

<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions | Behavior                                                     |
| ------------------------- | --------------------           | ----------- | ------------------------------------------------------------ |
| `/`                       | SplashPage                     | public `<Route>`            | Home page                                                     |
| `/signup`                 | SignupPage                     | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage                      | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login  |
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session             |                                
| `/search/tracks`          | SearchForm, SearchResults      | user only  `<PrivateRoute>` | Search a track be selekted                                    |
| `/search/artist`          | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search an artist to be selekted                               |
| `/search/games`           | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search a game to be added                                     |
| `/add/:id`                | TrackInfo                      | user only `<PrivateRoute>`  | Add an element to the backlog                                 |
| `/profile`                | Profile,                       | user only  `<PrivateRoute>` | Displays profile information                                  |


## Components

- LoginPage

- SignupPage

- TrackList

- SearchForm

- SearchResults

- TrackInfo





  

 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()

- Backlog Service
  - backlog.filter(type)
  - backlog.detail(id)
  - backlog.add(id)
  - backlog.delete(id)
  - backlog.update(id)
  
- External API
  - API for music


<br>


# Server / Backend


## Models

User model



Track model



<br>


## API Endpoints (backend routes)

| HTTP Method | URL                           | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------------   | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile`               | Saved session                | 200            | 404          | Check if selekta is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session    |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the selekta                                            |
| POST        | `/search/add`                 | {playlist, title, artist, id}|                | 400          | Add new track and add new playlist to selekta profile                                               |
| GET         | `/track/:id`                  |                              | 201            | 400          | Show specific track/artist/playlist                                        |
| PUT         | `/track/:id`                  |                              | 200            | 400          | edit track/playlist                                                 |
| DELETE      | `/track/:id`                  |                              | 201            | 400          | delete element                                               |



<br>


## Links

### Trello/Kanban

[Link to trello board](https://trello.com/b/o25rNCIt/project-3-kanban) 

### [Link to whimsical](https://whimsical.com/project-3-selekta-app-9TsBcDXDtm1cGAFzJhkqBs)

### Git

The url to your repository and to your deployed project

[Client repository Link]()

[Server repository Link]()

[Deployed App Link]()

### Slides

The url to your presentation slides

[Slides Link]()