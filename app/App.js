import NotesTable from "./components/NotesTable.js";
import SummaryTable from "./components/SummaryTable.js";
import notesArray from "./data/notesArray.js";

const App = function _App() {
  return `
  <section>
  
    <table id="notesTable" class="notes">
    </table>

    <div class="button-container">
      <button id="addNoteButton">ADD A NOTE</button>
     </div>

    <table id="summaryTable" class="summary">
    </table>

  </section>`
};

const renderNotesTable = () => NotesTable(App.state);
const renderSummaryTable = () => SummaryTable(App.state);

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
    App.state.notesArray[noteIndex].archived =
      !App.state.notesArray[noteIndex].archived;
    updateTree();
  },
};

const updateTree = () => {
  document.getElementById("App").innerHTML = App();
  renderSummaryTable();
  renderNotesTable();
};

updateTree();
