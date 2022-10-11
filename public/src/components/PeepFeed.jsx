import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import moment, { locales } from 'moment'


function PeepFeed() {
  const [peeps, setPeeps] = useState([]);
  

  const loadPeeps = async () => {
    const response = await axios.get(`http://localhost:4000/peeps`)
    const peepData = response.data
    console.log(response.data)
    setPeeps([...peepData].reverse());
    
    
      
  }
  useEffect(() => {
    loadPeeps();

  }, []);

  
  return (
    <div>
      {peeps?.map(peep => (
        <div key={peep._id} id='peepfeedbox'>
         <p style={{fontWeight:"bold"}} id='peepHeader'>{peep.name}  @{peep.username}</p>
          <p style={{insetInlineEnd:"200px", lineBreak:"auto", lineHeight:"26pt"}} id='peepBody'>{peep.content}</p>
          <p id='time' style={{ color: "gray", fontSize:'0.9rem', marginLeft:'60%' }}><small>{moment(peep.createdAt).format('LLL').toLocaleString(locales)}</small></p>

        </div>
      ))}
      
    </div>
  )
}

export default PeepFeed;
