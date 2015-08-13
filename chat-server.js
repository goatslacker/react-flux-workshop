import express from 'express'

const app = express()

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
        avatar: 'http://fillmurray.com/50/50',
        text: 'Hello',
      },
      {
        name: 'Leia',
        avatar: 'http://fillmurray.com/50/50',
        text: 'Hi everyone',
      },
    ],
  },
  'random': {
    name: '#random',
    messages: [
      {
        name: 'Anakin',
        avatar: 'http://fillmurray.com/50/50',
        text: 'I like turtles',
      },
      {
        name: 'R2D2',
        avatar: 'http://fillmurray.com/50/50',
        text: 'Beep Boop',
      },
    ],
  },
}

// Allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req, res) => res.json(channels))
app.get('/:channel', (req, res) => res.json(channels[req.params.channel]))

app.listen(1305, () => console.log('Started'))
