const authenticate = async (url, body) => {
  const { username, password, repeatPassword } = body;

  console.log(body);

  if (repeatPassword) {
    if (password !== repeatPassword) {
      console.log(`Passwords do not match!`);
      alert(`Passwords do not match!`);
      return;
    }
    if (password.length < 6) {
      console.log(`Password must be more than 6 digits!`);
      alert(`Password must be more than 6 digits!`);
      return;
    }
  }

  try {
    if (repeatPassword) {
      if (password === repeatPassword) {
        let promise = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let response = await promise.json();
        attachUserDetails(response, username, password);
      } else {
        console.log("Diff passes!");
      }
    } else {
      try {
        let promise = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            login: username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let response = await promise.json();

        if (response.errorData) {
          throw response.message;
        }
        attachUserDetails(response, username, password);
      } catch (err) {
        console.log(err);
      }
     
    }
  } catch (error) {
    console.log(error.message);
    return;
  }
};

const attachUserDetails = (response, username, password) => {
  document.cookie = `x-auth-token=${response.ownerId}`;
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  localStorage.setItem('isAdmin', response.isAdmin);
}

export default authenticate;
