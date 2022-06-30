import AddNewPage from './AddNewPage';
import './CategoryComponent.css'

const CategoryComponent = ({category, addNewPageToState}) => {

    const {title, pages} = category;

    return(
        <section>
            <h1>{title}</h1>
            <ul className="contents-page--page-list">
                {pages.map(page => { return(
                    <li className="contents-page--list-item" key={page.id}>{page.title}</li>
                )

                })}
                <AddNewPage category={category} addNewPageToState={addNewPageToState}/>
            </ul>
        
        
        
        
         </section>
    )
}

export default CategoryComponent;