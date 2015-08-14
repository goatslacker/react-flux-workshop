import classname from 'classnames'
import React, { Component } from 'react'
import { Link } from 'react-router'
import connectToStores from 'alt/utils/connectToStores'

import ChannelsStore from '../stores/ChannelsStore'

class ChannelList extends Component {
  renderChannel = (channel) => {
    const { name } = channel
    const channelName = name.substr(1)
    const classString = classname({
      'channel-name': true,
      'channel-name-active': this.props.channel == channelName
    })

    return (
      <li key={name} className={classString}>
        <Link to={`/${channelName}`}>{name}</Link>
      </li>
    )
  }

  render() {
    if (this.props.errorMessage) {
      return <div>{this.props.errorMessage}</div>
    }

    return (
      <div>
        <ul className="channel-list">
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    )
  }
}

export default connectToStores({
  getStores() {
    return [ChannelsStore]
  },

  getPropsFromStores() {
    const { channels, errorMessage } = ChannelsStore.getState()
    return {
      channels: Object.keys(channels).map(key => channels[key]),
      errorMessage,
    }
  }
}, ChannelList)
