import ContentPage from '../Contents/ContentPage'
import Notes from '../NotesPage/Notes';
import { useEffect, useRef, useState } from 'react';

const LoggedInNavigation = ({ logout}) => {

    const [pageSelected, setPageSelected] = useState(sessionStorage.getItem("currentPage"));

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
    }




 return(
     <> 
        <button onClick={logout}>Logout</button>
        {pageSelected ? <Notes returnToContents={returnToContents} /> 
        : <ContentPage selectPage={selectPage} />}
     </>
 )
}

export default LoggedInNavigation;