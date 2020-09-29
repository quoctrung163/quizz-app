import React,  { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loadPosts } from './redux/actions/fetchAPI';
import Quizz from './components/quizz/quizz.component';

class App extends Component<any> {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { data, requesting } = this.props.fetchAPI;

    return (
      <div className="container">
        {
          requesting ?
            <div>Loading..........</div>
            :
            (data && data.length > 0) ?
              <div>
                {
                  data.map((item: any) => (
                    <Quizz question={item.question} choices={item.choices} />
                  ))
                }
              </div>
              : <div>Data is empty</div>
        }
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
