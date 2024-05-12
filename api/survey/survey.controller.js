const {
    create,
    getAll,
    getById,
    remove,
    update,
    } = require('./survey.service')




  async function getAllHandler(req, res, next) {
    try {
      const survey = await getAll();
      return res.status(200).json({
        status:'success',
        message: 'list Surveys',
        survey
       });
    } catch (error) {
      return next(error);
    }
  }

  async function getByIdHandler(req, res, next) {
    try {
      const { id } = req.params;
      const survey = await getById(id);

      if (!survey) {
        return res.status(404).json({ message: 'survey not found' });
      }
       //profile lo ajustamos en el modelo que quiere traer en la virtual
      return res.json(survey.profile);
    } catch (error) {
      return next(error);
    }
  }

  async function createHandler(req, res, next) {
    try {
      let params =req.body;
      if(!params.question1 || !params.question2 || !params.question3 || !params.question4 ){
          return res.status(400).json({
            status: 'Error',
            message:'missing data',
            params
          })

        }
        console.log("create survey")
        const survey = await create(params);
        return res.status(201).json({
          status: 'Succes',
          message: 'Survey registration action',
          survey
        });

    } catch (error) {
      return next(error);
    }
  }

  async function updateHandler(req, res, next) {
    try {
      const { id } = req.params;
      console.log("🚀 ~ file: user.controller.js:46 ~ updateHandler ~ id:", id)
      const survey = await update(id, req.body);

      if (!survey) {
        return res.status(404).json({ message: 'Survey not found' });
      }

      return res.json(survey);
    } catch (error) {
      return next(error);
    }
  }

  async function removeHandler(req, res, next) {
    try {
      const { id } = req.params;
      const survey = await remove(id);

      if (!survey) {
        return res.status(404).json({ message: 'Survey not found' });
      }

      return res.json(survey);
    } catch (error) {
      next(error);
    }
  }




  module.exports = {
    getAllHandler,
    getByIdHandler,
    createHandler,
    updateHandler,
    removeHandler,
  }
