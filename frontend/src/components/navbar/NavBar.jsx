import { Link } from "react-router-dom"
import "./navbar.css"

export default function NavBar() {
  const user=false;

  return (
    <div className='nav'>
        <div className="navLeft">
          <img className="logo"
          src="/assets/entelogo.PNG" 
          alt="entelturk"/>
            <i className="navIcon fa-brands fa-linkedin"></i>
        <i className="navIcon fa-brands fa-youtube"></i>
        <i className="navIcon fa-brands fa-instagram"></i>
        </div>
        <div className="navCenter">
           
            <ul className="navList">
                <li className="navListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="navListItem"><Link className="link" to="/about">ABOUT</Link></li>
                <li className="navListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                <li className="navListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="navListItem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="navRight">
          {user ?(
             <img 
             className="navImg"
             src="/assets/AvatarMaker.png"
             alt="profile"/>
          ):(
            <ul className="navList">
              <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
                </Link>
              </li>
              <li className="navListItem">
              <Link className="link" to="/register">
                  REGISTER
                  </Link>
              </li>
              
            </ul>
            
          )}
         
      
           
        </div>
    </div>
  )
}
