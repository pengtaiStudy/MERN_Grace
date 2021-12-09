import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src ="https://images.pexels.com/photos/8697935/pexels-photo-8697935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Expedita, cupiditate porro quasi et vitae fuga recusandae 
                    placeat blanditiis necessitatibus!
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-github"></i>
                    <i className="sidebarIcon fab fa-google"></i>  
                </div>
            </div>
        </div>
    )
}
