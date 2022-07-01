import { useState } from "react";

const AddNewUser = ({addNewUserToState}) => {

    const[newName, setNewName] = useState("");
    const[newEmail, setNewEmail] = useState("");
    const[newPassword, setNewPassword] = useState("");

    const handleUserAdd = (event) => {
        // event.preventDefault()
        addNewUserToState(newName, newEmail, newPassword);
    }

    return(
        <>
            <div className="new-user-box">
                <div  className="new-user-form">
                <form className=""onSubmit={handleUserAdd}>

                    <div className="form-group"> 
                        <input 
                        type="text" placeholder="Full Name"
                        onChange={(event) => setNewName(event.target.value)} 
                        value={newName}
                        />
                    </div>

                    <div className="form-group"> 
                        <input 
                        type="email" placeholder="Email"
                        onChange={(event) => setNewEmail(event.target.value)} 
                        value={newEmail}
                        />
                    </div>

                    <div className="form-group"> 
                        <input 
                        type="password" placeholder="Password"
                        onChange={(event) => setNewPassword(event.target.value)} 
                        value={newPassword}
                        />
                    </div>
                    
                    <div> 
                     <button  type="submit"id="btn-signup">Sign Up</button> 

                    </div>
                </form>
                </div>            
            </div>

        </>
    )

}
export default AddNewUser;