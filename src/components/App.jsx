import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-bootstrap'

import ChannelList from './ChannelList'

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={4}>
              <ChannelList channels={[
                { name: '#foo' }
              ]} />
            </Col>
            <Col lg={8}>
              {this.props.children || 'Join a channel'}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
