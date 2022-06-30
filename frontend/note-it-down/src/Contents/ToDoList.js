import AddNewPage from "./AddNewPage";


const ToDoList = ({list, addNewPageToState}) => {

    const {title, pages} = list;

    const handleToDoCheck = () => {

    }



    return(
        <>
            <h1>To Do List</h1>
            <div>{title}</div>
            {pages.map(page => {
                return(
                    <li key={page.id}>
                        <label htmlFor="toDoList--checkbox">{page.title}</label>
                        <input type="checkbox" name={page.title} id="toDoList--checkbox" onClick={handleToDoCheck}/>
                    </li>
                )
            })}
            <AddNewPage category={list} addNewPageToState={addNewPageToState}/>
        
        
        
        </>
    )


}

export default ToDoList;