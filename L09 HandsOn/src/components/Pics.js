import React from 'react';
//must include all props here, destructure them in the params
//this is also where your component did update will go to call up the pics?

const Pics = ({photos, onGetPics}) => {
    //limit this to 50 using the slice trick vv

    //photos.map(pic => console.log(pic.title));
    
    // let displayPics = (
    //     <ul>
    //         {photos.map(pic => <li key={pic.id}><a href={pic.url} target="_blank"><img src={pic.thumbnailUrl}></img></a></li>)}
    //     </ul>
    // );
    let displayPics = (
        <div>
            {photos.map(pic => <a key={pic.id} href={pic.url} target="_blank"><img src={pic.thumbnailUrl} alt="should be a thumb"></img></a>)}
        </div>
    );
    // const displayPics = (
    //     <div>
    //         {photos.map(pic => <img key={pic.id} src={pic.url} alt="jfc!!" />)}
    //     </div>
    // );

    return (
        <div>
            <h1>Click Here to see some pics</h1>
            <button onClick={()=>onGetPics()}>Get Pics</button>
    <div>{displayPics}</div>
        </div>
    );
}

// class Pics extends React.Component (props) {
//     constructor(props){
//         super(props);
//     }
//     componentDidMount(){
//         //do something here
//     }
//     render(){
//         const displayPics = (
//             <div>
//                 {photos.map(pic => <img key={pic.id} src={pic.url} alt="jfc!!" />)}
//             </div>
//         );
//         return(
//             <div>
//            <h1>Click Here to see some pics</h1>
//             <button onClick={()=>onGetPics()}>Get Pics</button>
//             <div>{displayPics}</div>
//        </div>
//         );
//     }
// }

// export default class Pics extends React.Component ({photos, onGetPics}){
//     componentDidMount(){
//         //do something here
//     }
//     render(){
//         const displayPics = (
//             <div>
//                 {photos.map(pic => <img key={pic.id} src={pic.url} alt="jfc!!" />)}
//             </div>
//         );
//         return(
//             <div>
//            <h1>Click Here to see some pics</h1>
//             <button onClick={()=>onGetPics()}>Get Pics</button>
//             <div>{displayPics}</div>
//        </div>
//         );
//     }
// }

export default Pics;