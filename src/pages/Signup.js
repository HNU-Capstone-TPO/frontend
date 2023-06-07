import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

const Signup= () => {
    const [user, setUser] = useState({ id: "", password: "" });
    const navigate = useNavigate();

    const handleSignup = () => {
        localStorage.setItem("user", JSON.stringify(user));
      navigate('/');
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
      };
  
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <div style={{border: "1px solid black", borderRadius: "5px", width: "30%", height: "50%", position: "absolute", top: "20%"}}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "100%", padding: "20px" }}>
      <div className="top" style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", fontSize: "30px", fontWeight: "bold", marginLeft: "30px"}}>
        <img 
                src={process.env.PUBLIC_URL + '/img/logo.png'} 
                alt="Logo"
                style={{ height: '70px'}} />
        <label>회원 가입</label>
        </div>
            <TextField
             style={{ marginBottom: "-30px", width: "400px" }}
          id="demo-helper-text-misaligned-no-helper"  
          name="id" 
          value={user.id} 
          label="아이디" 
          onChange={handleChange}/>
            
            <TextField 
            style={{ marginBottom: "-30px", width: "400px" }}
            id="demo-helper-text-misaligned-no-helper"  name="password" value={user.password} label="비밀번호" onChange={handleChange}/>
            <TextField 
            style={{ marginBottom: "-30px", width: "400px" }}
             id="demo-helper-text-misaligned-no-helper" label="비밀번호 확인" />
            <TextField 
            style={{ width: "400px" }}
            id="demo-helper-text-misaligned-no-helper" label="닉네임" />
          
            <div className="bottom-part" style={{ width: "100%",display: "flex", justifyContent: "flex-end"}}>
            <button onClick={handleSignup} style={{ border: "none", borderRadius: "5px", backgroundColor: "#4242e6", color: "white", width: "100px"}}>Sign Up</button>
            </div>
          </div>
          </div>
        </div>
      );
  }
export default Signup;