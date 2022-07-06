import { useEffect, useState } from "react";
import UserLogin from "../Login/UserLogin";


const Profile = () => {

    const currentUserId = sessionStorage.getItem("userId");

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {if (currentUserId){ fetch(`http://localhost:8080/user/{userId}?id=${currentUserId}`)
    .then(response =>  response.json())
    .then(result => setCurrentUser({name: result.name, email: result.email}))
    .catch(err => console.log(err))}}, []);

    const [editMode, setEditMode] = useState(false);

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
    
    let updatedName = name;
    if(name === ""){updatedName = currentUser.name} 

    let updatedEmail = email;
    if(email === ""){updatedEmail = currentUser.email}

    let updatedUser = {
        name: updatedName,
        email: updatedEmail,
        password: password
    }

    if(password === ""){updatedUser ={
        name: updatedName, 
        email: updatedEmail
    }}

    setEditMode(false);

    fetch(`http://localhost:8080/user/update/${currentUserId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
    })
    setCurrentUser(updatedUser ={
        name: updatedName, 
        email: updatedEmail
    })
    setName("")
    setEmail("")
    setPassword("")
    }

    const editForm = (<div>
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
    </div>  )

    let displayForm = (<div><h1>Profile</h1>
    <h2>Full Name</h2>
    <p></p>

    <h2>Email</h2>
    <p></p>    

    <button type="submit" onClick={() => setEditMode(true)}>Edit</button></div>)

    if(currentUser){
     displayForm = (<div>
            <h1>Profile</h1>
            <h2>Full Name</h2>
            <p>{currentUser.name}</p>

            <h2>Email</h2>
            <p>{currentUser.email}</p>    

            <button type="submit" onClick={() => setEditMode(true)}>Edit</button>
    </div> )}


    return(
        <>
          {editMode ? editForm : displayForm}
        </>
    )
}


export default Profile;