import React, { Component } from "react";
import { GrLike, GrDislike } from "react-icons/gr";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: this.props.like,
      dislike: this.props.dislike,
    };
  }

  Like = () => {
    this.setState({
      like: parseInt(this.state.like) + 1,
    });
  };

  Dislike = () => {
    this.setState({
      dislike: parseInt(this.state.dislike) + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.Like}>
          <GrLike />
        </button>
        {this.state.like}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.Dislike}>
          <GrDislike />
        </button>
        {this.state.dislike}
      </div>
    );
  }
}

export default Review;
