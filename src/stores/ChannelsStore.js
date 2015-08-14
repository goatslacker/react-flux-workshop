import alt from '../alt'

import ChannelActions from '../actions/ChannelActions'

import ChannelSource from '../sources/ChannelSource'

class ChannelsStore {
  static displayName = 'ChannelsStore'

  constructor() {
    this.bindActions(ChannelActions)
    this.registerAsync(ChannelSource)

    this.state = { channels: {} }
  }

  channelCreated(name) {
    const channels = this.state.channels
    channels[name] = { name: `#${name}`, messages: [] }
    this.setState({ channels: channels })
  }

  messageAdded(payload) {
    const { channel, message } = payload
    const channels = this.state.channels

    channels[channel].messages = channels[channel].messages || []

    channels[channel].messages.push(message)

    this.setState({ channels })
  }

  channelsReceived(channels) {
    this.setState({ channels })
  }

  channelsFailed(errorMessage) {
    throw new Error(errorMessage)
  }
}


export default alt.createStore(ChannelsStore)
