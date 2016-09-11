const User = require('../models/model_user');

module.exports = function(app) {

  app.post('/users', function(req, res) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    };

    User.create(newUser, function(err, results) {
      if (err) throw err;

      res.send(results)
    })
  });

}
