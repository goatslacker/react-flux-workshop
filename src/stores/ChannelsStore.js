import alt from '../alt'
import makeHot from 'alt/utils/makeHot'

export default makeHot(alt, {
  displayName: 'ChannelsStore',

  state: {
    channels: [
      { name: '#general' },
      { name: '#random' },
    ]
  },
})
