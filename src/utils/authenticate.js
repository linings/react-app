const authenticate = async (url, body) => {
  const { username, password, repeatPassword } = body;

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
    document.cookie = `x-auth-token=${response.ownerId}`;
  }
};

export default authenticate;
