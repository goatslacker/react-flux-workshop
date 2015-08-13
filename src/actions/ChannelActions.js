import alt from '../alt'

export default alt.createActions({
  displayName: 'ChannelActions',
  channelsFetched: channels => channels,
  channelsFailed: err => err,
})
