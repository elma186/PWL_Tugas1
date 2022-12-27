import React, { Component } from "react";

class Waktu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waktu: props.start,
    };
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state) => ({
      waktu: parseInt(state.waktu) + 1,
    }));
  }

  render() {
    return <div>Duration: {this.state.waktu} Detik</div>;
  }
}

export default Waktu;
