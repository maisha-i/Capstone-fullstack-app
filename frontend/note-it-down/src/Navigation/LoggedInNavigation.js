import ContentPage from '../Contents/ContentPage'

const LoggedInNavigation = ({user, logout}) => {
 return(
     <> 
        <button onClick={logout}>Logout</button>
        <ContentPage user={user} />
     </>
 )
}

export default LoggedInNavigation;