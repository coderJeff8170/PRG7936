import React from 'react';
//must include all props here, destructure them in the params
//this is also where your component did update will go to call up the pics?

const Pics = ({photos, onGetPics}) => {
    //limit this to 50 using the slice trick vv
    // let displayPics = (
    //     <ul>
    //         {photos.map(pic => <li><a href={pic.url} target="_blank">{pic.thumbnailUrl}</a></li>)}
    //     </ul>
    // );

    return (
        <div>
            <h1>Click Here to see some pics</h1>
            <button onClick={()=>onGetPics}>Get Pics</button>
    <div></div>
        </div>
    );

}

export default Pics;