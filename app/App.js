import NotesTable from "./components/NotesTable.js";
import notesArray from "./data/notesArray.js";

const App = function _App() {
  return `
  <section class="notes">
  <table id="notesTable">
  
  
  </table>
        <div class="button-container">
            <button id="addNoteButton">ADD A NOTE</button>
        </div>
  </section>
  `;
};

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
      renderNotesTable();
  },

  toggleArchivedStatus: (noteIndex)=>{
    App.state.notesArray[noteIndex].archived = !App.state.notesArray[noteIndex].archived
    renderNotesTable()
  }
  ,
  
}


const renderNotesTable = () => NotesTable(App.state);

const updateTree = () => {
  document.getElementById("App").innerHTML = App();
  renderNotesTable();
};

updateTree();
