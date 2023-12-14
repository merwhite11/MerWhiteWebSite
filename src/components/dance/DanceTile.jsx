import React from 'react';
import YouTube from "react-youtube";

function DanceTile({videoId}) {
    const options = {
        height: '315',
        width: '560',
        playerVars: {
            autoplay: 1,
            controls: 1
        }
    }
    // const _onReady = (event) => {
    //     event.target.pauseVideo();
    // }
  return (
    <div className="dance-tile">
        <div className="card">
            <div className="card-body">
                {/* <h2 className="card-title">WRITING</h2> */}
                {/* <p className="card-text"> */}
                <YouTube className = "card-text" videoId={videoId} options={options} id="video"/>
                {/* </p> */}
            </div>
         </div>
    </div>

)
}

export default DanceTile;