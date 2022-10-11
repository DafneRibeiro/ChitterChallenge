import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from 
  "react-toastify";
import logo from '../../src/logo2.png'
const Header = () => {

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Welcome to Chitter ${data.user}`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <header>
      <nav>
        <div className='header'>
        <img className='img' src={logo} alt="chat logo" width="55" height="55" />
        <h1 className='headerTitle'>CHITTER</h1>
        <button className="loginbtn" onClick={logOut}>Log out</button>
        </div>
      </nav>
    </header>
  )
}

export default Header;