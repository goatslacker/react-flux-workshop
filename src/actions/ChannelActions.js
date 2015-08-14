import alt from '../alt'
import axios from 'axios'
import { api } from '../utils/api'

export default alt.createActions({
  displayName: 'ChannelActions',
  channelAdded: channel => {
    return axios.post(api('channel'), {
      channel,
    }).then(res => [channel, res.data])
  },
  channelsFetched: channels => channels,
  channelsFailed: err => err,
})
