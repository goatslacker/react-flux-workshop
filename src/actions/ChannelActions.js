import alt from '../alt'

import axios from 'axios'

export default alt.createActions({
  channelCreated(name) {
    return name
  },

  messageAdded(channel, text) {
    return (dispatch) => {
      axios.post('http://172.16.2.101:1305/message', {
        channel,
        message: {
          user: 'Josh',
          avatar: 'https://avatars3.githubusercontent.com/u/10632?v=3&s=460',
          text,
        },
      }).then(res => dispatch({ channel, message: res.data }))
    }
  },

  channelsReceived(payload) {
    return payload.channels
  },

  channelsFailed(errorMessage) {
    return errorMessage
  },
})
