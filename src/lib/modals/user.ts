import {Schema, model, models} from 'mongoose';

export interface IUser extends Document {
    username: string
    name: string;
    password: string;
    email: string;
    role: "admin" | "agent" | "user";
    id: string;
}
const UserSchema = new Schema<IUser>({
        username: {type: String},
        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        role: {
            type: String,
            enum: ["admin", "agent", "user"],
            default: "user"
        }
    }, {
        timestamps: true
    }
)

const User = models.User || model<IUser>('User', UserSchema);
export default User;