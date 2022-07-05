import { useEffect, useState } from "react";
import { unstable_HistoryRouter } from "react-router-dom";
import UserLogin from "../Login/UserLogin";


const Profile = () => {

    const currentUserId = sessionStorage.getItem("userId");

    const [UpdatedUser, setUpdatedUser] = useState({name:"", email:"", password:""});


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = event => {
        setName(event.target.value);}
    
    const handleEmailChange = event => {
        setEmail(event.target.value);}
    
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleUpdatedUser = event => {
    event.preventDefault();

    setUpdatedUser({name:name, email:email, password:password})

    fetch(`http://localhost:8080/user/update/${currentUserId}`, {
        method: 'PUT',
        body: JSON.stringify(UpdatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    return(
        <>
          <div>
                <form onSubmit={handleUpdatedUser}> 
                    <h1>Profile</h1>
                    <h2>Full Name</h2>
                    <input value={name} type="text" className="input" name="name" onChange={handleNameChange}/>

                    <h2>Email</h2>
                    <input value={email} type="email" className="input" name="email" onChange={handleEmailChange}/>

                    <h2>Password</h2>
                    <input value={password} type="password" className="input" name="password" onChange={handlePasswordChange}/>    

                    <button type="submit">Update</button>
                </form>
            </div>  
        </>
    )
}


export default Profile;