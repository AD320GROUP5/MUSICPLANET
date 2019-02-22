var express = require('express');
var router = express.Router();

/* GET delete page. */
router.get('/delete', (req, res) => {
  res.render('delete')
})

module.exports = router;
