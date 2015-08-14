import axios from 'axios'
import { api } from '../utils/api'

import ChannelActions from '../actions/ChannelActions'

export default {
  fetchChannels: {
    remote() {
      return axios.get(api()).then(res => res.data)
    },
    success: ChannelActions.channelsFetched,
    error: ChannelActions.channelsFailed,
  }
}
