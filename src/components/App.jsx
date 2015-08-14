import React, { Component } from 'react'
import { Col, Grid, Row, Button } from 'react-bootstrap'

import ChannelActions from '../actions/ChannelActions'
import ChannelsStore from '../stores/ChannelsStore'

import ChannelList from './ChannelList'

class App extends Component {
  createChannel = () => {
    const channelName = prompt('What is the channel?')

    ChannelActions.channelCreated(channelName)
  }

  render() {
    const { channels } = ChannelsStore.getState()

    return (
      <div>
        <Grid>
          <Row>
            <Col sm={2}>
              <ChannelList channels={channels} />
              <Button
                bsStyle="success"
                onClick={this.createChannel}
              >
                + Create Channel
              </Button>
            </Col>
            <Col sm={10}>
              {this.props.children || 'Join a channel'}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
