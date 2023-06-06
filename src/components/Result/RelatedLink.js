import { useState } from "react";
import './RelatedLink.css';

const RelatedLink = ({user}) => {
    const [hover, setHover] = useState("");
    const handleMouseEnter = (key) => {
        setHover(key);
    }
    const handleMouseLeave = () => {
        setHover("");
    }

    return (
        
        <div className='image-container'>
            <div className="youtube">
            <a 
            href={user.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter("youtube")}
            onMouseLeave={handleMouseLeave}
            >
                <img src="/img/youtube.png" alt="유튜브" width="30%" height="30%" />
            </a>
            </div>

            {hover==="youtube" && <div className="msgbox">{user.y_name}</div>}

            <div className="blog">
            <a href={user.blog} target="_blank" rel="noopener noreferrer"
             onMouseEnter={() => handleMouseEnter("blog")}
             onMouseLeave={handleMouseLeave}>
                <img src="/img/blog.png" alt="블로그" width="30%" height="30%" />
            </a>
            {hover === "blog" && <div className="msgbox">{user.b_name}</div>}
            </div>
        </div>
    );
};

export default RelatedLink;