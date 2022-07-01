import ContentPage from '../Contents/ContentPage'
import Notes from '../NotesPage/Notes';
import { useState } from 'react';

const LoggedInNavigation = ({user, logout}) => {

    const [selectedPageId, setSelectedPageId] = useState(null);

    const selectPage = (event) => {
        setSelectedPageId(event.target.id);
        console.log(selectedPageId);
    }



 return(
     <> 
        <button onClick={logout}>Logout</button>
        {selectedPageId ? <Notes selectedPageId={selectedPageId} /> : <ContentPage user={user} selectPage={selectPage} />}
     </>
 )
}

export default LoggedInNavigation;