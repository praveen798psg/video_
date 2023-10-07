import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import "./App.css";


function Room() {
    const {roomID}=useParams();
    let myMeeting = async (element) =>{
        const appID = 505030697;
      const serverSecret = "462b75502fdcc288e8f84801f940fe37";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),"Psgpraveen");
      const zp = ZegoUIKitPrebuilt.create(kitToken);


      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }
  return (
    <div
    className="myCallContainer"
    ref={myMeeting}
    style={{margin:'1rem auto', width: '100vh', height: '100vh' }}
  ></div>
  )
}

export default Room
