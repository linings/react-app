const authenticate = async (url, body) => {
  const { username, password, repeatPassword } = body;

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
        document.cookie = `x-auth-token=${response.ownerId}`;
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
        document.cookie = `x-auth-token=${response.ownerId}`;
      } catch (err) {
        console.log(err);
      }
    }
  } catch (error) {
    console.log(error.message);
    return;
  }
};

export default authenticate;
