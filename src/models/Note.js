import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String }
},
{
    timestamps: true
});

export default model("Note", NoteSchema);