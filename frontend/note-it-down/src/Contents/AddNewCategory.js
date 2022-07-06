import { useState } from "react";
import "./AddNewCategory.css"


const AddNewCategory = ({addNewCategoryToState}) => {

    const [newTitle, setNewTitle] = useState("");

    const handleCategoryAdd = (event) => {
        addNewCategoryToState(newTitle);
    }

    const handleCoverClick = () => {
        const form = document.querySelector(".addNewCategory-form");
        form.style.display = "block";
        const cover = document.querySelector(".form-cover")
        cover.style.display = "none";
    }



    return(
        <>
            <div onClick={handleCoverClick} className="form-cover">
                <p id="category-text"><strong>+</strong>Add New Category </p>   
            </div>

            <form className="addNewCategory-form" onSubmit={handleCategoryAdd}>
                <input className="title-input-category" type="text" onChange={(event) => setNewTitle(event.target.value)} value={newTitle}/>
                <input type="submit" value="Add Category" />
            </form>
        
        
        
        
        </>
    )
}

export default AddNewCategory;