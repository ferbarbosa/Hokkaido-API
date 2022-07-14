import mongoose from "mongoose";
import {nanoid} from "nanoid";
import bcrypt from "bcrypt";

export interface UserDocument extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10), // Generate a random id
    },
    username: { type: String, default: true },
    password: { type: String, default: true },
    email: { 
      type: String, 
      default: true, 
      unique: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", { document: true, query: false }, async function (next: any){
    let user = this as UserDocument;

    // only hash pass if has been modified or it is new
    if(!user.isModified("password")) return next();

    // Random additional data
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hashSync(user.password, salt);

    // Replace pass with hash
    user.password = hash;

    return next();
});


//This is for login
UserSchema.methods.comparePassword = async function ( candidatePassword: string ) {
    const user = this as UserDocument;

    return bcrypt.compare(candidatePassword, user.password).catch((error:any) => console.log(error));
}


const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;