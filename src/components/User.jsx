import React, { Component } from 'react'
import connectToStores from 'alt/utils/connectToStores'

import UserStore from '../stores/UserStore'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default connectToStores({
  getStores() {
    return [UserStore]
  },

  getPropsFromStores(props) {
    const state = UserStore.getState()

    return {
      name: UserStore.getState().name
    }
  }
}, User)
