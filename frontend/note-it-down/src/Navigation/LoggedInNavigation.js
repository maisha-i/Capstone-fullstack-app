import ContentPage from '../Contents/ContentPage'
import Notes from '../NotesPage/Notes';
import Settings from '../Settings/Settings';
import { useEffect, useRef, useState } from 'react';

const LoggedInNavigation = ({ logout}) => {

    useEffect(() => {
        setTimeout(() => {sessionStorage.removeItem("doesAnimation")}, 3000)
    })

    const [pageSelected, setPageSelected] = useState(sessionStorage.getItem("currentPage"));
    const [settingsSelected, setSettingsSelected] = useState(sessionStorage.getItem("settingsPage"));

    const selectPage = (event) => {
        sessionStorage.setItem("currentCategory", event.target.dataset.category)
        sessionStorage.setItem("currentCategoryName", event.target.dataset.title)
        sessionStorage.setItem("currentPage", event.target.id)
        setPageSelected(true);
    }

    const returnToContents = () => {
        sessionStorage.removeItem("currentPage")
        sessionStorage.removeItem("currentCategory")
        sessionStorage.removeItem("currentCategoryName")
        setPageSelected(false);
        sessionStorage.removeItem("settingsPage");
        setSettingsSelected(false);
    }

    const goToSettings = () => {
        sessionStorage.setItem("settingsPage", true);
        setSettingsSelected(true);
    }


 return(
     <> 
        {pageSelected ? <Notes returnToContents={returnToContents} /> : null}
        {settingsSelected ? <Settings returnToContents={returnToContents}/> : null}
        {!pageSelected && !settingsSelected ? 
            <ContentPage selectPage={selectPage} goToSettings={goToSettings} /> : null}

        <button onClick={logout}>Logout</button>
     </>
 )
}

export default LoggedInNavigation;