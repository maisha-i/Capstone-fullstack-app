import AddNewPage from './AddNewPage';
import './CategoryComponent.css'

const CategoryComponent = ({category, addNewPageToState, selectPage}) => {

    const {title, pages} = category;

    return(
        <section>
            <h1>{title}</h1>
            <ul className="contents-page--page-list">
                {pages.map(page => { return(
                    <li key={page.id} id={page.id} onClick={selectPage} >{page.title}</li>
                )

                })}
                <AddNewPage category={category} addNewPageToState={addNewPageToState}/>
            </ul>
        
        
        
        
         </section>
    )
}

export default CategoryComponent;