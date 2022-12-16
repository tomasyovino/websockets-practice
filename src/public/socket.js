const socket = io();

export const loadNotes = () => {
    socket.on("loadNotes", (data) => {
        console.log(data);
    });
};

export const saveNote = (title, description) => {
    socket.emit("saveNote", {
        title,
        description
    });
};
