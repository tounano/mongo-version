var mongoVersion = module.exports = function mongoVersion (db, cb) {
  db.eval('function() {return db.version(); }', cb);
}