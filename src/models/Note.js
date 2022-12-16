import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String }
},
{
    timestamps: true
});

export const NoteModel = model("Note", NoteSchema);