import React, { Component } from 'react'

import { Col, Grid, Row } from 'react-bootstrap'

import ChannelActions from '../actions/ChannelActions'
import ChannelsStore from '../stores/ChannelsStore'

import connectToStores from 'alt/utils/connectToStores'

class Channel extends Component {
  renderMessage(message) {
    return (
      <Row>
        <Col sm={1}>
          <img src={message.avatar} width={50} />
        </Col>
        <Col sm={10}>
          <strong>{message.user}</strong>
          <p>{message.text}</p>
        </Col>
      </Row>
    )
  }

  handleKeyPress = (ev) => {
    const keyCode = ev.charCode

    if (keyCode === 13) {
      ChannelActions.messageAdded(
        this.props.params.channel,
        ev.target.value
      )
      ev.target.value = ''

      console.log(ChannelsStore.getState())
    }
  }

  render() {
    const { channels } = this.props
    const { params } = this.props

    const currentChannel = channels[params.channel]
    if (!currentChannel) return null

    const messages = currentChannel.messages || []

    return (
      <div>
        {messages.map(this.renderMessage)}
        <input type="text" onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

export default connectToStores({
  getStores() {
    return [ChannelsStore]
  },

  getPropsFromStores() {
    return ChannelsStore.getState()
  },
}, Channel)
