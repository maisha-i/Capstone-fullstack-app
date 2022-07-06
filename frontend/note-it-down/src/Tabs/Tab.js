import { useEffect, useState } from 'react';
import './TabContainer.css'

const Tab = ({title, id, clickTab, categoryId}) => {

    const longTitle = (title.length > 10);

    const [currentTab, setCurrentTab] = useState(id == categoryId);

    useEffect(() => {setCurrentTab(id == categoryId)}, [categoryId])

    

    return(
        <div className='indivdualTabContainer'>
        <div className={currentTab? 'tabTriangleBefore active':'tabTriangleBefore'} 
            id={id} onClick={clickTab} data-title={title}></div>
        <div className={currentTab ? 'tab active':'tab'} id={id} onClick={clickTab} data-title={title}>
            <p id={id} onClick={clickTab} data-title={title}>
                {longTitle ?  title.substr(0, 10) + "..." : title}
            </p>
        </div>
        <div className={currentTab? 'tabTriangleAfter active':'tabTriangleAfter'} 
            id={id} onClick={clickTab} data-title={title}></div>
        </div>
    )
}

export default Tab