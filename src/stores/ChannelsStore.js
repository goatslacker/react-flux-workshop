import alt from '../alt'

import ChannelActions from '../actions/ChannelActions'

class ChannelsStore {
  static displayName = 'ChannelsStore'

  constructor() {
    this.bindActions(ChannelActions)

    this.state = {
      channels: {
        react: {
          name: '#react',
          messages: [
            {
              user: 'Luke Skywalker',
              avatar: 'http://placecage.com/50/50',
              text: 'Hello!',
            },
          ],
        },
        wyncode: { name: '#wyncode', messages: [] },
        flux: {
          name: '#flux',
          messages: [
            {
              user: 'Anakin Skywalker',
              avatar: 'http://placecage.com/51/51',
              text: 'Sup',
            },
          ],
        },
        javascript: { name: '#javascript', messages: [] },
        miami: { name: '#miami', messages: [] },
      }
    }
  }

  channelCreated(name) {
    const channels = this.state.channels
    channels[name] = { name: `#${name}`, messages: [] }
    this.setState({ channels: channels })
  }

  messageAdded(payload) {
    const { channel, text } = payload
    const channels = this.state.channels

    channels[channel].messages = channels[channel].messages || []

    channels[channel].messages.push({
      user: 'R2D2',
      avatar: 'http://placecage.com/49/49',
      text,
    })

    this.setState({ channels })
  }
}


export default alt.createStore(ChannelsStore)
