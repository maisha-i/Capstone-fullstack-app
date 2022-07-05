import "./Settings.css"
import { RiUser3Fill} from "react-icons/ri";
import { CgDisplaySpacing } from "react-icons/cg";
import { MdPrivacyTip } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { useRef } from "react";
import Appearance from "./Appearance";
import Privacy from "./Privacy";
import Account from "./Account";
import Profile from "./Profile";

const Settings = ({returnToContents}) => {

    const profileRef = useRef();
    const appearanceRef = useRef();
    const privacyRef = useRef();
    const accountRef = useRef();
    
    const tabClick = document.querySelectorAll(".tab");
    const tab = [profileRef, appearanceRef, privacyRef, accountRef]

    function tabs(panelIndex) {
        tab.forEach(function(node){
            node.current.style.display = "none";
        });
        tab[panelIndex].current.style.display = "block";
    } 


       

    return(
        <>
            <div className="container-settings">
                <div className="container-box">
                    <div className="leftbox">
                        <nav>
                            <a onClick={() => tabs(0)} className="tab active">
                            <RiUser3Fill />
                            </a>
                            <a onClick={() => tabs(1)} className="tab">
                            <CgDisplaySpacing />
                            </a>
                            <a onClick={() => tabs(2)} className="tab">
                            <MdPrivacyTip />
                            </a>
                            <a onClick={() => tabs(3)} className="tab">
                            <AiFillSetting />
                            </a>
                        </nav>
                    </div>

                    <div className="rightbox">
                        <div ref={profileRef}  className="profile tabShow">
                            <Profile />            
                        </div> 

                        <div ref={appearanceRef} className="appearance tabShow">
                            <Appearance/>
                        </div>                

                        <div ref={privacyRef} className="privacy tabShow">
                            <Privacy/>
                        </div>   

                        <div ref={accountRef} className="account tabShow">
                            <Account/>
                        </div>  
                    </div>
                </div>
            </div>

        <button className='back-to-contents' onClick={returnToContents}>Back to Contents</button>
        </>
    )
}
export default Settings;