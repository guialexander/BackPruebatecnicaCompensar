const user = require('./api/user');
const survey = require('./api/survey');
const authLocalRouter = require( './src/auth/local');



function routes(app) {
  // API Routes
  app.use('/api/users', user);
  app.use('/api/surveys',survey);
  //Auth
  app.use('/auth/local',authLocalRouter);
}

module.exports = routes;
