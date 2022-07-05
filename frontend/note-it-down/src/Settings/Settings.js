import SettingsPage from "./SettingsPage";



const Settings = ({returnToContents}) => {


    return(
        <>
        <SettingsPage/>
        <button className='back-to-contents' onClick={returnToContents}>Back to Contents</button>
        </>
    )
}
export default Settings;