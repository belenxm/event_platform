import { Schema, model, models } from "mongoose";

/* Model for a user */

/* Schema Declaration */
const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique:true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName : { type: String, required: true},
    photo: { type: String, required: true },

})

/* We'rre gonna use the Schema to declarate models */

const User = models.User || model('User', UserSchema);

export default User;