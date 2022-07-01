import { useState, useEffect } from "react";
import axios from "axios";
import { RiLockPasswordFill, RiUser3Fill} from "react-icons/ri";
import { MdEmail } from "react-icons/md";




const UserLogin = () => {

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
                    {/* <p>Log In </p>    */}

                    <div className="email">
                        {/* value = username set out inline 4  - bind the username and password to the text boxes 
                        value of username = value of text box*/}
                        <MdEmail/><input 
                        type="email" placeholder="Email" id="email" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                        /> 
                    </div>

                    <div className="password">
                    <RiLockPasswordFill/><input 
                        type="password" placeholder="Password"
                        id="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                        /> 
                    </div> 

                        <button id="btn-login" type="submit">Log In</button> 
                </div>
            </div>
       </> 
    )
}
export default UserLogin;