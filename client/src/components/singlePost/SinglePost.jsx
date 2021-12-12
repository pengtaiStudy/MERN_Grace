import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./singlePost.css"

export default function SinglePost() {
    const location  = useLocation()
    const path = location.pathname.split("/")[2];

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/"+path);
            console.log(res);
        }
        getPost()
    },[path])
    return (
        <div className = "singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" 
                className="singlePostImg" />
                <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Sue</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, expedita id! Magni aut eligendi tenetur fugiat consequuntur saepe illo quasi pariatur nostrum, nisi neque culpa quis quidem quos nemo mollitia.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, expedita id! Magni aut eligendi tenetur fugiat consequuntur saepe illo quasi pariatur nostrum, nisi neque culpa quis quidem quos nemo mollitia.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, expedita id! Magni aut eligendi tenetur fugiat consequuntur saepe illo quasi pariatur nostrum, nisi neque culpa quis quidem quos nemo mollitia.
                </p>
            </div>         
        </div>
    )
}
