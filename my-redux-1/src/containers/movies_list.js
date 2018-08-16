import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class MoviesList extends Component {

  componentWillMount() {
    this.props.moviesList();
  }

  renderList = (movies) => {
    if(movies) {
      return movies.map((movie, index) => {
        return (
            <div key = {index}>{movie.name}</div>
        )
        
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Movies </h1>
        {this.renderList(this.props.movies)}
      </div>
    )
  }
};

function mapStateToProps(state) {
  console.log("state....", state);
  return {
    movies: state.movies
  }
};

export default connect(mapStateToProps, actions)(MoviesList);
