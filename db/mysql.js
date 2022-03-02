const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  database: "ele",
});
con.connect();

const exec = (sql) => {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
  return promise;
};
module.exports = {
  exec,
};
