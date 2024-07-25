import { useState } from "react";
import Cookies from "js-cookie";
import "./signup.css"
import axios from "axios";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const loginAPI = "http://3.38.98.134/auth/signup";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(loginAPI, {
        userName: userName,
        password: password,
      });
      if (response.data.success) {
        Cookies.set("token", response.data.token, { expires: 7 });
        navigate("/");
      }
      alert(response.data.message);
    } catch (error) {
      console.error("Signup kilganda error chikti", error);
      alert("Signup bolbodu");
    }
  };

  return (
    <>
      <Header/>
        <div className="container">
            <section className="singup__content">
                <h1>Signup</h1>
              <div className="inputs">
                <form  className="form__content" onSubmit={handleSignup}>
                    <input
                            type="text"
                            id="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            name="username"
                            placeholder="Username"
                    />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            placeholder="Password"
                    />
                        <button type="submit">Signup</button>
                  </form>
                </div>
                <div >
                    <h1>Logged</h1>
                    <a href="/login"> Login</a>
                </div>
            </section>
        </div>
      <Footer />
    </>
  );
};
export default Signup;