import userEvent from "@testing-library/user-event";
import UserLogin from "./UserLogin";
import { useEffect, useState } from "react";
import AddNewUser from "./AddNewUser";
 

const Login = () => {
    
    const [user, setUser] = useState([]);

    // useEffect( () => {
    //     fetch(`http://127.0.0.1:8080/user`)
    //         .then(response => response.json())
    //         .then(data => setUser(data))
    // }
    // ,[user])

    const addNewUserToState = (name, email, password) => {
        if(name === "", email === "", password === ""){
            return
        }
        const newUser = {
            name: name,
            email: email,
            password: password
        } 

        setUser(newUser)

        const options = {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        fetch("http://127.0.0.1:8080/user", options)
            .then(console.log("User has been successfully registered."))
    }

    return(
        <>
        <UserLogin/>
        <AddNewUser addNewUserToState={addNewUserToState}/>
        </>
    )
}

 export default Login;