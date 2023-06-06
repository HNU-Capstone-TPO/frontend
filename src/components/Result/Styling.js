import { useContext, useState, useEffect } from "react";
import "./Styling.css";
import { SaveItemContext } from "../../contexts/SaveItem";
import { SaveRecommendContext } from "../../contexts/SaveRecommend";
import axios from "axios";

const InfoBox = ({ users, setSelectedProduct, index }) => {
  const { users: savedUsers, setUsers: setSavedUsers } = useContext(SaveItemContext);
  const { recommend, setRecommend } = useContext(SaveRecommendContext);

  const handleCheckboxChange = (e, user) => {
    setSelectedProduct((prevState) => {
      const newSelected = [...prevState];
      if (e.target.checked) {
        newSelected[index] = user;
      } else {
        newSelected[index] = null;
      }
      return newSelected;
    });

    users.forEach((u) => {
      if (u !== user) {
        document.getElementById(`checkbox-${u.id}`).checked = false;
      }
    });
  };

  const handleSaveButtonClick = (user) => {
    setSavedUsers((prevState) => [user, ...prevState]);
  }; /*이부분에서 user랑 ...prevState 바꾸면 역순으로 저장*/

  const handleSaveRecommend = (user) => {

    axios.post("http://127.0.0.1:8000/inter/", { userId: user.id })
      .then((response) => {
        console.log(response.data);
        setRecommend((prevState) => [[...response.data.users, user], ...prevState]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <table className="info-box">
      {users.map((user) => (
        <td className="info-item" key={user.id}>
          <td className="info-detail">
            <td className="info-detail-name">
              {user.name}
            </td>
            <td className="info-detail2">
              <td className="info-item-img">
              <img src={process.env.PUBLIC_URL + user.image} alt={user.name} style={{ width: "100px", height: "100px" }}/>
              </td>
              <td className="info-detail3">
                <div>{user.price}</div> 
                <div>{user.brand}</div>
                <td className="info-detail2">
                  <div >
                    <a href={user.rink} target="_blank" rel="noopener noreferrer">
                      <img src="/img/rink.png" style={{ width: "50px", height: "50px" }}/>
                    </a>
                  </div>
                  <button className="info-item-button" onClick={() => {handleSaveButtonClick(user); handleSaveRecommend(user)}}>찜</button>
                  <td className="info-item-button">
                    <input type="checkbox" id={`checkbox-${user.id}`} onChange={(e) => handleCheckboxChange(e, user)}/>
                    <label for={`checkbox-${user.id}`}></label>
                  </td>
                </td>  
              </td>
            </td >
            
          </td>
        </td>
      ))}
    </table>
  );
};

const CustomButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const Styling = ({ users=[], setSelectedProducts }) => {
  
  const category = ['상의', '하의', '신발', '모자', '아우터', '악세사리'];
  //const [products, setProducts] = useState([]);
  const [boxes, setBoxes] = useState([false, false, false, false, false, false]);
  const [selectedProduct, setSelectedProduct] = useState([null, null, null, null, null, null]);
  //타이틀에 단어로 필터링해서 박스로 보여줌
  const filterProducts = (category) => {
    console.log(users);
    return users.filter((user) => user.part && user.part.includes(category));
  };
  
  const handleClick = (index) => {
    setBoxes((prevState) => {
      const newBoxes = [...prevState];
      newBoxes[index] = !newBoxes[index];
      return newBoxes;
    });
  };
  
  useEffect(() => {
    setSelectedProducts(selectedProduct);
  }, [selectedProduct, setSelectedProducts]);

  return (
    <table className="app">

      {boxes.map((box, index) => (
        <td className="button-container" key={index}>
          <CustomButton onClick={() => handleClick(index)}>
            {category[index]}
          </CustomButton>
          
          {box && (
            <InfoBox
              users={filterProducts(category[index] || [])}
              setSelectedProduct={setSelectedProduct}
              index={index}
            />
          )}
        </td>
      ))}
    </table>
  );
};

export default Styling;