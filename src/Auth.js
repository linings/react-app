// import { useEffect, useState } from "react";
// import authenticate from "./utils/authenticate";
// import RESTAPI from "./REST API";
// import getCookie from "./utils/cookie";
// import UserContext from "./context";

// const Auth = (props) => {
//     let [user, setUser] = useState(null);
//     console.log(props);

//     const logIn = () => {
//         setUser({
//             ...user,
//             loggedIn: true,
//         });
//     };
//     const logOut = () => {
//         document.cookie =
//             'x-auth-token= ; expires  = Thu, 01 Jan 1970 00:00:00 GMT';
//         setUser({
//             loggedIn: false,
//         });
//     };

//     useEffect(() => {
//         const token = getCookie('x-auth-token');

//         if (!token) {
//             logOut();
//             return;
//         }

//         authenticate(
//             RESTAPI.name + 'users/login',
//             {
//                 username: localStorage.getItem('username'),
//                 password: localStorage.getItem('password')
//             }

//         );
//         setUser(user);
//     }, []);

//     return (
//         <UserContext.Provider
//             value={{
//                 user,
//                 logIn,
//                 logOut,
//             }}
//         >
//             {props.children}
//         </UserContext.Provider>
//     );
// };

// export default Auth;
