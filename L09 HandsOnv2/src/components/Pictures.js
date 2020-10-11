import React from 'react';
// component renders pic thumbnails as links to larger pics
const Pictures = ({ photos }) => {
    // const displayPics = test;
    const displayPics = photos.map(pic => <a key={pic.id} href={pic.url} target="_blank"><img src={pic.thumbnailUrl} alt={pic.title}></img></a>);
    return(
    <div>{displayPics}</div>
    );
}

export default Pictures;


