<<<<<<< HEAD
// import './CategoryComponent.css'

// const CategoryComponent = ({category}) => {
=======
import AddNewPage from './AddNewPage';
import './CategoryComponent.css'

const CategoryComponent = ({category, addNewPageToState}) => {
>>>>>>> main

//     const {title, pages} = category;

<<<<<<< HEAD
//     return(
//         <section>
//             <h1>{title}</h1>
//             <ul className="contents-page--page-list">
//             {pages.map(page => { return(
//                 <li key={page.id}>{page.title}</li>
//             )

//             })}
//             </ul>
=======
    return(
        <section>
            <h1>{title}</h1>
            <ul className="contents-page--page-list">
                {pages.map(page => { return(
                    <li key={page.id}>{page.title}</li>
                )

                })}
                <AddNewPage category={category} addNewPageToState={addNewPageToState}/>
            </ul>
>>>>>>> main
        
        
        
        
//         </section>
//     )
// }

// export default CategoryComponent;