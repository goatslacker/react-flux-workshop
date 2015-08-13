import alt from '../alt'

export default alt.createActions({
  displayName: 'MessageActions',

  messageAdded: (channel, text) => [channel, {
    name: 'Luke',
    avatar: 'http://fillmurray.com/50/50',
    text,
  }],
})
