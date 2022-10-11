import React, { useState, useEffect } from "react";
import axios from "axios";
import {  toast } from "react-toastify";
import { useCookies } from "react-cookie";



const Peep = ({user}) => {
  const [cookies] = useCookies(["cookie-name"]);

  useEffect(() => {
    if (cookies.jwt) {
      
    }
  }, [cookies]);

  const [values, setValues] = useState({
    content: ""
  });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    try {
         axios.post(
           "http://localhost:4000/peeps",
           {
             ...values, 
             name: user.name,
             username: user.username,
           },
           { withCredentials: true },
           );
           window.location = '/';
      
    } catch (ex) {
      console.log(ex);
    }
    
  };
  
 
    return (
        <div className="box">

            <form  onSubmit={(e) => handleSubmit(e)}>
          <input 
            maxLength="55"
            type="textarea"
            className='peepbox'
            placeholder="Your peep goes here"
            name="content"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            
          />
          
                <button  data-testid='button' className="send" type="submit" >Peep Peep</button> 
                
            </form>
         </div>
    );
}

export default Peep;