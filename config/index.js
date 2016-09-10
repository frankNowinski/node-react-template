const configValues = require('./config');

module.exports = {
  getDbConnectionString: function() {
    return `mongodb://${configValues.username}:${configValues.password}@ds029106.mlab.com:29106/gainz`
  }
}
