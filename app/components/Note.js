import Form from "./Form.js";
import { renderNotesTable } from "../App.js";
const unArchiveItemSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                <path
                                    d="M180-120q-24 0-42-18t-18-42v-523q0-15 3-25.5t11-19.5l56-76q8-9 18.5-12.5t24.886-3.5h493.228Q741-840 751-836.5t18 12.5l57 76q8 9 11 19.5t3 25.5v523q0 24-18 42t-42 18H180Zm17-614h565l-36.409-46H233l-36 46Zm-17 60v494h600v-494H180Zm270 404h60v-201l86 86 40-40-156-156-156 156 40 40 86-86v201Zm-270 90h600-600Z" />
                            </svg>`;

const archiveItemSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                <path
                                    d="M180-120q-24 0-42-18t-18-42v-523q0-15 3-25.5t11-19.5l56-76q8-9 18.5-12.5t24.886-3.5h493.228Q741-840 751-836.5t18 12.5l57 76q8 9 11 19.5t3 25.5v523q0 24-18 42t-42 18H180Zm17-614h565l-36.409-46H233l-36 46Zm-17 60v494h600v-494H180Zm300 404 156-156-40-40-86 86v-201h-60v201l-86-86-40 40 156 156Zm-300 90h600-600Z" />
                            </svg>`;

const deleteItemSVG = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                <path
                                    d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
                            </svg>`;

const editItemSVG = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>`;

export default function Note(
  noteData,
  noteIndex,
  { removeNote, updateNote, toggleArchivedStatus},
) {
  const noteElement = document.createElement("div");

  noteElement.classList.add("entry");
  noteElement.id = noteIndex;

  const name = document.createElement("div");
  name.textContent = noteData.name;
  name.classList.add("entry__name");
  noteElement.appendChild(name);

  const createdOn = document.createElement("div");
  createdOn.textContent = noteData.created.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  noteElement.appendChild(createdOn);

  const category = document.createElement("div");
  category.textContent = noteData.category;
  noteElement.appendChild(category);

  const content = document.createElement("div");
  content.textContent = noteData.content;
  noteElement.appendChild(content);

  const dates = document.createElement("div");
  dates.textContent = noteData.dates;
  noteElement.appendChild(dates);

  const buttons = document.createElement("div");
  buttons.classList.add("entry__buttons");

  const editItemButton = document.createElement("button");
  editItemButton.innerHTML = editItemSVG;
  editItemButton.addEventListener("click", () => {
    renderNotesTable()
    document.getElementById(noteIndex).replaceWith(Form(updateNote, noteData, noteIndex))
  } )
  buttons.appendChild(editItemButton);

  const toggleArchivedStatusButton = document.createElement("button");
  !noteData.archived
    ? (toggleArchivedStatusButton.innerHTML = archiveItemSVG)
    : (toggleArchivedStatusButton.innerHTML = unArchiveItemSVG);

  toggleArchivedStatusButton.addEventListener("click", () =>
    toggleArchivedStatus(noteIndex),
  );
  buttons.appendChild(toggleArchivedStatusButton);

  const removeItemButton = document.createElement("button");
  removeItemButton.innerHTML = deleteItemSVG;
  removeItemButton.addEventListener("click", () => removeNote(noteIndex));
  buttons.appendChild(removeItemButton);

  noteElement.appendChild(buttons);

  return noteElement;
}
