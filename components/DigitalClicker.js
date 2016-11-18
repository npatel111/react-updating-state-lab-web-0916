const app = "I don't do much.";
const React = require('react');
class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Update our state here...
    this.setState({
      timesClicked: ++this.state.timesClicked,
    })
    console.log(this.state.timesClicked);
  }

  // number() {
  //   console.log({this.state.timesClicked})
  // }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

module.exports = DigitalClicker;
