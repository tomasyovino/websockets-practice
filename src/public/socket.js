const socket = io();

export const loadNotes = (callback) => {
    socket.on("server:loadNotes", callback);
};

export const saveNote = (title, description) => {
    socket.emit("client:saveNote", {
        title,
        description
    });
};

export const onSavedNote = (callback) => {
    socket.on("server:savedNote", callback);
};

export const deleteNote = (id) => {
    socket.emit("client:deleteNote", id);
};

export const updateNote = (id, title, description) => {
    socket.emit("client:updateNote", {
        _id: id,
        title,
        description,
    });
};

export const getNote = (id) => {
    socket.emit("client:getNote", id);
};

export const onSelectedNote = (callback) => {
    socket.on("server:selectedNote", callback);
};