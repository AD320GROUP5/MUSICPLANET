var express = require('express');
var router = express.Router();

/* GET edit page. */
router.get('/edit', (req, res) => {
  res.render('edit', { getName: () => 'Flavio' })
})

module.exports = router;
