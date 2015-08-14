import React, { Component } from 'react'

import { Col, Grid, Row } from 'react-bootstrap'

import ChannelsStore from '../stores/ChannelsStore'

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

  render() {
    const { channels } = ChannelsStore.getState()
    const { params } = this.props

    const currentChannel = channels[params.channel]
    const messages = currentChannel.messages || []

    return (
      <div>
        {messages.map(this.renderMessage)}
      </div>
    )
  }
}

export default Channel
