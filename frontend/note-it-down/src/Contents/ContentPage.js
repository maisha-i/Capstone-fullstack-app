import { useEffect, useState } from "react";
import AddNewCategory from "./AddNewCategory";
import CategoryComponent from "./CategoryComponent";
import ToDoList from "./ToDoList";
import "./ContentPage.css"


const ContentPage = ({selectPage}) => {

    const currentUserId = sessionStorage.getItem("userId");
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch(`http://127.0.0.1:8080/user/${currentUserId}/categories`)
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    const addNewCategoryToState = (title) => {
        if(title === "" || title === "To Do List"){
            return
        }
        const category = {
            title: title,
            user: {id: currentUserId}
        }
        const options = {
            method: "POST",
            body: JSON.stringify(category),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        fetch("http://127.0.0.1:8080/category", options)
            .then(console.log("Got here"))
    }


    const addNewPageToState = (categoryId, title) => {
        if(title === "") return;

        const content = "";
        
        
        fetch(`http://127.0.0.1:8080/page/createpage?title=${title}&content=${content}&background=WHITE&category_id=${categoryId}`, {method: "POST"})
            .then(console.log("Adding new page"))
            .catch(err => console.log(err))


    }

    const updateTitle = (categoryId, newTitle) => {
        const something = categories.filter(category => category.id === categoryId)[0].title = newTitle;
        console.log(something);
    }


    const toDoListComponent = categories.filter(categories => categories.title === "To Do List").map(category => {
        return <ToDoList key={category.id} list={category} categoryId={category.id} addNewPageToState={addNewPageToState}/> 
    })

    const categoriesSection = categories.filter(category => category.title !== "To Do List").map( category => {
        return(
            <CategoryComponent updateTitle={updateTitle} key={category.id} category={category} addNewPageToState={addNewPageToState} selectPage={selectPage}/>
        )
    })

    // const deletePageFromState = (pageId) => {
    //     const categoryWithDesiredPage = categories.filter(category => category.pages.filter(    //Check each category
    //         page => page.id === pageId).length !== 0)[0]
            
    //     const desiredPage =     
    //         .pages.filter( //Find the category with the desired page
    //             page => page.id === pageId)       //Find the desired page within that category
    // }


    return(
        <div className="contentPage--container">
            {/* To Do List */}
            {toDoListComponent}

            {/* Categories section */}
            <section className="categoriesSection">
                {categoriesSection}
            </section>
            
             {/* Add a new category form: */}
            <div className="addNewCategory--component">
                <AddNewCategory addNewCategoryToState={addNewCategoryToState}/>
            </div>

        
         </div >
    );


}

export default ContentPage;