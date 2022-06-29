import { useState } from "react";


const AddNewPage = ({category, addNewPageToState}) => {


    const [newPageTitle, setNewPageTitle] = useState("");

    const handleAddNewPage = () => {
        addNewPageToState(category.id, newPageTitle)
    }


    return(


        <>
            <form onSubmit={handleAddNewPage} action="" className="addNewPage--form">
                <input type="text" onChange={event => setNewPageTitle(event.target.value)} value={newPageTitle} placeholder="Title..." className="page-title--input" />
                <input type="submit" value="Add new page" className="addNewPage--submit" />
            </form>
        
    
        
        </>
    )

}


export default AddNewPage;