var mongoVersion = module.exports = function mongoVersion (db, cb) {
  db.command({"buildInfo":1}, function (err, buildInfo) {
    cb(err, buildInfo.version);
  })
}