import React,  { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loadPosts } from './redux/actions/fetchAPI';
import logo from './logo.svg';

class App extends Component<any> {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { data, requesting } = this.props.fetchAPI;

    return (
      <div className="App">
        <header className="App-header">
          {
            requesting ?
              <div>Loading..........</div>
              :
              (data && data.length > 0) ?
              <div>
                  
              </div>
                : <div>Data is empty</div>
          }
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    fetchAPI: state.fetchAPI
  }
}

const mapDispatchToProps = {
  loadPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
