// import { useState } from "react";
// import "./AddNewCategory.css"


// const AddNewCategory = ({addNewCategoryToState}) => {

//     const [newTitle, setNewTitle] = useState("");

<<<<<<< HEAD
//     const handleCategoryAdd = (event) => {
//         addNewCategoryToState(newTitle);
//     }
=======
    const handleCategoryAdd = () => {
        addNewCategoryToState(newTitle);
    }
>>>>>>> main

//     const handleCoverClick = () => {
//         const form = document.querySelector(".addNewCategory-form");
//         form.style.display = "block";
//         const cover = document.querySelector(".form-cover")
//         cover.style.display = "none";
//     }



//     return(
//         <>
//             <div onClick={handleCoverClick} className="form-cover">
//                 <p><strong>+</strong></p>
//                 <p>Add New Category </p>   
//             </div>

//             <form className="addNewCategory-form" onSubmit={handleCategoryAdd}>
//                 <input className="title-input" type="text" onChange={(event) => setNewTitle(event.target.value)} value={newTitle}/>
//                 <input type="submit" value="Add Category" />
//             </form>
        
        
        
        
//         </>
//     )
// }

// export default AddNewCategory;