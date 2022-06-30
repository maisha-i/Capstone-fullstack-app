import { useState } from "react";
import AddNewPage from "./AddNewPage";


const ToDoList = ({list, addNewPageToState}) => {

    const {title, pages} = list;



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

            event.target.checked="false";

        }
    }




    return(
        <>
            <h1>{title}</h1>
            {pages.map(page => {
                if(page.content !== "checked"){
                    return(
                        <li key={page.id}>
                            <label id={`toDoList--label-id${page.id}`} htmlFor={`toDoList--checkbox-id${page.id}`}>{page.title}</label>
                            <input data-id={page.id} type="checkbox" name={page.title} id={`toDoList--checkbox-id${page.id}`} onClick={(event) => handleToDoCheck(event, page.title, page.id)}/>
                        </li>
                    )
                }
                else{
                    return(
                        <li key={page.id}>
                            <label style={{textDecoration: "line-through", color: "grey"}} id={`toDoList--label-id${page.id}`} htmlFor={`toDoList--checkbox-id${page.id}`}>{page.title}</label>
                            <input checked = "true" data-id={page.id} type="checkbox" name={page.title} id={`toDoList--checkbox-id${page.id}`} onClick={(event) => handleToDoCheck(event, page.title, page.id)}/>
                        </li>
                    )
                }

            })}
            <AddNewPage category={list} addNewPageToState={addNewPageToState}/>
        
        
        
        </>
    )


}

export default ToDoList;