# Twitter follow/unfollow bot

Automatically follow back and mute new followers and unfollow who unfollows you on Twitter.

## Configure

Replace [xaqron](https://twitter.com/xaqron) with your Twitter screen name and use appropriate [Twitter tokens](https://apps.twitter.com/).
```js
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
```

## Install

```bash
git clone https://github.com/Xaqron/twitter-follow-unfollow-bot.git
cd twitter-follow-unfollow-bot
npm install
```

## Run

```bash
node index.js
```
