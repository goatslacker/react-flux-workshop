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
        javascript: { name: '#javascript' },
        miami: { name: '#miami' },
      }
    }
  }


  channelCreated(name) {
    const channels = this.state.channels
    channels[name] = { name: `#${name}` }
    this.setState({ channels: channels })
  }
}


export default alt.createStore(ChannelsStore)
