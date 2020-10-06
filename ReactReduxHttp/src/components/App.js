import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Search Repos:</h3>
        <Search />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);