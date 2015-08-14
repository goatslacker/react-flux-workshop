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
            <Col sm={2} smPull={1}>
              <ChannelList channel={this.props.params.channel}/>
            </Col>
            <Col sm={10} smPull={1}>
              {this.props.children || 'Join a channel'}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
