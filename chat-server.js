import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

const channels = {
  'general': {
    name: '#general',
    messages: [
      {
        name: 'Luke',
        avatar: 'http://fillmurray.com/50/50',
        text: 'Hey there',
      },
      {
        name: 'Han',
        avatar: 'http://fillmurray.com/51/51',
        text: 'Hello',
      },
      {
        name: 'Leia',
        avatar: 'http://fillmurray.com/52/52',
        text: 'Hi everyone',
      },
    ],
  },
  'random': {
    name: '#random',
    messages: [
      {
        name: 'Anakin',
        avatar: 'http://fillmurray.com/53/53',
        text: 'I like turtles',
      },
      {
        name: 'R2D2',
        avatar: 'http://fillmurray.com/54/54',
        text: 'Beep Boop',
      },
    ],
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
  channels[req.body.channel].messages.push(req.body.message)
  res.json(req.body.message)
})

app.post('/channel', (req, res) => {
  channels[req.body.channel] = { name: `#${req.body.channel}`, messages: [] }
  res.json(channels[req.body.channel])
})

app.listen(1305, () => console.log('Started'))
