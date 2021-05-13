import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    userGroceries: Array,
    userCart: Array
})

const User = mongoose.model('user', userSchema)

export default User