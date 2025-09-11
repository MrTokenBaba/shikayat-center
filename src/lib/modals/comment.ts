import { Schema, model, models } from "mongoose";

const commentsSchema = new Schema(
    {
        title: { type: String, required: true },
        text: { type: String },

        // Relations
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        complaint: { type: Schema.Types.ObjectId, ref: "Complaint", required: true },
    },
    { timestamps: true }
);

const Comment  =  models.Comment || model("Comments", commentsSchema);
export default Comment;


