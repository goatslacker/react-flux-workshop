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
      <Grid>
        <Row>
          <Col lg={2}>
            <h3>{this.props.name}</h3>
            <img src={this.props.avatar} alt={this.props.name} />
          </Col>
          <Col lg={10}>
            {this.props.text}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Message
