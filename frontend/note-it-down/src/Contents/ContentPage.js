import { useEffect, useState } from "react";
import CategoryComponent from "./CategoryComponent";



const ContentPage = () => {

    const currentUserId = 1;
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch(`http://127.0.0.1:8080/user/${currentUserId}/categories`)
            .then(response => response.json())
            .then(data => setCategories(data))
    }
    ,[categories])



    return(
        <>
                {categories.map( category => {
                    return(
                        <CategoryComponent category={category}/>
                    )
                })}


        
        </>
    );


}

export default ContentPage;