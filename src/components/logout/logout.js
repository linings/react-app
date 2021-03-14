const Logout = () => {
  const logOut = () => {
    document.cookie =
      "x-auth-token= ; expires  = Thu, 01 Jan 1970 00:00:00 GMT";
  };
 
  return <div>{logOut()}</div>;
};

export default Logout;
