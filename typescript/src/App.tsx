// import { Greet } from "./components/Greet"
// import Person from "./components/Person"
// import { PersonList } from "./components/PersonList";

import { Button } from "./components/html/button"

// import { Toast } from "./components/templateliterals/Toast"

// import RandomNumber from "./restriction/RandomNumber"

// import { List } from "./components/generic/List";

// import MutableRef from "./components/ref/MutableRef"

// import Button from "./components/Button"
// import Container from "./components/Container";
// import Input from "./components/Input";

// import { Box } from "./context/Box";
// import { ThemeContextProvider } from "./context/ThemeContext";

// import User from "./context/User";
// import { UserContextProvider } from "./context/UserContext";

// import { Greet } from "./components/Greet";
// import Heading from "./components/Heading"
// import Oscar from "./components/Oscar"
// import { Status } from "./components/Status"

//  const App = () => {
//    const personName = {
//     firstName : "Amit",
//     lastName : "Parihar"
//    };

//    const nameList = [
//     {first : "Sahil",
//       last : "Rajput"
//     },
//     {first : "bhai",
//       last : "tbahi"
//     },
//     {first : "aonu",
//       last : "thakur"
//     },

//    ]

//    return (
//  <div className="bg-black h-screen text-white">
//        <Greet name={"Amit"} messgeCount={10} isLoggedIn = {false}/>
//        <Person name={personName}  />
//        <PersonList names={nameList}  />

//      </div>
//    )
//  }

//  export default App

// export const App = () => {
//   return (
//     <div>
//       <Status status="success" />
//       <Heading>Placeholder text</Heading>
//       <Oscar>
//         <Heading>Oscar goes to amit parihar</Heading>
//       </Oscar>
//       <Greet name="Amit"   isLoggedIn={false}/>
//     </div>
//   );
// }

// export const App = () => {
//   return (
//     <div>
//       <Button  handleClick={(event,id) => {
//       console.log('Button Clicked',event,id);
//       }}/>
//       <Input  value="" handleChange={(event) => console.log(event)}/>
//       <Container styles={{border : "2px solid red",padding : "1rem"}} />
//     </div>
//   )
// }

// export const App = () => {
//   return (
//     <div>
//       <ThemeContextProvider>
//         <Box />
//       </ThemeContextProvider>
//     </div>
//   )
// }

// export const App = () => {
//   return (
//     <div>
//     <UserContextProvider>
//        <User />
//     </UserContextProvider>

//     </div>
//   )
// }

//  export const App = () => {
//   return (
//     <div>
//       <MutableRef />
//     </div>
//   )
// }

// export const App = () => {
//   return (
//     <div>
//       {/* <List
//         items={["Batman", "Spiderman", "Shaktiman"]}
//         onClick={(item) => console.log(item)}
//       />

//       <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

//       <List
//         items={[
//           {
//             id: 1,
//             first: "Amit",
//             last: "Parihar",
//           },
//           {
//             id: 2,
//             first: "Chirag",
//             last: "Parihar",
//           },
//           {
//             id: 3,
//             first: "jaya",
//             last: "Thakur",
//           },
//         ]}
//         onClick={(item) => console.log(item)}
//       />
//     </div>
//   );
// };




// export const App = () => {
//   return (
//     <div>
//       <RandomNumber value={2} isPositive />
//     </div>
//   )
// }



export const App = () => {
  return (
    <div>
      {/* <Toast position="center" /> */}
      <Button variants="primary">Primary Button</Button>
    </div>
  )
}






