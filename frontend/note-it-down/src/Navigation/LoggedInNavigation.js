import ContentPage from '../Contents/ContentPage'
import Notes from '../NotesPage/Notes';
import { useEffect, useRef, useState } from 'react';

const LoggedInNavigation = ({ logout}) => {

    const [selectedPageId, setSelectedPageId] = useState(sessionStorage.getItem("currentPage"));

    const selectPage = (event) => {
        sessionStorage.setItem("currentPage", event.target.id)
        setSelectedPageId(event.target.id);
    }

    const returnToContents = () => {
        sessionStorage.removeItem("currentPage")
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