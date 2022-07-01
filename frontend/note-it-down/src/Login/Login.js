import userEvent from "@testing-library/user-event";
import UserLogin from "./UserLogin";
import { useRef, useState } from "react";
import AddNewUser from "./AddNewUser";
import "./Login.css"

 

const Login = () => {
    
    const [user, setUser] = useState([]);

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

    const formRef = useRef()
    const formLogin = useRef()
    const formSignup = useRef()
    const formSwitch = useRef()


const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const form = document.querySelector("#form");
const switchs = document.querySelectorAll(".switch");


const tab2 = (form, login, signup, switchs) => {
    form.current.style.marginLeft = "-100%";
    login.current.style.background = "none";
    signup.current.style.background = "linear-gradient(45deg,#d0e6de, #336247)";
    switchs.current.classList.add("active");
}

const tab1 = (form, login, signup, switchs) => {
    form.current.style.marginLeft = "0";
    signup.current.style.background = "none";
    login.current.style.background = "linear-gradient(45deg,#d8bac0ab, #a14758ab)";
    switchs.current.classList.remove("active");

}

    return(
        <>
            
            <div className="login-body"> 
                <div className="container">
                    <div className="switch" ref={formSwitch}> 
                        <div className="login" onClick={() => tab1(formRef, formLogin, formSignup, formSwitch)} ref={formLogin}> Login  </div>
                        <div className="signup" onClick={() => tab2(formRef, formLogin, formSignup, formSwitch)} ref={formSignup}> Sign Up</div>   
                    </div>
                    <div className="outer">
                        <div id="form" ref={formRef}>
                            <div id="page">
                                <label>Login Form</label>
                                <div className="element">
                                    <UserLogin/>
                                </div>
                            </div>

                            <div id="page">                                    
                                <label>Sign Up Form</label>
                                <div className="element"> 
                                    <AddNewUser addNewUserToState={addNewUserToState}/> 
                                </div>    
                            </div>
                        </div>

                    </div> 
                    
                </div>
            </div>
        </>
    )



    
}

 export default Login;