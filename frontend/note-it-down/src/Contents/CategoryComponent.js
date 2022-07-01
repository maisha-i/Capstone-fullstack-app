import { useEffect, useState } from 'react';
import AddNewPage from './AddNewPage';
import './CategoryComponent.css'

const CategoryComponent = ({category, addNewPageToState, updateTitle, selectPage}) => {

    const {id, title, pages} = category;

    const [newTitle, setNewTitle] = useState(title);

    useEffect(() => {
        document.addEventListener("click", offClick)

        return(() => {
            document.removeEventListener("click", offClick)
        })
    }, [newTitle])

    const handleDoubleClick = (event) => {
        const heading = event.target
        event.target.innerText = "";
        const newInput = document.createElement("input")
        newInput.type = "text";
        newInput.value = newTitle;
        newInput.id="newEditInput"
        newInput.addEventListener("keyup", (event) => setNewTitle(event.target.value))
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
                    <li className="contents-page--list-item" key={page.id} id={page.id} onClick={selectPage}>{page.title}</li>
                )

                })
        
    return(
        <section>

            <h1 onDoubleClick={handleDoubleClick} id={`Category--heading${id}`}>{title}</h1>
            <ul className="contents-page--page-list">
                {pageListItem}
                <AddNewPage name={"Add new page"} category={category} addNewPageToState={addNewPageToState}/>
            </ul>
        
        
        
        
         </section>
    )
}

export default CategoryComponent;