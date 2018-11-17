var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Send it with us!', condition: true, anyArray: [1,2,3] });
});

router.get('/test/:Shippername', function(req, res, next) {
  res.render('test', {output: req.params.Shippername});
});

router.get('/test/:Shipperphone', function(req, res, next) {
  res.render('test', {output: req.params.Shipperphone});
});

router.get('/test/:Shipperaddress', function(req, res, next) {
  res.render('test', {output: req.params.Shipperaddress});
});


router.get('/test/:Receivername', function(req, res, next) {
  res.render('test', {output: req.params.Receivername});
});


router.get('/test/:Receiverphone', function(req, res, next) {
  res.render('test', {output: req.params.Receiverphone});
});



router.get('/test/:Receiveraddress', function(req, res, next) {
  res.render('test', {output: req.params.Receiveraddress});
});

router.get('/test/:ConsignmentNo', function(req, res, next) {
  res.render('test', {output: req.params.ConsignmentNo});
});

router.get('/test/:Shiptype', function(req, res, next) {
  res.render('test', {output: req.params.Shiptype});
});

router.get('/test/:Weight', function(req, res, next) {
  res.render('test', {output: req.params.Weight});
});



router.get('/test/:Invoiceno', function(req, res, next) {
  res.render('test', {output: req.params.Invoiceno});
});



router.get('/test/:Qnty', function(req, res, next) {
  res.render('test', {output: req.params.Qnty});
});



router.get('/test/:Bookingmode', function(req, res, next) {
  res.render('test', {output: req.params.Bookingmode});
});

router.get('/test/:Totalfreight', function(req, res, next) {
  res.render('test', {output: req.params.Totalfreight});
});

router.get('/test/:Mode', function(req, res, next) {
  res.render('test', {output: req.params.Mode});
});

router.get('/test/:Depttime', function(req, res, next) {
  res.render('test', {output: req.params.Depttime});
});

router.get('/test/:Destination', function(req, res, next) {
  res.render('test', {output: req.params.Destination});
});

router.get('/test/:Packupdate', function(req, res, next) {
  res.render('test', {output: req.params.Packupdate});
});



router.get('/test/:Pickuptime', function(req, res, next) {
  res.render('test', {output: req.params.Pickuptime});
});


router.get('/test/:Pickuptime', function(req, res, next) {
  res.render('test', {output: req.params.Pickuptime});
});


router.get('/test/:Comments', function(req, res, next) {
  res.render('test', {output: req.params.Comments});
});











//post the information from the form 

router.post('/test/submit', function(req, res, next) {
  var Shippername = req.body.Shippername;
  var Shipperphone = req.body.Shipperphone;
  var Receivername = req.body.Receivername;
  var Receiverphone = req.body.Receiverphone;
  var Receiveraddress = req.body.Receiveraddress;
  var ConsignmentNo = req.body.ConsignmentNo;
  var Shiptype = req.body.Shiptype;
  var Weight = req.body.Weight;
  var Receiverphone = req.body.Receiverphone;
  var Receiverphone = req.body.Receiverphone;

  res.redirect('/test/' + Shippername  + Shipperphone + Receivername + Receiverphone + Receiveraddress+ConsignmentNo + Shiptype +Weight);


});
//router.delete('/test/delete/:Shippername', Shippername.delete);

module.exports = router;
