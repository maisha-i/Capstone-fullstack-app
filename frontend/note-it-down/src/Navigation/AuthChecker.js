import { useState } from "react";
import Login from "../Login/Login";
import LoggedInNavigation from "./LoggedInNavigation";

const AuthChecker = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("jwt"));

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const loginFunction = () => {

        fetch('http://localhost:8080/login', {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)})
        .then(result => {
            const jwtToken = result.headers.get('Authorization');
            if (jwtToken !== null){
                sessionStorage.setItem("jwt", jwtToken);
                sessionStorage.setItem("doesAnimation", true);
                fetch(`http://localhost:8080/user/email/${user.email}`)
                .then(response => response.json())
                .then(result => {sessionStorage.setItem("userId", result);
                console.log("id in storage:" + sessionStorage.getItem("userId"));
                setIsAuthenticated(true)})
                .catch(err => console.log(err));
                
                ;
            } else {
                alert("Login failed, please check your details and try again");
            }
        })
        .catch(err => console.log(err))
    }

    const logout = () => {
        sessionStorage.removeItem("jwt");
        sessionStorage.removeItem("userId");
        sessionStorage.setItem("doesAnimation", true);
        sessionStorage.removeItem("currentPage");
        sessionStorage.removeItem("currentCategory");
        sessionStorage.removeItem("currentCategoryName");
        sessionStorage.removeItem("settingsPage");
        setUser({
            email: '',
            password: ''
        });
        setIsAuthenticated(false);
    }

    if (isAuthenticated){
        return <LoggedInNavigation  logout={logout}/>
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