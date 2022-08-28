import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarItem">
           <span className="sidebarTitle">ABOUT ME</span>
               <img src="/assets/AvatarMaker.png" 
               alt="Profile" />
               
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur reiciendis optio et tenetur! 

               </p>
           
       </div>
       <div className="sidebarItem">
           <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
               <li className="sidebarListItem">Blockchain</li>
               <li className="sidebarListItem">Blockchain</li>
               <li className="sidebarListItem">Blockchain</li>
               <li className="sidebarListItem">Blockchain</li>
               <li className="sidebarListItem">Blockchain</li>
           </ul>
       </div>
       <div className="sidebarItem">
           <span className="sidebarTitle">FOLLOW US</span>
           <div className="sidebarSocial">
           <i className="sidebarIcon fa-brands fa-linkedin"></i>
           <i className="sidebarIcon fa-brands fa-youtube"></i>
           <i className="sidebarIcon fa-brands fa-instagram"></i>
           </div>
       </div>
    </div>
  )
}
