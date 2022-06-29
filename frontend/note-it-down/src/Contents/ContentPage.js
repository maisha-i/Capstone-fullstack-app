// import { useEffect, useState } from "react";
// import AddNewCategory from "./AddNewCategory";
// import CategoryComponent from "./CategoryComponent";



// const ContentPage = () => {

//     const currentUserId = 1;
//     const [categories, setCategories] = useState([]);

//     useEffect( () => {
//         fetch(`http://127.0.0.1:8080/user/${currentUserId}/categories`)
//             .then(response => response.json())
//             .then(data => setCategories(data))
//     }
//     ,[categories])

//     const addNewCategoryToState = (title) => {
//         if(title === ""){
//             return
//         }
//         const category = {
//             title: title,
//             user: {id: currentUserId}
//         }
//         const options = {
//             method: "POST",
//             body: JSON.stringify(category),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         }

//         fetch("http://127.0.0.1:8080/category", options)
//             .then(console.log("Got here"))
//     }



//     return(
//         <>
//             {/* Categories section */}
//                 {categories.map( category => {
//                     return(
//                         <CategoryComponent key={category.id} category={category}/>
//                     )
//                 })}
            
//             {/* Add a new category form: */}

//             <AddNewCategory addNewCategoryToState={addNewCategoryToState}/>
        
//         </>
//     );


// }

// export default ContentPage;