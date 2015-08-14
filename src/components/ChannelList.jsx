import React, { Component } from 'react'
import { Link } from 'react-router'

class ChannelList extends Component {
  renderChannel(channel) {
    return (
      <li key={channel.name}>
        <Link to={`/${channel.name.substr(1)}`}>{channel.name}</Link>
      </li>
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    )
  }
}

export default ChannelList
