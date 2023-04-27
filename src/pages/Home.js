import Ad from "../components/common/Ad";
import Helper from "../components/Home/Helper";
import Input from "../components/Home/Input";
import './Home.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Home = () => {
    
    const [tags, setTags] = useState([]);
    const [query, setQuery] = useState([]);
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = () => {
    const formData = new FormData();
    formData.append("query", tags);
    axios
      .post("http://127.0.0.1:8000/search/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setUsers(response.data.users);
        navigate('/result', {
            state: { users: response.data.users },
        });
      })
      .catch((error) => {
        console.error(error);
      });
    setQuery(tags);
  };

    const getTags = (newTag) => {
        setTags([...tags, newTag]);
        console.log(tags);
    }

    
    
    return (
        <div className="home">
            <div className="ad"><Ad /></div>
            <div className="right">
                <div className="helper" ><Helper tags={tags}/></div>
                <div className="input" ><Input onSubmit={handleSubmit} getTags={getTags}/></div>
            </div>
        </div>
    )
}

export default Home;