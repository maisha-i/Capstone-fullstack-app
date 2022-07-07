
import { useEffect, useState } from "react";

const Account = ({logout}) => {

    const currentUserId = sessionStorage.getItem("userId");
    const [DeletedUser, setDeletedUser] = useState("");

    const deleteUser = () => {
        const options = {
            method: "DELETE",
            body: JSON.stringify(DeletedUser),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
        }

        if (window.confirm("Are you sure you want to delete your account? This will permenantly delete your acccount and erase all your notes.") ) {
            fetch(`http://127.0.0.1:8080/user/delete/${currentUserId}`, options)
            .catch(err => console.log(err))             
            .then(() => logout())

        }
    }

    return(
        <>
         <div >
                <h1>Account</h1>
                <h2>Delete Account</h2>
                <p>Click here if you want to delete your account: WARNING this is permenant and cannot be undone.</p>                        
                
                <button onClick={deleteUser}>Delete Account</button>

            </div> 
        </>
    )
}

export default Account;