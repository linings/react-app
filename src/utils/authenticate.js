const authenticate = async (url, body) => {
  const { name, username, password, repeatPassword } = body;

  if (repeatPassword) {
    if (password !== repeatPassword) {
      console.log(`Passwords do not match!`);
      alert(`Passwords do not match!`);
      return;
    }
  }

  if (repeatPassword) {
    if (password === repeatPassword) {
      let promise = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: username,
          password,
          name,
          messages: {}
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let response = await promise.json();
      console.log(response);
      attachUserDetails(response, username, password);
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

    if (response.errorData) {
      throw response.message;
    }
    attachUserDetails(response, username, password);
  }
};

const attachUserDetails = (response, username, password) => {
  document.cookie = `x-auth-token=${response.ownerId}`;
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  localStorage.setItem('isAdmin', response.isAdmin);
  localStorage.setItem('names', response.name);
}

export default authenticate;
