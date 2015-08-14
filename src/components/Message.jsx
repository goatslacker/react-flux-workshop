import React, { Component, PropTypes } from 'react'
import { Col, Grid, Row } from 'react-bootstrap'

class Message extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    return (
        <Row>
          <Col lg={2}>
            <img src={this.props.avatar} alt={this.props.name} width={50} />
          </Col>
          <Col lg={10}>
            <h3>{this.props.name}</h3>
            {this.props.text}
          </Col>
        </Row>
    )
  }
}

export default Message
