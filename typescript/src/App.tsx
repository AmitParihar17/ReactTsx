// import { Greet } from "./components/Greet"
// import Person from "./components/Person"
// import { PersonList } from "./components/PersonList";

// import Button from "./components/Button"
// import Container from "./components/Container";
// import Input from "./components/Input";

// import { Box } from "./context/Box";
// import { ThemeContextProvider } from "./context/ThemeContext";

import User from "./context/User";
import { UserContextProvider } from "./context/UserContext";

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

export const App = () => {
  return (
    <div>
    <UserContextProvider>
       <User />
    </UserContextProvider>


    </div>
  )
}







