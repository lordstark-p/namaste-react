# Mastering React

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimisation
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - Restaurant Container
- - Restaurant Card
-     - Img
-     - Name of Res, Star Rating, cuisine, delivery etc
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

# Two types of Export/Import

- Default Export/Import
  -> export default Component;
  -> import Component from "path";

- Named Export/Import
  -> export const Component;
  -> import {Component} from "path";

# 2 types of Routing in web apps

- Client Side Routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Reduce function - updates/modifies slice of the store
- Selector

# Types of testing ( developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpiler
- Jest Configuration --> npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work with test cases
- Include @babel/preset-react inside my babel configuration(babel.config.js) --> ["@babel/preset-react", { runtime: "automatic" }]
- Install @testing-library/jest-dom --> npm i -D @testing-library/jest-dom
- import "@testing-library/jest-dom" --> in the testing component
- add in scripts in package.json --> "watch-test": "jest --watch" --->> to continuously run the "npm run test" and now we will run npm run watch-test
- when we are doing fetch or state updates in our component we have to use act() function
