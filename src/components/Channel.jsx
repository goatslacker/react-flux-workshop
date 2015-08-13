import React, { Component } from 'react'
import connectToStores from 'alt/utils/connectToStores'

import ChannelStore from '../stores/ChannelStore'
import Message from './Message'


class Channel extends Component {
  renderMessages(messages) {
    if (messages.length) {
      return messages.map(message => <Message {...message} />)
    } else {
      return <div>Start the conversation</div>
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.renderMessages(this.props.messages)}
        </div>
        <textarea />
      </div>
    )
  }
}

export default connectToStores({
  getStores() {
    return [ChannelStore]
  },

  getPropsFromStores() {
    const state = ChannelStore.getState()

    return {
      messages: state.messages,
    }
  }
}, Channel)
