var express = require('express');
var router = express.Router();

/* GET view page. */
router.get('/view', (req, res) => {
  res.render('view')
}))

module.exports = router;
