import { useState } from "react"

const LoggedIn = () => {
    const handleLogin = () => { 
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
     }

    const [isloggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
         User is{isloggedIn ? "loggedIn" : "logged out"}
      </div>
    </div>
  )
}

export default LoggedIn
