import NotesTable from "./components/NotesTable.js";
import SummaryTable from "./components/SummaryTable.js";
import notesArray from "./data/notesArray.js";
import Form from "./components/Form.js";

const App = function _App() {
  return `
  <section>
  
    <div id="notesTable" class="notes">
    </div>
    
    <div id="buttonContainer"></div>
    
    <div id="summaryTable" class="summary">
    </div>

  </section>`;
};

// Declaring render functions

export const renderNotesTable = () => NotesTable(App.state);

const renderSummaryTable = () => SummaryTable(App.state);

const renderNoteForm = () => {
  if (document.getElementById("addItemForm")) return;
  renderNotesTable();
  const formItem = Form(App.state.addNote);
  formItem.id = "addItemForm";
  document.getElementById("notesTable").appendChild(formItem);
};

const renderAddNoteButton = () => {
  const addNoteButton = document.createElement("button");
  addNoteButton.id = "addNoteButton";
  addNoteButton.textContent = "ADD A NOTE";
  addNoteButton.addEventListener("click", renderNoteForm);

  const buttonContainer = document.getElementById("buttonContainer");
  buttonContainer.appendChild(addNoteButton);
};

const updateTree = () => {
  document.getElementById("App").innerHTML = App();
  renderSummaryTable();
  renderNotesTable();
  renderAddNoteButton();
};

// Implementing state

App.state = {
  displayArchived: false,

  notesArray: notesArray,

  toggleArchivedDisplay: () => {
    App.state.displayArchived = !App.state.displayArchived;
    renderNotesTable();
  },

  removeNote: (noteIndex) => {
    (App.state = {
      ...App.state,
      notesArray: App.state.notesArray
        .slice(0, noteIndex)
        .concat(App.state.notesArray.slice(noteIndex + 1)),
    }),
      updateTree();
  },

  toggleArchivedStatus: (noteIndex) => {
    try {
      App.state.notesArray[noteIndex].archived =
        !App.state.notesArray[noteIndex].archived;
      updateTree();
    } catch (error) {
      console.log(error);
      updateTree();
    }
  },

  addNote: (event) => {
    event.preventDefault();
    App.state.notesArray[App.state.notesArray.length] = {
      name: event.target.name.value,
      created: new Date(),
      category: event.target.category.value,
      content: event.target.content.value,
      dates: extractDates(event.target.content.value),
      archived: false,
    };
    updateTree();
  },

  updateNote: (event) => {
    event.preventDefault();
    try {
      App.state.notesArray[event.target.id] = {
        ...App.state.notesArray[event.target.id],
        name: event.target.name.value,
        category: event.target.category.value,
        content: event.target.content.value,
        dates: extractDates(event.target.content.value),
      };
      renderNotesTable();
    } catch (error) {
      console.log(error);
      renderNotesTable();
    }
  },
};

// Extracting dates from the content field

const extractDates = (inputString) => {
  const datePattern = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g;
  const datesArray = [];

  let match;
  while ((match = datePattern.exec(inputString))) {
    const day = match[1];
    const month = match[2];
    const year = match[3];
    const date = `${day}/${month}/${year}`;
    datesArray.push(date);
  }

  return datesArray;
};

// Launching the app

updateTree();
