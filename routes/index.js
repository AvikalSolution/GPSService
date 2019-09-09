var express = require('express');
var router = express.Router();

const locationController = require('../controllers').location;

router.get('/api/location/:id', locationController.getById);
router.post('/api/location/add', locationController.add);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
