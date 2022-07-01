import ContentPage from '../Contents/ContentPage'
import Notes from '../NotesPage/Notes';
import { useEffect, useRef, useState } from 'react';

const LoggedInNavigation = ({ logout}) => {

//     const userId = useRef("");

//     useEffect(() => {fetch(`http://localhost:8080/user/email/${userEmail.current}`)
//     .then(response => response.json())
//     .then(result => {userId.current = result; console.log("User id : " + userId.current); 
// console.log(sessionStorage.getItem("jwt"))})}, [userId])

    const [selectedPageId, setSelectedPageId] = useState(null);

    const selectPage = (event) => {
        setSelectedPageId(event.target.id);
        console.log(selectedPageId);
    }

    const returnToContents = () => {
        setSelectedPageId(null);
    }



 return(
     <> 
        <button onClick={logout}>Logout</button>
        {selectedPageId ? <Notes selectedPageId={selectedPageId} returnToContents={returnToContents} /> 
        : <ContentPage selectPage={selectPage} />}
     </>
 )
}

export default LoggedInNavigation;