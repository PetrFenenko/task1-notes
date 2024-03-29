import Note from "./Note.js";

const NotesTable = function _NotesTable(state) {
  const { notesArray, displayArchived, toggleArchivedDisplay } = state;

  const TableElement = document.getElementById("notesTable");

  TableElement.classList.add("table");
  TableElement.innerHTML = "";
  const tableHeader = document.createElement("div");
  tableHeader.classList.add("table-header");
  tableHeader.innerHTML = `
  <div class="header-item">Name</div>
  <div class="header-item">Created on</div>
  <div class="header-item">Category</div>
  <div class="header-item">Content</div>
  <div class="header-item">Dates</div>
  
  
  
`;

  const headerButtons = document.createElement("div");
  headerButtons.classList.add("header-item");
  headerButtons.classList.add("header__buttons");
  const toggleArchivedDisplayButton = document.createElement("button");
  toggleArchivedDisplayButton.id = "toggleArchivedDisplay";
  toggleArchivedDisplayButton.innerHTML = `${
    !displayArchived
      ? `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path
            d="M180-120q-24 0-42-18t-18-42v-523q0-15 3-25.5t11-19.5l56-76q8-9 18.5-12.5t24.886-3.5h493.228Q741-840 751-836.5t18 12.5l57 76q8 9 11 19.5t3 25.5v523q0 24-18 42t-42 18H180Zm17-614h565l-36.409-46H233l-36 46Zm-17 60v494h600v-494H180Zm300 404 156-156-40-40-86 86v-201h-60v201l-86-86-40 40 156 156Zm-300 90h600-600Z" />
        </svg>
     `
      : `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path
            d="M180-120q-24 0-42-18t-18-42v-523q0-15 3-25.5t11-19.5l56-76q8-9 18.5-12.5t24.886-3.5h493.228Q741-840 751-836.5t18 12.5l57 76q8 9 11 19.5t3 25.5v523q0 24-18 42t-42 18H180Zm17-614h565l-36.409-46H233l-36 46Zm-17 60v494h600v-494H180Zm270 404h60v-201l86 86 40-40-156-156-156 156 40 40 86-86v201Zm-270 90h600-600Z" />
        </svg>
`
  }`;

  headerButtons.appendChild(toggleArchivedDisplayButton);
  toggleArchivedDisplayButton.addEventListener("click", toggleArchivedDisplay);

  tableHeader.appendChild(headerButtons);
  TableElement.appendChild(tableHeader);

  notesArray.map((noteData, noteIndex) => {
    noteData.archived === displayArchived &&
      TableElement.appendChild(Note(noteData, noteIndex, state));
  });
};

export default NotesTable;
