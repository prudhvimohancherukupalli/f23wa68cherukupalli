var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
    let x = Math.random() * 100;
    if (req.query.x != undefined) {
        x = parseFloat(req.query.x);
    }
    let num1 = Math.log2(x);
    let num2 = Math.cosh(x);
    let num3 = Math.floor(x);
    res.render('computation', { x: x, log2: num1, 
        cosh: num2, floor: num3 });
});

module.exports = router;
