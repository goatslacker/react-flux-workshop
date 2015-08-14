import React, { Component } from 'react'
import { Input } from 'react-bootstrap'
import connectToStores from 'alt/utils/connectToStores'
import UserActions from '../actions/UserActions'
import UserStore from '../stores/UserStore'

class User extends Component {
  changeName(e) {
    UserActions.nameChanged(e.target.value)
  }

  render() {
    return (
      <div>
        <hr/>
        <label>Your handle</label>
        <Input type="text" value={this.props.name} onChange={this.changeName} />
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
