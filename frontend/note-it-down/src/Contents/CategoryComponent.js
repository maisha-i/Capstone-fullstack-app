

const CategoryComponent = ({category}) => {

    const {title, pages} = category;

    return(
        <>
            <h1>{title}</h1>
            <ul>
            {pages.map(page => { return(
                <li>{page.title}</li>
            )

            })}

            </ul>
        
        
        
        
        </>
    )
}

export default CategoryComponent;