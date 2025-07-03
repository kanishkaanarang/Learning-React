import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
// This file defines a UserContextProvider component that will be used to provide user-related data to the rest of the application.
// The UserContextProvider will wrap around components that need access to user data  