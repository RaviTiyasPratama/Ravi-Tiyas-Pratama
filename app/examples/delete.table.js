//app/examples/delete.table.js
const sql = require("../models/db");
sql.query("DROP TABLE books", (err, res) => {
 if (err) {
nashrullah
 console.log(err);
 } else {
 console.log("Table berhasil dihapus");
 }
});
