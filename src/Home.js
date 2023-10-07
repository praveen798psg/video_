import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const [roomID, setRoomID] = useState();
  const navigate = useNavigate();
  const handleJoin = () => {
    const p = document.getElementById("userinput").value;
    if(p ==='Psgpraveen'){
      navigate(`/room/${roomID}`);
    }else{
      document.getElementById("output").innerHTML ='Please Enter Valid Room Id'
    }
  };
  
  return (
      <div class="card text-center m-5" >
        <div class="card-header">Video Calling Website..</div>
        <div class="card-body">
          <h5 class="card-title">Enter Room ID to join</h5>
          <input
            placeholder="Enter Room ID"
            type="text"
            id="userinput"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
          ></input>
<br></br>
          <button class="btn btn-primary my-3" onClick={handleJoin}>
            Join
          </button>
          <p id="output"></p>
        </div>
        <div class="card-footer text-body-secondary">By default Room ID (Psgpraveen)</div>
      </div>
  );
}

export default Home;
