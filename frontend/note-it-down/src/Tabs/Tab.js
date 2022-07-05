import './TabContainer.css'

const Tab = ({title, id, clickTab}) => {
    return(
        <div className='tab' id={id} onClick={clickTab} data-title={title}>
            <p id={id} onClick={clickTab} data-title={title}>{title}</p>
        </div>
    )
}

export default Tab