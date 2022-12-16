import { NoteModel } from "./models/Note";

export default (io) => {
    io.on("connection", (socket) => {
        const emitNotes = async () => {
            const notes = await NoteModel.find();
            
            io.emit("loadNotes", notes);
        };
        emitNotes();

        socket.on("saveNote", async (data) => {
            const newNote = new NoteModel(data);
            const savedNote = await newNote.save();
            console.log(savedNote);
        });
    });
};