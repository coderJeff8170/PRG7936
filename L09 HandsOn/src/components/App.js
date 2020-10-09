import React from 'react';
import Pics from './Pics';
import { connect } from 'react-redux';
import { onReceiveData, getData } from '../actions/actions';


//App needs to be class based component
//App needs to pass props to pics component
//mapStateToProps needs to happen here
//mapDispatchToProps needs to happen here too

class App extends React.Component {
    render(){
        return (
            <div>
                <Pics {...this.props}/>
            </div>
            );
    }
}

// componentDidMount() {

// }



function mapDispatchToProps(dispatch){
    return {
        onGetPics: () => getData().then(pics => dispatch(onReceiveData(pics)))
    }
}

function mapStateToProps (state) {
    return{
        photos: state.photos
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);