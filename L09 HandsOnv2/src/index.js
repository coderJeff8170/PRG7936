import React from 'react';
import ReactDOM from 'react-dom';
import Pictures from './components/Pictures';

/*
Requirements
For this project, you will using an API available with some fake data. Use the below API to list out the first 50 pictures in this data set onto your webpage. [X]

API = 'https://jsonplaceholder.typicode.com/photos'

Step 1
Be sure to include the following:

A component [X]
The state [X]
A componentDidMount() method [X]
Anything else that helps render the information on the page [X]
*/


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            photos: []
        }
    }
    //method to funnel data to state once received
    onReceiveData = (data) => {
        const truncatedData = data.splice(0, 50);
        this.setState({
            photos: truncatedData
        })
    }
    //method to fetch data from API endpoint
    onLoadPics = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            //.then(data => console.log(data))
            .then(data => data.map(item => (
                {
                    id: item.id,
                    thumbnailUrl: item.thumbnailUrl,
                    url: item.url,
                    title: item.title
                }
            )))
            .then(data => this.onReceiveData(data))
    }
    //componentDidMount ideal place to make API call, according to React docs..
    componentDidMount(){
        console.log('component mounted!');
        this.onLoadPics();

    }

    render(){
        return (
            <div style={{textAlign: "center"}}>
                <h1>Lesson 9 Hands On</h1>
                <Pictures photos={this.state.photos} />
            </div>
            );
    }

}


ReactDOM.render(<App />, document.getElementById('root'));