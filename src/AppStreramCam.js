import React, {useEffect} from 'react'

const AppStreamCam = () => {

  const streamCamVideo = () => {
  var constraints = { audio: true, video: { width: 1280, height: 720 } };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(mediaStream) {
      var video = document.querySelector("video");
      video.srcObject = mediaStream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    }); 
    
    // always check for errors at the end.
      // navigator.mediaDevices.enumerateDevices().then(sourceInfos => {
      // console.log(sourceInfos);
      // let videoSourceId;
      // for (let i = 0; i < sourceInfos.length; i++) {
      //   const sourceInfo = sourceInfos[i];
      //   if(sourceInfo.kind == "videoinput" && sourceInfo.facing == (isFront ? "front" : "back")) {
      //     videoSourceId = sourceInfo.deviceId;
      //   }
      // }
      
      // })
  }

  useEffect(()=>{
    streamCamVideo()
  },[])

  return (
    <div>
        <video autoPlay={true} id="videoElement" ></video>
    </div>
  );
}

export default AppStreamCam