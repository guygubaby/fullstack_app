const mongoose = require('mongoose');
const {
  Schema
} = mongoose

const UserSchema = new Schema({
  // user_id: {
  //   type: ObjectId,
  //   required: true,
  // },
  email: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  nick: {
    type: String,
    required: true
  },
})


UserSchema.index({
  email: 1
}, {
  unique: true
});

const User = mongoose.model("User", UserSchema)

module.exports = User