var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/about', (req, res) => {
  res.render('about', { getName: () => 'Flavio' })
})

module.exports = router;
