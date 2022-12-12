const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    email: {
      type: String
    },
    password: {
      type: String
    },
    name: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
  if (this.isNew) {
    const genSalt = bcrypt.genSaltSync(+process.env.SALT);
    const hashPassword = bcrypt.hashSync(this.password, genSalt);
    this.password = hashPassword;
  }
  next();
})

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

const User = model("User", userSchema);

module.exports = User;
