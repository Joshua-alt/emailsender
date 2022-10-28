const express = require('express');

const emojis = require('./emojis');
const sendermail = require('./sendermail');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'easy API to send - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/sendermail', sendermail)
module.exports = router;
