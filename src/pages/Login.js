import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/LoggedIn";

const Login = () => {
  const [user, setUser] = useState({ id: "", password: "" });
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;
  const setIsLoggedIn = authContext.toggleLogin;
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (user.id === storedUser.id && user.password === storedUser.password) {
      alert("로그인 성공!");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>아이디</label>
        <input type="text" name="id" placeholder="ID" value={user.id} onChange={handleChange} />
        <label>비밀번호</label>
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

export default Login;