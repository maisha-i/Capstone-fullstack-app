import './TabContainer.css'
import Tab from './Tab';
import { useState, useEffect } from 'react';

const TabContainer = ({clickTab}) => {

    const currentUserId = sessionStorage.getItem("userId");
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch(`http://127.0.0.1:8080/user/${currentUserId}/categories`)
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    const tabList = categories.filter(category => category.title !== "To Do List").map( category => {
        return(
            <Tab title={category.title} id={category.id} key={category.id} clickTab={clickTab} />
        )
    })

    return(
        <>
            <div className="tabContainer">
                {tabList}
            </div>
        </>
    )
}

export default TabContainer;