import { model, Schema} from 'mongoose'

const userSchema = Schema({
    name:{
        type: String,
        required: true
    },

    usernames:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    }
})

export default model('user', userSchema)