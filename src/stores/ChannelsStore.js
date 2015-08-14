import alt from '../alt'
import makeHot from 'alt/utils/makeHot'
import MessageActions from '../actions/MessageActions'
import ChannelActions from '../actions/ChannelActions'
import ChannelSource from '../sources/ChannelSource'

class ChannelsStore {
  static displayName = 'ChannelsStore'

  constructor() {
    this.state = {
      errorMessage: null,
      channels: {},
    }

    this.bindActions(ChannelActions)

    this.bindListeners({
      messageAdded: MessageActions.messageAdded,
    })

    this.registerAsync(ChannelSource)

    this.on('beforeEach', () => {
      this.setState({ errorMessage: null })
    })
  }

  channelAdded([channel, data]) {
    const { channels } = this.state
    channels[channel] = data
    this.setState({ channels })
  }

  channelsFetched(channels) {
    this.setState({ channels })
  }

  channelsFailed(errorMessage) {
    this.setState({ errorMessage })
  }

  messageAdded([channel, message]) {
    const { channels } = this.state
    channels[channel].messages.push(message)
    this.setState({ channels })
  }
}

export default makeHot(alt, ChannelsStore)
