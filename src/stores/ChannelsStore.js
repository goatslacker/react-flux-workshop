import alt from '../alt'
import makeHot from 'alt/utils/makeHot'
import MessageActions from '../actions/MessageActions'

export default makeHot(alt, {
  displayName: 'ChannelsStore',

  bindListeners: {
    messageAdded: MessageActions.messageAdded,
  },

  state: {
    channels: {
      'general': {
        name: '#general',
        messages: [
          {
            name: 'Luke',
            avatar: 'http://fillmurray.com/50/50',
            text: 'Hey there',
          },
          {
            name: 'Han',
            avatar: 'http://fillmurray.com/50/50',
            text: 'Hello',
          },
          {
            name: 'Leia',
            avatar: 'http://fillmurray.com/50/50',
            text: 'Hi everyone',
          },
        ],
      },
      'random': {
        name: '#random',
        messages: [
          {
            name: 'Anakin',
            avatar: 'http://fillmurray.com/50/50',
            text: 'I like turtles',
          },
          {
            name: 'R2D2',
            avatar: 'http://fillmurray.com/50/50',
            text: 'Beep Boop',
          },
        ],
      },
    }
  },

  messageAdded([channel, message]) {
    const channels = this.state.channels
    channels[channel].messages.push(message)
    this.setState({ channels })
  },
})
