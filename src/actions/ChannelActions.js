import alt from '../alt'

export default alt.createActions({
  channelCreated(name) {
    return name
  },

  messageAdded(channel, text) {
    return  { channel, text }
  },

  channelsReceived(payload) {
    return payload.channels
  },

  channelsFailed(errorMessage) {
    return errorMessage
  },
})
