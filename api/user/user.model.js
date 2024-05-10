const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  lastName:{
    type: String,
    trim: true,
  },
  bio:String,
  nick:{
    type:String,
    trim: true,
  },


  email: {
    type: String,
    required: true,
    unique: [true, 'Email must be unique'],
    trim: true,
  },
  phone:{
    type: String,
    require:true,
    unique:[true,'Phone must be unique'],
    trim:true

  },

  avatar :{
    type: String,
    default: 'defaul.png',
  },
  password: String,
  age: {
    type: Number,
    min: 18,
    max: 65,
  },

  isActive: {
    type: Boolean,
    default: false,
  },
  passwordResetExpires:{
  type: Date
  }
},
{
  versionKey: false,
  timestamps: true,  //La opción timestamps: true en la definición del esquema de Mongoose habilita la creación automática de los campos "createdAt" y "updatedAt" en los documentos.
});
// Virtuals
UserSchema.virtual('profile').get(function () {
  const user = this;

  return {
    name:   user.name,
    phone:  user.phone,
    email:  user.email,
    avatar: user.avatar
  }
});

UserSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema); // users

module.exports = User;
