import alt from '../alt'
import makeHot from 'alt/utils/makeHot'
import MessageActions from '../actions/MessageActions'
import UserActions from '../actions/UserActions'
import ChannelSource from '../sources/ChannelSource'

class UserStore {
  static displayName = 'UserStore'

  constructor() {
    this.state = {
      name: 'Luke',
      avatar: 'http://fillmurray.com/50/50',
    }

    this.bindActions(UserActions)
  }

  nameChanged(name) {
    this.setState({ name })
  }
}

export default makeHot(alt, UserStore)
