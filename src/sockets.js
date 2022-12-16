import { NoteModel } from "./models/Note";

export default (io) => {
    io.on("connection", (socket) => {
        const emitNotes = async () => {
            const notes = await NoteModel.find();
            
            io.emit("server:loadNotes", notes);
        };
        emitNotes();

        socket.on("client:saveNote", async (data) => {
            const newNote = new NoteModel(data);
            const savedNote = await newNote.save();
            io.emit("server:savedNote", savedNote);
        });

        socket.on("client:deleteNote", async (id) => {
            await NoteModel.findByIdAndDelete(id);
            emitNotes();
        });

        socket.on("client:getNote", async (id) => {
            const note = await NoteModel.findById(id);
            io.emit("server:selectedNote", note);
        });

        socket.on("client:updateNote", async (data) => {
            await NoteModel.findByIdAndUpdate(data._id, {
                title: data.title,
                description: data.description
            });
            emitNotes();
        });
    });
};