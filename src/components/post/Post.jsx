import "./post.css"
//https://images.pexels.com/photos/8998297/pexels-photo-8998297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500

export default function Post() {
    return (
        <div className="post">
            <img className="postImg"
                src="https://images.pexels.com/photos/5097165/pexels-photo-5097165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum debitis aliquam ea, reiciendis animi officiis quibusdam vero sunt delectus corporis, pariatur sapiente iusto. Accusantium, perspiciatis sit. Architecto, quis at?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum debitis aliquam ea, reiciendis animi officiis quibusdam vero sunt delectus corporis, pariatur sapiente iusto. Accusantium, perspiciatis sit. Architecto, quis at?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum debitis aliquam ea, reiciendis animi officiis quibusdam vero sunt delectus corporis, pariatur sapiente iusto. Accusantium, perspiciatis sit. Architecto, quis at?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum debitis aliquam ea, reiciendis animi officiis quibusdam vero sunt delectus corporis, pariatur sapiente iusto. Accusantium, perspiciatis sit. Architecto, quis at?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum debitis aliquam ea, reiciendis animi officiis quibusdam vero sunt delectus corporis, pariatur sapiente iusto. Accusantium, perspiciatis sit. Architecto, quis at?
            </p>
        </div>
    )
}
