import React, { Component } from 'react'
import { Link } from 'react-router'
import connectToStores from 'alt/utils/connectToStores'

import ChannelsStore from '../stores/ChannelsStore'

class ChannelList extends Component {
  renderChannel(channel) {
    const { name } = channel
    return (
      <li key={name}>
        <Link to={`/${name.substr(1)}`}>{name}</Link>
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

export default connectToStores({
  getStores() {
    return [ChannelsStore]
  },

  getPropsFromStores() {
    return {
      channels: ChannelsStore.getState().channels,
    }
  }
}, ChannelList)
