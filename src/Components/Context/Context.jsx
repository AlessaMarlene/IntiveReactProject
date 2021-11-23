import { createContext, useState } from "react";
import { useCookies } from "react-cookie";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies()

    const [userInfo, setUserInfo] = useState({
        username: cookies.username,
        tokenSession: cookies.tokenSession,
        roles: cookies.roles
    })

    function setUserInformation(userInfo) {
        setCookie('username', userInfo.username);
        setCookie('tokenSession', userInfo.tokenSession);
        setCookie('roles', userInfo.roles);
        setUserInfo(userInfo);
    }
    
    function deleteUserInformation(){
        removeCookie('username');
        removeCookie('tokenSession');
        removeCookie('roles');
        setUserInfo({
            username: '',
            tokenSession: '',
            roles: []
        })
    }
    
    return(
        <BlogContext.Provider value={{userInfo, setUserInformation, deleteUserInformation}}>
            {children}
        </BlogContext.Provider>
    );
}

export {BlogContext, BlogProvider};