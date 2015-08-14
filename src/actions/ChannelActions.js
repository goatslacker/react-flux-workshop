import alt from '../alt'

export default alt.createActions({
  channelCreated(name) {
    return name
  },

  messageAdded(channel, text) {
    return  { channel, text }
  },
})
