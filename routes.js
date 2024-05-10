const user = require('./api/user');
const authLocalRouter = require( './src/auth/local');



function routes(app) {
  // API Routes
  app.use('/api/users', user);
  //Auth
  app.use('/auth/local',authLocalRouter);
}

module.exports = routes;
