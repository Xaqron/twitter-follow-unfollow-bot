const Twit = require('twit')

const screenName = 'xaqron'
const T = new Twit(
  {
    consumer_key: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    consumer_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token: '111111111111111111-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    timeout_ms: 60 * 1000
  }
)

const stream = T.stream('user')

stream.on('follow', (msg) => { // follow back and mute
  if (msg.target.screen_name === screenName) {
    T.post('friendships/create', { user_id: msg.source.id_str })
      .then(() => {
        T.post('mutes/users/create', { user_id: msg.source.id_str })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }
})

stream.on('unfollow', (msg) => { // unfollow back
  if (msg.target.screen_name === screenName) {
    T.post('friendships/destroy', { user_id: msg.source.id_str })
      .catch((err) => console.log(err))
  }
})
