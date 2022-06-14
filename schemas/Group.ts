import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema({
    name: { type: String, maxlength: 50, minlength: 2 },
    description: { type: String, maxlength: 255, minlength: 2 },
    members: { type: [{ uid: String, permission: String }] },
});

const Group = mongoose.model("Group", GroupSchema);

export { Group };
