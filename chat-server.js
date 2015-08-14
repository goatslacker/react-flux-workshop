import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

const channels = {
  channels: {
    react: {
      name: '#react',
      messages: [
        {
          user: 'Luke Skywalker',
          avatar: 'http://placecage.com/50/50',
          text: 'Hello!',
        },
      ],
    },
    wyncode: { name: '#wyncode', messages: [] },
    flux: {
      name: '#flux',
      messages: [
        {
          user: 'Anakin Skywalker',
          avatar: 'http://placecage.com/51/51',
          text: 'Sup',
        },
      ],
    },
    javascript: { name: '#javascript', messages: [] },
    miami: { name: '#miami', messages: [] },
  },
}

// Allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  console.log(req.method, req.url)
  console.log(req.params)
  console.log(req.body)
  console.log('--')

  next()
})

app.get('/', (req, res) => res.json(channels))
app.get('/:channel', (req, res) => res.json(channels[req.params.channel]))

app.post('/message', (req, res) => {
  channels.channels[req.body.channel].messages.push(req.body.message)
  res.json(req.body.message)
})

app.post('/channel', (req, res) => {
  channels[req.body.channel] = { name: `#${req.body.channel}`, messages: [] }
  res.json(channels[req.body.channel])
})

app.listen(1305, () => console.log('Started'))
