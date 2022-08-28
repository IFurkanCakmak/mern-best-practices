import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTittle">
                <span className="settingsUpdateTitle">Update Your account</span>
                <span className="settingsDeleteTitle">Delete Your account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src="/assets/AvatarMaker.png"
                     alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="furkan" />
                <label>Email</label>
                <input type="email" placeholder="furkan@gmail.com" />
                <label>Password</label>
                <input type="password" placeholder='***'/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
            <Sidebar/>        
    </div>
  )
}
