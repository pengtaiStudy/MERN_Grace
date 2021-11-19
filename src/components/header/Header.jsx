import "./header.css" //rfc : short cut

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">React & Node</span>
                <span className="headerTitlesLg">Blog</span>
            </div>
            <img 
            className="headerImg" 
            src="https://images.pexels.com/photos/10012067/pexels-photo-10012067.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
            alt=""/>
            
        </div>
    )
}

