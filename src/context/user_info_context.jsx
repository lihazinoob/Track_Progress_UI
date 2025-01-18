import React, { useState } from "react";
import axiosClient from "../axios_client";
import axios from "axios";
// First create a context

const UserInfoContext = React.createContext({
    user: null,
    setUser: () => {},
    token: null,
    setToken: () => {},
});

// Custom Hook to use UserInfoContext

export const useUserInfoContext = () => React.useContext(UserInfoContext);

 


// Now create a context provider
export default function UserInfoContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
            // Fetch user data when token is set
            axiosClient
                .get("/user", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    console.log("Response for LARAVEL ", response);
                    setUser(response);
                    console.log("USER is SET", user);
                })
                .catch((err) => {
                    console.log("Error fetching user data", err);
                    setToken(null);
                });
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    // Using useEffect hook so that whenver the token is updated the corresponding logic works

    React.useEffect(() => {
        if (token) {
            axiosClient
                .get("/user", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    console.log(response);
                    setUser(response.data);
                    console.log("User");
                    console.log(user.name);
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    setToken(null);
                });
        }
    }, [token]);

    return(
      <UserInfoContext.Provider value = {{user,token,setUser,setToken}}>
        {children}
      </UserInfoContext.Provider>
    );

};
