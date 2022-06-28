import { useState, useEffect } from "react";
import axios from "axios";
import './LoginPage.css';

const Login = () => {
    // use state - tracks the state of the browser i.e. chanegs in the browser for every key stroke. 
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleNameChange = event => setName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);
    
            const [users, setUsers] = useState([]);

    const handleSubmit = event =>{
        event.preventDefault();

        const user = {
            "name":name,
            "email":email,
            "password":password
        }  

        axios.post("http://127.0.0.1:8080/user", users)
      .then(res => {
          console.log(res);
      }).catch((err) => console.log(err));
    }


    // useEffect( () => {
    //     fetch("http://127.0.0.1:8080/user")
    //       .then(response => response.json())
    //       .then(data => {setUsers(data)
    //       })
    //       .catch(err => console.log(err))
    //   }, [users])


    

    return(
       <>   <div className="login-box">
                <div className="login-content"> 
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
                    
                    <div className="submit-button">
                        <button id="submit" type="button">Submit</button> 
                    </div>

                    <div className="create-new-account-button">
                        <form onSubmit={handleSubmit}> 
                        <label>
                            Name:
                            <input 
                            type="text"
                            name="name"
                            onChange={handleNameChange}
                            />
                        </label>
                        <label>
                            Email:
                            <input 
                            type="text"
                            name="email"
                            onChange={handleEmailChange}

                            />
                        </label>
                        <label>
                            Password:
                            <input 
                            type="text"
                            name="password"
                            onChange={handlePasswordChange}

                            />
                        </label>
                        <button id="createNewAccount" type="button">Create New Account </button>                        
                        </form>

                    </div>    
                </div>
            </div>
       </> 
    )
}
export default Login;