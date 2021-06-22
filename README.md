# FitHub <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**FitHub** is a full-stack application where studio and gym owners can add their business to a collective online platform where clients can check out their classes. Owners are able to create their profile, add their classes, and make updates or delete as needed to their weekly schedule._


<br>

## MVP

_The **FitHub** MVP is to ensure that the studio or gym owner is able build out their weekly schedule and update as needed. User authentication ensures that only the owner can make adjustments to their studio and not others._

<br>

### Goals

- _User create account_
- _User authentication and sign out_
- _Create and Update Studio Profile_
- _Full CRUD access to class schedule_
- _Non-Users can view studio profiles and class schedules_

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React Bootstrap  | _Made for cards and links._                |
|                  |                                            |
|                  |                                            |

<br>

### Client (Front End)

#### Wireframes


![Desktop Landing](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree


![Component Tree](https://i.imgur.com/Jhg8Kil.png)
[FitHub Component Tree](https://whimsical.com/fitness-app-LtVxXsZ255ZwMWyN3RHZcM)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Layout.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Landing
          |__ Landing.jsx 
          |__ Landing.css 
      |__ Login
          |__ Login.jsx 
          |__ Login.css 
      |__ Register
          |__ Register.jsx 
          |__ Register.css 
      |__ Studios
          |__ Studios.jsx 
          |__ Studios.css 
      |__ StudioCreateEdit
          |__ StudioDetail.jsx 
          |__ StudioDetail.css 
      |__ StudioDetail
          |__ StudioDetail.jsx 
          |__ StudioDetail.css 
      |__ ClassCreate
          |__ ClassCreate.jsx 
          |__ ClassCreate.css 
      |__ ClassEdit
          |__ ClassEdit.jsx 
          |__ ClassEdit.css 
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ studios.js
      |__ classes.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend Structure   |    H     |     2 hrs      |     X hrs     |    3 hrs    |
| Backend Pseudocode  |    H     |     2 hrs      |     X hrs     |     TBD     |
| Authentication      |    H     |     2 hrs      |     X hrs     |     TBD     |
| Models Association  |    H     |     1 hrs      |     X hrs     |     TBD     |
| Routes Association  |    H     |     1 hrs      |     X hrs     |     TBD     |
| Controllers         |    H     |     3 hrs      |     X hrs     |     TBD     |
| Seed File           |    H     |     1 hrs      |     X hrs     |     TBD     |
| Gemfile / Cors Setup|    H     |     1 hrs      |     X hrs     |     TBD     |
| React Structure     |    H     |     3 hrs      |     X hrs     |     TBD     |
| Frontend Pseudocode |    H     |     2 hrs      |     X hrs     |     TBD     |
| Services Files      |    H     |     2 hrs      |     X hrs     |     TBD     |
| Components JSX      |    H     |     2 hrs      |     X hrs     |     TBD     |
| App JSX             |    H     |     2 hrs      |     X hrs     |     TBD     |
| MainContainer       |    H     |     2 hrs      |     X hrs     |     TBD     |
| Login and Register  |    H     |     2 hrs      |     X hrs     |     TBD     |
| StudioCreateEdit    |    H     |     3 hrs      |     X hrs     |     TBD     |
| Studios JSX         |    H     |     2 hrs      |     X hrs     |     TBD     |
| StudioDetail        |    H     |     2 hrs      |     X hrs     |     TBD     |
| ClassCreate         |    H     |     2 hrs      |     X hrs     |     TBD     |
| ClassEdit           |    H     |     3 hrs      |     X hrs     |     TBD     |
| Landing             |    L     |     2 hrs      |     X hrs     |     TBD     |
| Components CSS      |    H     |     2 hrs      |     X hrs     |     TBD     |
| Login/Register CSS  |    H     |     2 hrs      |     X hrs     |     TBD     |
| Studio Screen CSS   |    H     |     3 hrs      |     X hrs     |     TBD     |
| Class Screen CSS    |    H     |     3 hrs      |     X hrs     |     TBD     |
| Deployment          |    L     |     2 hrs      |     X hrs     |     TBD     |
| Testing             |    L     |     2 hrs      |     X hrs     |     TBD     |
| Landing CSS         |    L     |     2 hrs      |     X hrs     |     TBD     |
| PMVP Filter / Search|    L     |     2 hrs      |     X hrs     |     TBD     |
| PMVP Backend        |    L     |     3 hrs      |     X hrs     |     TBD     |
| PMVP Frontend       |    L     |     3 hrs      |     X hrs     |     TBD     |
| TOTAL               |          |     66 hrs     |     X hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.
![ERD Snapshot](https://i.imgur.com/10JYikO.png)
[ERD Sample](https://drive.google.com/file/d/1XPkC2ooG3LgHRNegw8WzGaFXVdVNWkfY/view?usp=sharing)
<br>

***

## Post-MVP

- _Filter and Search_
- _Include second table user account for clients_
- _Clients' booked classes and Joined studios get added to their profile_
- _UX Design shows non-users when updates to profiles and class been made through styling and text_
- _Track Attendance Rate with visual graph_
- _Include Employee table for admin to assign instructor to classes_


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
