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
    const { channels } = this.props

    return (
      <div>
        <ul>
          {Object.keys(channels).map((channelName) => {
            return this.renderChannel(channels[channelName])
          })}
        </ul>
      </div>
    )
  }
}

export default ChannelList
