import userEvent from "@testing-library/user-event";
import UserLogin from "./UserLogin";
import { useEffect, useState } from "react";
import AddNewUser from "./AddNewUser";
import "./Login.css"

 

const Login = ({handleChange, loginFunction}) => {

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

const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const form = document.querySelector("#form")
const switchs = document.querySelector(".switch");

let current = 1;

function tab2(){
    form.style.marginLeft = "-100%";
    login.style.background = "none";
    signup.style.background = " linear-gradient(45deg,#d0e6de, #336247);";

}

function tab1(){
    form.style.marginLeft = "0";
    login.style.background = "none";
    signup.style.background = " linear-gradient(45deg,#d0e6de, #336247);";

}

    return(
        <>
            <div className="login-body"> 
                <div className="container">
                    {/* <div className="switch"> 
                        <div className="login" onClick={tab1()}> Login  </div>
                        <div className="signup" onClick={tab2()}> Sign Up</div>   
                    </div> */}
                    <div className="outer">
                        <form id="form">
                            <div id="page">
                                <label>Login Form</label>
                                <div className="element">
                                    <UserLogin handleChange={handleChange} loginFunction={loginFunction} />
                                </div>
                                <button id="btn">Log In</button>

                            </div>

                            <div id="page">                                    
                                <label>Sign Up Form</label>
                                <div className="element"> 
                                    <AddNewUser addNewUserToState={addNewUserToState}/> 
                                </div>    
                                <button id="btn">Sign Up</button>
                            </div>
                        </form>

                    </div> 
                    
                </div>
            </div>
        </>
    )
}

 export default Login;