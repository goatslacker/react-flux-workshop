import alt from '../alt'

export default alt.createActions({
  displayName: 'MessageActions',

  createMessage: text => ({
    name: 'Luke',
    avatar: 'http://fillmurray.com/50/50',
    text,
  }),
})
