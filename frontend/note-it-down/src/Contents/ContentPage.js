import { useEffect, useState } from "react";
import AddNewCategory from "./AddNewCategory";
import CategoryComponent from "./CategoryComponent";
import ToDoList from "./ToDoList";
import "./ContentPage.css"
import LoginDummyFile from "../Animation/LoginDummyFile"
import { AiFillSetting } from "react-icons/ai";


const ContentPage = ({selectPage, goToSettings}) => {

    const doesAnimation = sessionStorage.getItem("doesAnimation")  //True or False

    const currentUserId = sessionStorage.getItem("userId");
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch(`http://127.0.0.1:8080/user/${currentUserId}/categories`)
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    
    const dummyCover = <div  className="cover dummy">
        <h1 style={{textAlign: "center"}}>noteItDown</h1>
        <LoginDummyFile />
        </div>



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

    const handleDeleteCategory = (idToDeleteCategory) => {
        fetch(`http://localhost:8080/category/${idToDeleteCategory}`, {method: "DELETE"})
        
        setCategories(categories.filter((category) => category.id !== idToDeleteCategory));
        window.location.reload()
      };



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
            <CategoryComponent updateTitle={updateTitle} key={category.id} category={category} addNewPageToState={addNewPageToState} selectPage={selectPage} handleDeleteCategory={handleDeleteCategory}/>
        )
    })


    // document.addEventListener("click", () => {
    //     sessionStorage.setItem("doesAnimation", false)
    //     // console.log(sessionStorage)
    // })

    return(
        <>
        {/* {sessionStorage.getItem("doesNotesAnimation") && <div className="backwards pageCover"></div>} */}
        {/* {sessionStorage.getItem("doesNotesAnimation") && <div className="container-settings dummySettings"> */}
                {/* <div className="container-box "></div>
                <div className="leftBox "></div>
                <div className="rightBox "></div>
            
            </div>} */}
        
        <div className="contentPage--container">

            <a onClick={goToSettings} className="settingsIcon" >
                <AiFillSetting />
            </a>
            <div className="container-box-content"> 

            {doesAnimation && dummyCover}

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

            </div>
         </div >
        </>
    );


}

export default ContentPage;