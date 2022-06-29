import { useState, useEffect } from "react";
import axios from "axios";
import "./UserLogin.css"


const Login = () => {

        const [users, setUsers] = useState("");

    // use state - tracks the state of the browser i.e. chanegs in the browser for every key stroke. 
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleEmail = event => setEmail(event.target.value);
    const handlePassword = event => setPassword(event.target.value);
    

    const handleSubmit = event =>{
        event.preventDefault();

        const user = {
            "email":email,
            "password":password
        }  

        axios.post("http://127.0.0.1:8080/user", users)
      .then(res => {
          console.log(res);
      }).catch((err) => console.log(err));
    }

    return(
       <>   <div className="login-box">
                <div className="login-form"> 
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        {/* value = username set out inline 4  - bind the username and password to the text boxes 
                        value of username = value of text box*/}
                        <input 
                        type="email" id="email" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                        /> 
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                        />
                    </div>    
                    
                    <div className="submit">
                        <button className="submit-button" id="submit" type="button">Submit</button> 
                    </div>

                </div>
            </div>
       </> 
    )
}
export default Login;