import ContentPage from '../Contents/ContentPage'
import Notes from '../NotesPage/Notes';
import Settings from '../Settings/Settings';
import TabContainer from '../Tabs/TabContainer';
import { useEffect, useRef, useState } from 'react';

const LoggedInNavigation = ({ logout}) => {

    useEffect(() => {
        setTimeout(() => {sessionStorage.removeItem("doesAnimation")}, 3000)
    })

    const [pageSelected, setPageSelected] = useState(sessionStorage.getItem("currentCategory"));
    const [settingsSelected, setSettingsSelected] = useState(sessionStorage.getItem("settingsPage"));
    const [categoryId, setCategoryId] = useState(sessionStorage.getItem("currentCategory"));

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
        setCategoryId(null);
    }

    const goToSettings = () => {
        sessionStorage.setItem("settingsPage", true);
        setSettingsSelected(true);
    }

    const clickTab = (event) => {
        sessionStorage.setItem("currentCategory", event.target.id)
        sessionStorage.setItem("currentCategoryName", event.target.dataset.title)
        setCategoryId(event.target.id)
        setPageSelected(true)
        setSettingsSelected(false)
    }


 return(
     <> 
        {pageSelected ? <Notes returnToContents={returnToContents} categoryId={categoryId} /> : null}
        {settingsSelected ? <Settings returnToContents={returnToContents} logout={logout}/> : null}
        {!pageSelected && !settingsSelected ? 
            <ContentPage selectPage={selectPage} goToSettings={goToSettings} /> : null}
        <TabContainer clickTab={clickTab} categoryId={categoryId} />
        <button onClick={logout}>Logout</button>
     </>
 )
}

export default LoggedInNavigation;