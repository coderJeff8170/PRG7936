import React from 'react';

const Pictures = ({photos, test}) => {
    // const displayPics = test;
    const displayPics = photos.map(pic => <a key={pic.id} href={pic.url} target="_blank"><img src={pic.thumbnailUrl} alt={pic.title}></img></a>);
    return(
    <div>{displayPics}</div>
    );
}

export default Pictures;


