import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import jwtSecret from "../src/Config/jwt.mjs";
import jwt from 'jsonwebtoken'

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String,
        minLength: 6
    },
    fullname: {
        required: true,
        type: String
    },
    pic: {
        required: true,
        type: String
    }
})

userSchema.pre('save', function (next) {
    const user = this
    // console.log("user", user);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash

    next()
})

userSchema.methods.comparePassword = function (password) {
    const user = this

    // const comparePass = bcrypt.compareSync(password, user.password)

    // console.log("comparePass", comparePass);
    return bcrypt.compareSync(password, user.password)
}


userSchema.methods.generateToken = function () {
    const user = this
    const token = jwt.sign({ _id: user._id }, jwtSecret);
    // console.log("tokeen", token);
    return token;
}


const user = mongoose.model("users", userSchema);

export default user