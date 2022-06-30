import { useEffect, useState } from 'react';
import AddNewPage from './AddNewPage';
import './CategoryComponent.css'

const CategoryComponent = ({category, addNewPageToState, updateTitle}) => {

    const {id, title, pages} = category;

    const [newTitle, setNewTitle] = useState(title);

    useEffect(() => {
        console.log(newTitle)
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

        document.addEventListener("click", (event) => offClick(event))
        
    }

    
    const offClick = (event) => {
        if(event.target.id !== "newEditInput"){
                console.log("clicked off", newTitle);
                document.removeEventListener("click", offClick)
                updateTitleInDatabase(newTitle)
        }
        console.log(newTitle)

    }


    const updateTitleInDatabase = (titleToChange) => {
        if(title !== titleToChange){
            console.log("Got to here")
            // fetch(`http://127.0.0.1/category/${id}`, {method: "PUT", body: JSON.stringify({title: titleToChange})})
            //     .catch(err => console.log(err))

        }
        console.log("here instead")
    }
        
    return(
        <section>

            <h1 onDoubleClick={handleDoubleClick} className='Category--heading'>{title}</h1>
            <ul className="contents-page--page-list">
                {pages.map(page => { return(
                    <li className="contents-page--list-item" key={page.id}>{page.title}</li>
                )

                })}
                <AddNewPage name={"Add new page"} category={category} addNewPageToState={addNewPageToState}/>
            </ul>
        
        
        
        
         </section>
    )
}

export default CategoryComponent;