import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";
import User from "./User";
import React, { useContext, lazy, Suspense } from "react";

// class About extends React.Component {
//   constructor(props) {
//     super(props);

//     // console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     // console.log("Parent Component Did Mount");
//   }

//   render() {
//     // console.log("Parent Render");
//     return (
//       <div>
//         <h1>About Class Component</h1>
//         <div>
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h1 className="font-bold">{loggedInUser}</h1>
//             )}
//           </UserContext.Consumer>
//         </div>

//         <User />
//       </div>
//     );
//   }
// }

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About Functional Component</h1>
      <div>
        <h1 className="font-bold">{loggedInUser}</h1>
      </div>

      <User />
    </div>
  );
};

export default About;
