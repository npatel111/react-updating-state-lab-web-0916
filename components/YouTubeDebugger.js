const app = "I don't do much.";
const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };

    this.setBitrate = this.setBitrate.bind(this);
    this.setResolution = this.setResolution.bind(this);

  }

setBitrate() {
  this.setState({
    settings: Object.assign({}, this.state.settings, {bitrate: 12})
  })
}

setResolution() {
  this.setState({
    settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
  })
}

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.setBitrate}>Click me!</button>
        <button className="resolution" onClick={this.setResolution}>Resolution!</button>
      </div>
    );
  }
}

module.exports = YouTubeDebugger;
