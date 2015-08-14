import axios from 'axios'

import ChannelActions from '../actions/ChannelActions'

export default {
  fetchChannels: {
    remote() {
      return axios.get('http://192.168.5.140:1305').then(res => res.data)
    },
    success: ChannelActions.channelsFetched,
    error: ChannelActions.channelsFailed,
  }
}
