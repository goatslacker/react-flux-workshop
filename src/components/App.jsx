import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-bootstrap'

import ChannelList from './ChannelList'
import ChannelsStore from '../stores/ChannelsStore'

class App extends Component {
  componentDidMount() {
    ChannelsStore.fetchChannels()
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={4}>
              <ChannelList />
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
