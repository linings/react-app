import { useEffect, useState } from "react";
// import authenticate from "./utils/authenticate";
// import RESTAPI from "./REST API";
import getCookie from "./utils/cookie";
import UserContext from "./context";
// import context from './context.js'

const Auth = (props) => {
    const [user, setUser] = useState(null);

    const logIn = () => {
        setUser({
            ...user,
            loggedIn: true,
        });
    };
    const logOut = (history) => {
        document.cookie =
            'x-auth-token= ; expires  = Thu, 01 Jan 1970 00:00:00 GMT; path=/;';

        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('names');
        setUser({
            loggedIn: false,
        });
        if (history) {
            history.push('/');
        }
    };

    useEffect(() => {
        const token = getCookie('x-auth-token');

        if (!token) {
            logOut();
            return;
        }

        // authenticate(
        //     RESTAPI.name + 'users/login',
        //     {
        //         username: localStorage.getItem('username'),
        //         password: localStorage.getItem('password')
        //     },
        //     (user) => {
        //         context.user = user;
        //     },
        //     (error) => {
        //         console.log('Error', error);
        //     }
        // );
        // setUser(user);
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                logIn,
                logOut,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default Auth;
