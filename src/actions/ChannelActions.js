import alt from '../alt'
import axios from 'axios'
import { api } from '../utils/api'

export default alt.createActions({
  displayName: 'ChannelActions',

  channelAdded: channel => {
    return (dispatch) => {
      axios.post(api('channel'), {
        channel,
      }).then(res => dispatch([channel, res.data]))
    }
  },

  channelsFetched: channels => channels,

  channelsFailed: err => err,
})
