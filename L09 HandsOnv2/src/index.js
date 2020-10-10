import React from 'react';
import ReactDOM from 'react-dom';
import Pictures from './components/Pictures';


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            photos: [],
            test: 'test works!'
        }
    }

    onReceiveData = (data) => {
        const truncatedData = data.splice(0, 50);
        this.setState({
            photos: truncatedData
        })
    }

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

    componentDidMount(){
        console.log('component mounted!');
        this.onLoadPics();

    }

    render(){
        return (
            <div>
                <h1>Working!</h1>
                <Pictures photos={this.state.photos} test={this.state.test} />
            </div>
            );
    }

}


ReactDOM.render(<App />, document.getElementById('root'));