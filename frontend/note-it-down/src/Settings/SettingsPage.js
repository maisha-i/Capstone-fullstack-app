import "./Settings.css"
import { RiUser3Fill} from "react-icons/ri";
import { CgDisplaySpacing } from "react-icons/cg";
import { MdPrivacyTip } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { useRef } from "react";

const SettingsPage = () => {

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
                        <h1>Personal Info</h1>
                        <h2>Full Name</h2>
                        <input type="text" className="input" />

                        <h2>Email</h2>
                        <input type="email" className="input"  />

                        <h2>Password</h2>
                        <input type="password" className="input"  />    

                        <div>              
                        <button>Update</button>
                        </div> 
                    </div>        

                    <div ref={appearanceRef} className="appearance tabShow">
                        <h1>Appearance</h1>
                        <h2>Display</h2>
                        <button>Dark Mode/ Light Mode</button>
                        <h2>Background</h2>
                        <button>Select a Background</button>
                    </div>                

                    <div ref={privacyRef} className="privacy tabShow">
                        <h1>Privacy</h1>
                        <h2>Terms of Use</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? </p>

                        <h2>Protect your Account</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                    </div>   

                    <div ref={accountRef} className="account tabShow">
                        <h1>Account</h1>
                        <h2>Delete Account</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? </p>
                        <button>Delete</button>
                        
                    </div>  


                </div>
            </div>
        </div>
        </>
    )
}
export default SettingsPage;