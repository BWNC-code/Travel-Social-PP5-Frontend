# Travel Social React App Testing Documentation

## Table of Contents

- [Travel Social React App Testing Documentation](#travel-social-react-app-testing-documentation)
  - [Code Validation](#code-validation)
    - [W3C HTML Validation Results](#w3c-html-validation-results)
    - [W3C CSS Validation Results](#w3c-css-validation-results)
    - [ESLint Validation Results](#eslint-validation-results)
  - [Automated Testing for reusable components](#automated-testing-for-reusable-components)
    - [Tools and Libraries](#tools-and-libraries)
  - [Manual Testing](#manual-testing)
    - [Authentication and User Management](#authentication-and-user-management)
      - [SignUpForm Page](#signupform-page)
      - [SignInForm Page](#signinform-page)
      - [UsernameForm and UserPasswordForm Pages](#usernameform-and-userpasswordform-pages)
    - [Posts Management](#posts-management)
      - [PostCreateForm and PostEditForm Pages](#postcreateform-and-posteditform-pages)
      - [PostFilter Component](#postfilter-component)
      - [PostsPage and PostPage](#postspage-and-postpage)
    - [Comment Management](#comment-management)
      - [Comment, CommentCreateForm, and CommentEditForm](#comment--commentcreateform--and-commenteditform)
    - [Profile and Followers Management](#profile-and-followers-management)
      - [ProfilePage, ProfileEditForm, and PopularProfiles](#profilepage--profileeditform--and-popularprofiles)
    - [Additional Functionalities](#additional-functionalities)
      - [Navigation and Accessibility Tests](#navigation-and-accessibility-tests)
      - [Search and Filter Functionality](#search-and-filter-functionality)
      - [Responsive Design Checks](#responsive-design-checks)
      - [Error Handling and Validation Messages](#error-handling-and-validation-messages)
      - [General User Interface and User Experience Checks](#general-user-interface-and-user-experience-checks)
    - [Browser Compatibility](#browser-compatibility)
    - [Lighthouse Testing](#lighthouse-testing)

[Table of contents generated with markdown-toc](http://ecotrust-canada.github.io/markdown-toc/)



## Code Validation

The Travel Social app has passed through the [W3C HTML Validator](https://validator.w3.org/), the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and the [ESLint Validator](https://eslint.org/docs/latest/use/getting-started#next-steps)

### W3C HTML Validation Results

No errors or warning were found when the deployed URL was passed through the Nu Html Checker

![HTML testing](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699900523/htmlvalid_de8vkl.png)

### W3C CSS Validation Results

No errors or warnings were found when the deployed URL was passed through the W3C CSS Validation checker.

![CSS testing](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699896987/cssvalid_gmnhms.png)

### ESLint Validation Results

No errors or warnings when running ESlint for all js files within the src directory. The config for eslint can be found [here](https://github.com/BWNC-code/Travel-Social-PP5-Frontend/blob/main/.eslintrc.js)

![ESLint testing](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699900305/eslintpass_ep3kny.png)

## Automated Testing for reusable components

- App.js

  - Test rendering of all page routes

- Asset Component

  - Test rendering with different props (e.g., image URLs, alt text).

- Avatar Component

  - Test rendering with different user images.
  - Check fallback behavior or default display when no image is provided.

- MoreDropdown Component

  - Test visibility and interactivity of dropdown items.
  - Validate the functionality of each dropdown option (like edit, delete).

- NavBar Component

  - Test rendering of different navigation links based on user authentication status.

- NotFound Component

  - Test rendering of message
  - Test link back to homepage

### Tools and Libraries

For implementing these tests, you will need:

- Jest: A JavaScript testing framework for running tests.
- React Testing Library: For rendering components in a test environment and interacting with them as a user would.
- Mock Service Worker (MSW): To mock API calls during testing.

## Manual Testing

As well as the automated tests, I carried out the following manual tests to ensure practical functionality.

### Authentication and User Management

#### SignUpForm Page

- ✓ Ensure that a new user can register successfully.
- ✓ Verify that validation messages appear for invalid inputs.
- ✓ Check if the user is redirected upon successful registration.

#### SignInForm Page

- ✓ Test user login with correct credentials.
- ✓ Check behavior with incorrect credentials (expect error messages/alerts).
- ✓ Validate UI responsiveness for different device sizes.

#### UsernameForm and UserPasswordForm Pages

- ✓ Test the functionality of updating username and password.
- ✓ Validate the response on successful update and for any validation errors.

### Posts Management

#### PostCreateForm and PostEditForm Pages

- ✓ Create a new post and verify its appearance on the relevant pages.
- ✓ Edit an existing post and check if changes are reflected.
- ✓ Test validations for required fields and formats.

#### PostFilter Component

- ✓ Test the functionality of post filtering by category
- ✓ Validate the correct display of filtered results.

#### PostsPage and PostPage

- ✓ Navigate to the PostsPage and verify the correct display of all posts.
- ✓ Select an individual post and check detailed view on PostPage.
- ✓ Test interactive elements like likes, comments, and navigation to the user profile.

### Comment Management

#### Comment, CommentCreateForm, and CommentEditForm

- ✓ Ensure comments are correctly displayed under posts.
- ✓ Test adding a new comment and its immediate reflection.
- ✓ Edit and delete comments and verify changes.

### Profile and Followers Management

#### ProfilePage, ProfileEditForm, and PopularProfiles

- ✓ Access different user profiles and verify correct information display.
- ✓ Edit a user profile and check updates.
- ✓ Follow/unfollow actions in the PopularProfiles component and verify the update in follower count.

### Additional Functionalities

#### Navigation and Accessibility Tests

- ✓ Verify that navigation links lead to the correct pages.
- ✓ Test the responsiveness of the navigation bar on different devices.

#### Search and Filter Functionality

✓ Test the search feature across different pages.

#### Responsive Design Checks

- ✓ Test the application on different devices and screen sizes for layout issues.
- ✓ Verify that all interactive elements are accessible and functional on mobile, tablet, and desktop views.

#### Error Handling and Validation Messages

- ✓ Intentionally trigger errors to test the application's error handling.
- ✓ Check for clear and helpful validation messages across forms.

#### General User Interface and User Experience Checks

- ✓ Ensure consistency in UI elements across different pages.
- ✓ Test for intuitive navigation and ease of use.

### Browser Compatibility

Chrome DevTools was used to test the responsiveness of the application on different screen sizes. In addition, testing has been carried out on the following browsers:

- Chrome Version 107.0.5304.87
- Edge Version 107.0.1418.24
- Firefox Version 94.0.1
- Safari on IOS (Safari Version 15.6)

### Lighthouse Testing

Google Lighthouse in Chrome Developer Tools was used to test the application within the areas of Performance, Accessibility, Best Practices and SEO. The testing showed the following:

--Home Page-- - Performance: 55, Accessibility: 94, Best Practices: 95, SEO: 100

![Lighthouse](https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1699901503/lighthouse_as2yfz.png)
