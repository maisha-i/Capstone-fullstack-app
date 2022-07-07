import { RiLockPasswordFill, RiUser3Fill} from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const UserLogin = ({handleChange, loginFunction}) => {

    return(
       <>   <div className="login-box">
                <div className="login-form"> 

                    <div className="email">
                        {/* value = username set out inline 4  - bind the username and password to the text boxes 
                        value of username = value of text box*/}
                        
                        <MdEmail id="icon-l-email"/><input 
                        type="email" placeholder="Email" id="email" name="email"
                        onChange={handleChange}
                        /> 
                    </div>

                    <div className="password">
                    <RiLockPasswordFill id="icon-l-password"/><input 
                        type="password" placeholder="Password"
                        id="password" name="password"
                        onChange={handleChange} 
                        /> 
                    </div> 
                        <button id="btn-login" type="submit" onClick={loginFunction}>Log In</button> 
                </div>
            </div>
       </> 
    )
}
export default UserLogin;