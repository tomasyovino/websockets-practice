import { loadNotes, onSavedNote, onSelectedNote } from "./socket.js";
import { onHandleSubmit, renderNotes, appendNote, fillForm } from "./ui.js";

onSavedNote(appendNote);
loadNotes(renderNotes);
onSelectedNote(fillForm);

const noteForm = document.querySelector("#noteForm");
noteForm.addEventListener("submit", onHandleSubmit);