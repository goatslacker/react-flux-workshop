import alt from '../alt'
import axios from 'axios'

export default alt.createActions({
  displayName: 'ChannelActions',
  channelAdded: channel => {
    return axios.post(`http://localhost:1305/channel`, {
      channel,
    }).then(res => [channel, res.data])
  },
  channelsFetched: channels => channels,
  channelsFailed: err => err,
})
