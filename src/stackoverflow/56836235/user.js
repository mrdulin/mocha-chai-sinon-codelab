const Database = require('./db');

module.exports = {
  setupNewUser: (info, callback) => {
    let user = {
      name: info.name,
      nameLowercase: info.name.toLowerCase()
    };

    try {
      Database.save(user, callback);
    } catch (err) {
      callback(err);
    }
  }
};
