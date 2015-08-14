import alt from '../alt'
import axios from 'axios'
import UserStore from '../stores/UserStore'

export default alt.createActions({
  displayName: 'MessageActions',

  messageAdded: (channel, text) => {
    const user = UserStore.getState()
    const message = {
      name: user.name,
      avatar: user.avatar,
      text,
    }
    return axios.post(`http://localhost:1305/message`, {
      channel,
      message,
    }).then(res => [channel, res.data])
  }
})
