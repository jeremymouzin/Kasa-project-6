
# Kasa – Your Home Away from Home

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="150" alt="React Logo" />


## Overview

Kasa is a property rental web app that lets users browse, filter, and book unique accommodations. This project demonstrates how to build a single-page application with React, leveraging client-side routing and modular component design.

---

## Overview

Kasa is a property rental web app that lets users browse, filter, and book unique accommodations. This project demonstrates how to build a single-page application with React, leveraging client-side routing and modular component design.

---

##  Key Features

- **Home Page**: Lists all available properties with thumbnail cards.
- **Property Details**: Dynamic routes to view full details for each listing (images carousel, description, host info, amenities).
- **Search & Filters**: Filter listings by location, price range, and rating.
- **Favorites**: Users can “heart” listings to save them for later (stateful UI).
- **404 Page**: Custom “Not Found” page for unmatched routes.
- 
### Backend / Data  
The frontend should be built using the following JSON data source:  
[https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)

---

### Requirements

#### Functional Specifications

1. **Gallery Photo Carousel**  
   - When the user clicks “Previous” on the first image, the gallery displays the last image.  
   - When the user clicks “Next” on the last image, the gallery displays the first image.  
   - If there is only one image, the “Next” and “Previous” buttons should be hidden.

2. **Gallery Layout**  
   - The gallery should always maintain the same height as specified in the Figma design.  
   - Images must be cropped and centered within the frame to fit this height.

3. **Collapse Components**  
   - Collapses are closed by default when the page loads.  
   - Clicking an open Collapse closes it; clicking a closed Collapse opens it.

#### Technical Specifications

1. Break the UI into modular, reusable React components.  
2. Maintain a clear and logical project file structure.  
3. Use event handling efficiently within components.  
4. Render lists by iterating over data arrays.  
5. Pass data between components using props.  
6. Implement a 404 page for unknown routes or invalid URL parameters (i.e., IDs not in the dataset).

---

### Technologies Used

- HTML5  
- CSS3 / SASS  
- JavaScript (ES6+)  
- React  

### Skills Acquired

- Building client-side routing with React Router  
- Initializing and structuring a React application  
- Creating reusable and dynamic React components  

---

### Additional Information

- Live Demo: [https://sihambordjah.github.io/kasa/](https://sihambordjah.github.io/kasa/)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
