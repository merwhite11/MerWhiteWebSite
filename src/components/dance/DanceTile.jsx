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
            <div className="dance-card">
                <YouTube className = "card-text" videoId={videoId} options={options} id="video"/>
            </div>
         </div>

)
}

export default DanceTile;