import React, { Component } from 'react'
import connectToStores from 'alt/utils/connectToStores'

import MessageActions from '../actions/MessageActions'
import ChannelsStore from '../stores/ChannelsStore'
import Message from './Message'

class Channel extends Component {
  renderMessages(messages) {
    if (messages.length) {
      return messages.map(message => <Message {...message} />)
    } else {
      return <div>Start the conversation</div>
    }
  }

  handleKeyPress = (ev) => {
    const { charCode, target } = ev

    if (charCode === 13) {
      MessageActions.messageAdded(this.props.params.channel, target.value)
      this.refs.input.getDOMNode().value = ''
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.renderMessages(this.props.messages)}
        </div>
        <input type="text" ref="input" onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

export default connectToStores({
  getStores() {
    return [ChannelsStore]
  },

  getPropsFromStores(props) {
    const state = ChannelsStore.getState().channels

    return {
      messages: state[props.params.channel]
        ? state[props.params.channel].messages
        : [],
    }
  }
}, Channel)
