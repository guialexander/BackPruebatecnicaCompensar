const { Request, Response, NextFunction } = require('express');

const {getUserByEmail }= require('../../../api/user/user.service');
const {comparePassword} = require('../../utils/bcrypt');

 async function loginHandler(req , res) {
    const { email, password } = req.body;

    try {
      const user = await getUserByEmail(email);
      console.log(user)

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // compare password
      const isMatch = await comparePassword(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Email or password not match' });
      }


      const profile = {
        id:user._id,
        fullName: `${user.name} ${user.lastName}`,
        avatar: user.avatar
      };


      return res.json( {profile });
    } catch (error) {
      console.log(error)

    }
  }

  module.exports = {
    loginHandler
  };
