import alt from '../alt'
import makeHot from 'alt/utils/makeHot'

export default makeHot(alt, {
  displayName: 'ChannelStore',

  state: {
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
})
