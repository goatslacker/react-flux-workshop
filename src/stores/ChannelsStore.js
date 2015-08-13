import alt from '../alt'
import makeHot from 'alt/utils/makeHot'

export default makeHot(alt, {
  displayName: 'ChannelsStore',

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
})
