
import Register from "./components/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Cards from "./components/Cards";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [user, setUser] = useState([]);
  
  useEffect(() => {
        const verifyUser = async () => {
            if (!cookies.jwt) {
           
            } else {
        const { data } = await axios.post(
          "http://localhost:4000/",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          
        } else
          console.log(data);
              setUser(data)
      }
    };
        verifyUser();

     }, [cookies, removeCookie]);
 

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Cards user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}
