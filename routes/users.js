var express = require("express");
var router = express.Router();
const { getList } = require("./goods");
/* GET users listing. */
router.get("/", function (req, res, next) {
  getList().then((response) => {
    console.log(response);
    res.send(response);
  });
});

module.exports = router;
