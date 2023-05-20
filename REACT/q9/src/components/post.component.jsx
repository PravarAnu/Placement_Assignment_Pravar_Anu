import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const Post = ({post})=>{

    const {theme} = useContext(ThemeContext);

    const {title, body} = post
    return (
        <div className={`post ${theme}-theme`}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Post;