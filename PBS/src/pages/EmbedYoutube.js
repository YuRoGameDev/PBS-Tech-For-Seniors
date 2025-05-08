import React from 'react';

const EmbedYoutube = ({ youtubeURL }) => {
    return (
        <div className='video-container'>
            <iframe 
            className = "video-iframe"
            src={youtubeURL} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen="true"></iframe>
           
        </div>

    )
};

export default EmbedYoutube;