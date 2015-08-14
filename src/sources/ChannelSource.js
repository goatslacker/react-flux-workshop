import ChannelActions from '../actions/ChannelActions'

import axios from 'axios'

export default {
  fetchChannels: {
    remote() {
      return axios.get('http://172.16.2.101:1305').then(res => res.data)
    },

    success: ChannelActions.channelsReceived,
    error: ChannelActions.channelsFailed,
  }
}
