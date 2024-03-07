import React from 'react';
import YouTube from "react-youtube";
import LazyLoad from 'react-lazyload'

function DanceTile({ videoId }) {
    const options = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 1
        }
    }
    return (
        <div className="d-flex justify-content-center background py-3">
        <LazyLoad height={'50vh'} once className="dance-card-container col-10 col-sm-6">
            <div className="ratio ratio-16x9">

                <iframe
                    width="100%"
                    height="100%"
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