const pgp = require("pg-promise")({ noLocking: true });

const config = {};

const db = pgp(config);

function getFaculty(req, res, next) {
  return db
    .one("SELECT * FROM users WHERE first_name= $1", [req.query.firstName])
    .then((data) => {
      const user = {
        firstName: data.first_name,
        lastName: data.last_name,
        phoneNum: data.phone_number,
      };
      return res.status(200).send(user);
    })
    .catch((err) => {
      console.log(err.message);
      return next(err);
    });
}

exports.getFaculty = getFaculty;
exports.db = db;
