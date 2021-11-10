import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-github"></i>
            <i className="topIcon fab fa-google"></i>
            </div>
          <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src = "https://images.pexels.com/photos/8551174/pexels-photo-8551174.jpeg?cs=srgb&dl=pexels-dilruba-sar%C4%B1%C3%A7imen-8551174.jpg&fm=jpg"
                alt=""   />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
