import { saveNote, deleteNote, getNote, updateNote } from "./socket.js";

const notesList = document.querySelector("#notes");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

let savedID = "";

export const onHandleSubmit = (e) => {
    e.preventDefault();
    if(savedID) {
        updateNote(savedID, title.value, description.value)
    } else {
        saveNote(title.value, description.value);
    }

    savedID = "";
    title.value = "";
    description.value = "";
};

export const noteUI = (note) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div>
            <h2>${note.title}</h2>
            <p>${note.description}</p>
            <div>
                <button class="btn-update" data-id="${note._id}">Edit</button>
                <button class="btn-delete" data-id="${note._id}">Delete</button>
            </div>
        </div>
    `
    const btnDelete = div.querySelector(".btn-delete");
    const btnUpdate = div.querySelector(".btn-update")

    btnDelete.addEventListener("click", () => deleteNote(btnDelete.dataset.id));
    btnUpdate.addEventListener("click", () => getNote(btnUpdate.dataset.id));

    return div;
};

export const renderNotes = (notes) => {
    notesList.innerHTML = ``;
    notes.forEach(note => appendNote(note));
};

export const fillForm = (note) => {
    title.value = note.title;
    description.value = note.description;
    savedID = note._id;
};

export const appendNote = (note) => {
    notesList.append(noteUI(note));
};