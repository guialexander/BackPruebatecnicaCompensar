const mongoosePaginate = require('mongoose-paginate');
const Survey = require('./survey.model');

function getAll() {
  return Survey.find();
}


function getById(id) {
  return Survey.findById(id);
}


async function create(input) {

  const survey = {
      question1: input.question1,
      question2: input.question2,
      question3: input.question3,
      question4: input.question4,
      datesurvey: input.datesurvey,

    }


  return Survey.create(survey);
}

function update(id, data) {
  return Survey.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

function remove(id) {
  return Survey.findByIdAndDelete(id);
}



module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
 };
