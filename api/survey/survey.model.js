const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const SurveySchema = new mongoose.Schema({
  question1: {
    type: String,
    required: true
  },
  question2: {
    type: String,
    required: true
  },
  question3: {
    type: String,
    required: true
  },
  question4: {
    type: String,
    required: true
  },
  datecalendar: {
    type: String,
    required: true
  },
  datesurvey: {
    type:Date,
    require:true
  },
});

// Virtuals
SurveySchema.virtual('profile').get(function () {
    const Survey = this;

    return {
      question1:    Survey.question1,
      question2:    Survey.question2,
      question3:    Survey.question3,
      question4:    Survey.question4,
      datesurvey:   Survey.datesurvey
    }
  });

  SurveySchema.plugin(mongoosePaginate);

  const Survey = mongoose.model('Survey', SurveySchema); // surveys

  module.exports = Survey;



