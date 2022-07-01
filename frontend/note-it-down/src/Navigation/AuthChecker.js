import { useState } from "react";
import Login from "../Login/Login";
import LoggedInNavigation from "./LoggedInNavigation";

const AuthChecker = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [jwtToken, setJwtToken] = useState(null);

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("jwt"));

    const [popUpOpen, setPopUpOpen] = useState(false);

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const loginFunction = () => {

        fetch('http://localhost:8080/login', {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)})
        .then(result => {
            setJwtToken(result.headers.get('Authorization'));
            console.log(jwtToken);
            if (jwtToken !== null){
                sessionStorage.setItem("jwt", jwtToken);
                setIsAuthenticated(true);
            } else {
                alert("Login failed, please check your details and try again");
            }
        })
        .catch(err => console.log(err))
    }

    const logout = () => {
        sessionStorage.removeItem("jwt");
        setIsAuthenticated(false);
    }

    if (isAuthenticated){
        return <LoggedInNavigation user={user} logout={logout}/>
    } else {
        return (
            <>
                <div className="cover">
                    <h1>noteItDown</h1>
                    <Login handleChange={handleChange} loginFunction={loginFunction}/>
                </div>
                <div className="cover page1"></div>
            </>
        )
    }
    

}

export default AuthChecker;