var express = require('express');
var router = express.Router();

/* GET add page. */
router.get('/add', (req, res) => {
  res.render('add', { getName: () => 'Flavio' })
})

module.exports = router;
