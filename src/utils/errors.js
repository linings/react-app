const handleErrors = (e, setErrors) => {
    e.preventDefault();

    const { name, value } = e.target;
    switch (name) {
        case 'username':
            let usernameValue =
                value.length <= 5
                    || !(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(value)
                    ? 'Username must be atleast 5 charachters long and valid email!'
                    : "";
            setErrors({ usernameValue });
            break;
        case 'password':
            let passwordValue =
                value.length < 6
                    ? 'Password must be 6 characters long!'
                    : '';
            setErrors({ passwordValue });
            break;
        case 'repeatPassword':
            let repeatPasswordValue =
                value.length < 6
                    ? 'Password must be 6 characters long!'
                    : '';
            setErrors({ repeatPasswordValue });
            break;
        default:
            break;
    }
}
export default handleErrors;