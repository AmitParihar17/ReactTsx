// import { Greet } from "./components/Greet"
// import Person from "./components/Person"
// import { PersonList } from "./components/PersonList";

import { Status } from "./components/Status"

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
 



export const App = () => {
  return (
    <div>
      <Status  status="success" />
    </div>
  )
}


