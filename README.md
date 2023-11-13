# Travel Social

![responsive views](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699824152/amiresponsivetravelsocial_krranh.png)

## Table of Contents

- [Travel Social](#travel-social)
  - [Introduction](#introduction)
  - [Summary of Project Epics and Sprints](#summary-of-project-epics-and-sprints)
    - [Epics:](#epics-)
    - [Sprint Summaries:](#sprint-summaries-)
  - [Features](#features)
    - [Reusable React Components](#reusable-react-components)
    - [Future Features/Developments](#future-features-developments)
  - [UI Design](#ui-design)
    - [Colour Scheme](#colour-scheme)
    - [Logo](#logo)
    - [Typography](#typography)
    - [Imagery](#imagery)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Software and Web Applications](#frameworks--software-and-web-applications)
  - [Forking the Project Repository](#forking-the-project-repository)
  - [Cloning the Project Repository](#cloning-the-project-repository)
    - [Remote Deployment](#remote-deployment)
  - [Acknowledgements](#acknowledgements)

[Table of contents generated with markdown-toc](http://ecotrust-canada.github.io/markdown-toc/)

## Introduction

Travel Social is a vibrant web application designed for travel enthusiasts to share and explore engaging travel content. Users can create posts, share travel stories, upload images, and interact with others through likes, comments, and follows. The application caters to a wide range of travel interests including adventure, luxury, cultural experiences, and more.

The platform renders differently depending on authentication states of the users. Unregistered users can view other users profiles, and view, search and filter registered users posts. Users can also sign up to join the platform, which provides them with additional functionality, such as the ability to create their own profile, and create posts. Registered users can also comment on posts and like posts, to support and build a rapport with other travelers. They can also follow or unfollow other users to add them to a personal feed.

View the live project [here](https://travel-social-frontend-addfa6211efa.herokuapp.com/)

## Summary of Project Epics and Sprints

The development of this project adhered to agile methodologies, focusing on incremental progress through small, manageable feature releases. The project was divided into four distinct sprints. To effectively manage these sprints, a Kanban board was set up using GitHub Projects. This tool played a crucial role in visualizing the workflow, controlling the number of tasks in progress at any given time, and enhancing overall efficiency and workflow dynamics.

### Epics:

1. Front-End Development
2. Back-End Development
3. Integration of Front-End with Back-End
4. Documentation, Testing & Deployment

### Sprint Summaries:

- Sprint 1 (Week 1) - Setting the Foundation:

  - Front-End: Initialized React project and basic component setup.
  - Back-End: Django project setup, database modeling (posts, likes, comments, followers), CRUD for posts/likes/comments, and user auth functionality.
  - Documentation: Began README documentation for design and database.

- Sprint 2 (Week 2) - Core Functionalities:

  - Front-End: Designed responsive layout, navigation, browsing/search features, and implemented post interactions (likes, comments).

- Sprint 3 (Week 3) - Advanced Features & Integration:

  - Front-End: Added edit/delete for posts, follow functionality, and started backend integration for data retrieval.
  - Back-End: Developed follower functionality and access controls.
  - Integration: Completed front-end CRUD operations integrated with the backend, ensuring feedback from API.

- Sprint 4 (Week 4) - Polishing, Testing & Deployment:

  - Front-End: Tested responsiveness, UI/UX fixes, manual testing, and exception handling.
  - Back-End: Conducted manual testing and security finalization.
  - Deployment: Deployed both applications, ensured security, and tested deployed versions.
  - Documentation: Documented deployment process, UX design, user stories, project goals, React components, DRF functionalities, and library usage.

Each sprint focused on progressively developing and integrating the platform's core features, culminating in a thorough testing and deployment phase.

The GitHub project used throughout for both repositories can be found [here](https://github.com/users/BWNC-code/projects/2/views/1)

## UI Design

### Wireframes

Wireframes are a helpful part of the design process because they provide a visual blueprint that outlines the structure and layout of a site before committing to full development

![wireframe home](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699907493/wireframehome_w0ycbd.png)

![wireframe logged out](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699907656/wireframeloggedout_bnguuw.png)

#### Colour Scheme

A relatively neutral colour scheme was chosen with simplicity in mind, as this app is built for everyone. As it's an app for sharing personal journeys, a quiet scheme was also important to that the posts that the users would be sharing would be at the forefront. The colour scheme was also chosen with a focus on accessibility and contrast. Generated by the [https://coolors.co/](https://coolors.co/) colour scheme generator with a few colours in mind.

![Colour scheme](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699824152/colorscheme_s2kzvv.png)

#### Logo

The logo was created with the [logoai.com](https://www.logoai.com/) ai logo generator. I selected the theme, colour scheme, and name and then applied it through the website and as the favicon.

![Logo](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699718048/media/images/android-chrome-144x144_ttwx7a.png)

#### Typography

Raleway was imported from [Google Fonts](https://fonts.google.com/specimen/DM+Sans) as the website's main font, as it is a low-contrast sans serif design, intended for use at smaller text sizes, which is ideal for full accessibility and responsively across smaller screen sizes. I also found it similar to, but more sleek than, sans-serif (the backup font for the website).

#### Imagery

- The few stock images used in the sign in and sign up pages were sourced from free stock image provider [Pexels](https://www.pexels.com/) as were the test posts and profiles created on the website
- The icons were imported from [Font Awesome](https://fontawesome.com/).

## Features

- **User Authentication**: Secure sign-up and login functionality.

  - Account Creation: New users can sign up via the 'Sign Up' link, using a streamlined registration process.

  ![sign up form](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699905456/signup_vzv8n4.png)

  - Account Access: Existing users can log in through the 'Sign In' link to access their accounts.

  ![sign in form](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699905458/signin_gw6oje.png)

- **Post Creation and Management**: Users can create, view, edit, and delete their travel posts.

![post form](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699905455/postform_kv5fjz.png)

- **Interactive Posts**: Users can like, comment on, and share posts.

![post example](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699905651/postexample_jxemge.png)

- **Advanced Search**: Feature-rich search functionality to find specific posts.

![search example](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699905723/searchexample_nf3kac.png)

- **Follow System**: Users can follow each other to see updates in their feed.

![profile follow](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699905455/profilefollow_dpzlvu.png)

- **Responsive Design**: Accessible on various devices, enhancing user experience.

  - Navbar and other components render differently if user is logged in or out
    ![logged in navbar](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699905936/loggedinnav_vsq4yk.png)
    ![logged out navbar](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699905935/loggedoutnav_qvhu6s.png)

### Reusable React Components

- Asset: A versatile component used for loading images, messages, and spinners.
- Avatar: Consistently displays user avatars across the platform.
- NavBar: A reusable component providing navigation across the site.
- NotFound Page: Displayed when users navigate to an invalid URL.
- Edit/Delete Dropdown Menu: Enables users to manage their posts, comments, and profiles.

### Future Features/Developments

With more time the site could benefit from a range of more advanced features, mainly around geo/location tagging and user notifications. It would be a good user experience to be told when someone likes or comments on your post, or follows you.

## Technologies Used

### Languages

- **HTML5** - Provides the content and structure for the website
- **CSS3** - Provides the styling for the website
- **JavaScript** - Provides interactive elements of the website

### Frameworks, Software and Web Applications

- **React.js**: For building the user interface.
- **Bootstrap for React**: For styling and responsive design.
- **Axios**: For making API requests to the backend.
- **Other Libraries**: Including React Router for navigation, Context API for state management, etc.
- **Hosting/Deployment**: Heroku, Cloudinary (for static and media files)
- **Pexels** - Free stock image provider for posts, events and avatars that were uploaded

## Testing

Please click [here](https://github.com/BWNC-code/Travel-Social-PP5-Frontend/blob/main/TESTING.md) for documentation of testing for Travel Socials frontend.

## Deployment

### Forking the Project Repository

You can create your own independent version of this project by forking the repository. This allows you to experiment and make changes without impacting the original codebase. Here's how to fork the repository:

1. Sign in to your GitHub account and navigate to the repository.
2. Look for the 'Fork' button at the top right corner of the page and click on it. This action creates a personal copy of the repository in your GitHub account.

### Cloning the Project Repository

Cloning the repository creates a local copy on your machine, maintaining a connection with the original GitHub repository. This enables you to sync your local version with any updates made in the original project. To clone the repository, follow these steps:

1. In your forked repository, click the 'Code' button.
2. From the dropdown, choose the method of cloning you prefer (HTTPS, SSH, or GitHub CLI), and copy the provided URL.
3. Open your terminal, navigate to the directory where you want to clone the repository, and run git clone followed by the copied URL.
4. By forking and cloning the repository, you can freely experiment with the code and even contribute to the original project through pull requests.

### Remote Deployment

To deploy the application on Heroku and ensure that all features work as expected, follow these steps:

- Create a new Heroku app.

- Set up the necessary Config Vars in the Settings tab.

- Connect your GitHub account and select the repository to be deployed.

- Choose either manual deployment or enable automatic deployment.

## Acknowledgements

Thanks to my mentors, Jubril Akolade and Chris Quinn for their advice and guidance. Thanks as well to the Code Institute team and tutors for their support.
