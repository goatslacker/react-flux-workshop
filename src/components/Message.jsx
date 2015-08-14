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
        <Row style={{ marginBottom: 4 }}>
          <Col sm={2} style={{ marginRight: 8, width: 50 }}>
            <img src={this.props.avatar} alt={this.props.name} width={50} />
          </Col>
          <Col sm={10}>
            <div>
              <strong>{this.props.name}</strong>
            </div>
            <div>
              {this.props.text}
            </div>
          </Col>
        </Row>
    )
  }
}

export default Message
