import { useState } from "react";
import "./AddNewUser.css"


const AddNewUser = ({addNewUserToState}) => {

    const[newName, setNewName] = useState("");
    const[newEmail, setNewEmail] = useState("");
    const[newPassword, setNewPassword] = useState("");

    const handleUserAdd = (event) => {
        event.preventDefault()
        addNewUserToState(newName, newEmail, newPassword);
    }

    return(
        <>
            <div className="new-user-box">
                <div className="login-middle-text">
                    <p>OR</p>
                    <p>Create New Account </p>   
                </div>
                <div  className="new-user-form">
                <form className=""onSubmit={handleUserAdd}>

                    <label htmlFor="email">Name</label>
                    <input 
                    type="text" 
                    onChange={(event) => setNewName(event.target.value)} 
                    value={newName}
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                    type="text" 
                    onChange={(event) => setNewEmail(event.target.value)} 
                    value={newEmail}
                    />

                    <label htmlFor="email">Password</label>
                    <input 
                    type="text" 
                    onChange={(event) => setNewPassword(event.target.value)} 
                    value={newPassword}
                    />
                    <input type="submit" value="Sign Up" />
                </form>
                </div>            
            </div>

        </>
    )
}
export default AddNewUser;