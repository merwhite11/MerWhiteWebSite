import React from 'react';
import YouTube from "react-youtube";
import LazyLoad from 'react-lazyload'

function DanceTile({ videoId }) {
    const options = {
        // height: '100',
        // width: 'auto',
        playerVars: {
            autoplay: 1,
            controls: 1
        }
    }
    // const _onReady = (event) => {
    //     event.target.pauseVideo();
    // }
    return (
        <div className="p-2">
        <LazyLoad height={'50vh'} once>
            <div className="dance-card">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </LazyLoad>
        </div>

    )
}

export default DanceTile;