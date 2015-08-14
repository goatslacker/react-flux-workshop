import React, { Component } from 'react'
import { Col, Grid, Row, Button } from 'react-bootstrap'

import ChannelActions from '../actions/ChannelActions'
import ChannelsStore from '../stores/ChannelsStore'

import ChannelList from './ChannelList'

class App extends Component {
  constructor() {
    super()

    this.state = ChannelsStore.getState()
  }

  componentDidMount() {
    this.removeEventListener = ChannelsStore.listen((state) => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.removeEventListener()
  }

  createChannel = () => {
    const channelName = prompt('What is the channel?')

    ChannelActions.channelCreated(channelName)

    console.log(ChannelsStore.getState())
  }

  render() {
    const { channels } = this.state

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
