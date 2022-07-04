import { useEffect, useState } from "react";
import AddNewPage from "./AddNewPage";


const ToDoList = ({list, addNewPageToState, categoryId}) => {

    const [pages, setPages] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/category/${categoryId}/pages`)
            .then(response => response.json())
            .then(data => setPages(data))
    }, [])



    const handleToDoCheck = (event, pageTitle, pageId) => {
        if(event.target.checked){


            const updatedPage = {
                title: pageTitle,
                content: "checked",
                background: "WHITE"
            }

            fetch(`http://127.0.0.1:8080/page/updatePage/${pageId}`, {
                method: "PUT",
                body: JSON.stringify(updatedPage),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            const updatedPages = [...pages];
            for(let page of pages){
                if(page.id === pageId){
                    page.content = "checked"
                }
            }
            setPages(updatedPages)


        }
        else{
            const updatedPage = {
                title: pageTitle,
                content: "",
                background: "WHITE"
            }

            fetch(`http://127.0.0.1:8080/page/updatePage/${pageId}`, {
                method: "PUT",
                body: JSON.stringify(updatedPage),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            // event.target.checked="false";

            const updatedPages = [...pages];
            for(let page of pages){
                if(page.id === pageId){
                    page.content = ""
                }
            }
            setPages(updatedPages)


        }
    }


    const handleToDoDelete = (event) => {
        const pageId = event.target.dataset.id;

        fetch(`http://127.0.0.1:8080/page/deletePage/${pageId}`, {method: "DELETE"})
            .then(console.log("Bye!"))

        document.location.reload();
        // deletePageFromState(pageId);
    }

    const toDoItem = pages.map(page => {
                if(page.content !== "checked"){
                    return(
                        <li key={page.id}>
                            <input checked={false} data-id={page.id} type="checkbox" name={page.title} id={`toDoList--checkbox-id${page.id}`} onChange={(event) => handleToDoCheck(event, page.title, page.id)}/>
                            <label className="toDoList--label" id={`toDoList--label-id${page.id}`} htmlFor={`toDoList--checkbox-id${page.id}`}>{page.title}</label>
                            <p data-id={page.id} onClick={handleToDoDelete} className="cross-symbol">&#10005;</p>
                        </li>
                    )
                }
                else{
                    return(
                        <li key={page.id}>
                            <input checked={true} data-id={page.id} type="checkbox" name={page.title} id={`toDoList--checkbox-id${page.id}`} onChange={(event) => handleToDoCheck(event, page.title, page.id)}/>
                            <label className="toDoList--label" style={{textDecoration: "line-through", color: "grey"}} id={`toDoList--label-id${page.id}`} htmlFor={`toDoList--checkbox-id${page.id}`}>{page.title}</label>
                            <p data-id={page.id} onClick={handleToDoDelete} className="cross-symbol">&#10005;</p>
                        </li>
                    )
                }

            })

    return(
        <>
            <h1 className="toDoList--title">To Do List</h1>
            <ul className="toDoList--content">
                {toDoItem}
            </ul>

            
            <AddNewPage name = {"Add new ToDo"} category={list} addNewPageToState={addNewPageToState}/>
        
        
        
        </>
    )


}

export default ToDoList;