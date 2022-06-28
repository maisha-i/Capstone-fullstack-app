import './CategoryComponent.css'

const CategoryComponent = ({category}) => {

    const {title, pages} = category;

    return(
        <section>
            <h1>{title}</h1>
            <ul className="contents-page--page-list">
            {pages.map(page => { return(
                <li key={page.id}>{page.title}</li>
            )

            })}
            </ul>
        
        
        
        
        </section>
    )
}

export default CategoryComponent;