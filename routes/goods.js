const { exec } = require("../db/mysql");

const getList = () => {
  let sql = "select * from sp_goods";
  return exec(sql);
};
module.exports = {
  getList,
};
