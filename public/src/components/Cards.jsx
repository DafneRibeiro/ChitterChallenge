import React from "react";
import { ToastContainer } from 
  "react-toastify";
import Header from '../components/Header'
import Footer from "./Footer";
import Peep from "./Peep"
import PeepFeed from "./PeepFeed";


export default function Cards({user}) {

  
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="mainfeed">
        <div>
          <Peep user={user} />
        </div>
        <div id="feedbox">
          <PeepFeed />
        </div>
      </div>
      <Footer />
    </>
  );
}
