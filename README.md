# FitHub <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>


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

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **FitHub** MVP is to ensure that the studio or gym owner is able build out their weekly schedule and update as needed. User authentication ensures that only the owner can make adjustments to their studio and not others._

<br>

### Goals

- _User create account_
- _User authentication and sign out_
- _Create and Update Studio Profile_
- _CRUD access and functionality to class schedule_
- _Non-Users can view studio profiles and class schedules_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React Bootstrap  | _Made for cards and links._                |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

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

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[FitHub Component Tree](https://whimsical.com/fitness-app-LtVxXsZ255ZwMWyN3RHZcM)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     X hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1XPkC2ooG3LgHRNegw8WzGaFXVdVNWkfY/view?usp=sharing)
<br>

***

## Post-MVP

- _Include second table user account for clients_
- _Clients' booked classes and Joined studios get added to their profile_
- _Track Attendance Rate with visual graph_
- - _Include Employee table for admin to assign instructor to classes_
- _UX Design shows non-users when updates to profiles and class been made through styling and text_

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
