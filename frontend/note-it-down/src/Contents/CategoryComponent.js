import { useEffect, useState } from 'react';
import AddNewPage from './AddNewPage';
import './CategoryComponent.css'
import { ImBin2 } from "react-icons/im";


const CategoryComponent = ({category, addNewPageToState, updateTitle, selectPage, handleDeleteCategory}) => {

    const {id, title, pages} = category;

    const [newTitle, setNewTitle] = useState("");

    useEffect(() => {
        document.addEventListener("click", offClick)

        return(() => {
            document.removeEventListener("click", offClick)
        })
    }, [newTitle])

    useEffect(() => {
        document.removeEventListener("click", offClick)
    }, [])


    const handleDoubleClick = (event) => {
        setNewTitle(event.target.innerText)
        const heading = event.target
        const newInput = document.createElement("input")
        newInput.type = "text";
        newInput.value = event.target.innerText;
        newInput.id="newEditInput"
        newInput.addEventListener("keyup", (event) => setNewTitle(event.target.value))
        heading.innerText = "";
        heading.appendChild(newInput);

        // document.addEventListener("click", offClick)
        
    }
 
  
    
    const offClick = (event) => {
        if(event.target.id !== "newEditInput"){
                document.removeEventListener("click", offClick)
                updateTitleInDatabase()
                
                const inputBox = document.getElementById("newEditInput");
                inputBox.remove();

                const heading = document.querySelector(`#Category--heading${id}`);
                heading.innerHTML = "";
                heading.innerText = newTitle;
                window.location.reload();
        }
    }


    const updateTitleInDatabase = () => {
        if(title !== newTitle){
            console.log("Different title:", newTitle)

            fetch(`http://127.0.0.1:8080/category/${id}`, {
                method: "PUT", 
                body: JSON.stringify({title: newTitle}),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .catch(err => console.log(err))

        }
    }

    const pageListItem = pages.map(page => { return(
                    <li className="contents-page--list-item" data-title={page.category.title} data-category = {page.category.id} key={page.id} id={page.id} onClick={selectPage}>{page.title}</li>
                )

                })
        
    return(
        <section className='category-content'>
        
            <h1 onDoubleClick={handleDoubleClick} id={`Category--heading${id}`}>{title}</h1>
            
            <ul className="contents-page--page-list">
                {pageListItem}
                <AddNewPage name={"+"} category={category} addNewPageToState={addNewPageToState}/>
            </ul>
            
            <button id="deleteCategoryButton" onClick={() => {
                handleDeleteCategory(category.id)
            }}><ImBin2/></button>
         </section>
    )
}

export default CategoryComponent;