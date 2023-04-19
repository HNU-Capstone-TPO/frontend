import Ad from "../components/common/Ad";
import Helper from "../components/Home/Helper";
import Input from "../components/Home/Input";
import './Home.css';
import { useState } from "react";

const Home = () => {
    const [tags, setTags] = useState([]);

    const getTags = (newTag) => {
        setTags([...tags, newTag]);
        console.log(tags);
    }

    return (
        <div className="home">
            <div className="ad"><Ad className="ad"/></div>
            <div className="right">
                <div className="helper" ><Helper tags={tags}/></div>
                <div className="input" ><Input getTags={getTags}/></div>
            </div>
        </div>
    )
}

export default Home;