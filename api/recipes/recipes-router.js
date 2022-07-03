const router = require('express').Router();

router.use('*', (req, res) => {
  res.json({ api: 'up' });
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'something went wrong inside the recipes router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
