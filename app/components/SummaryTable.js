export default function SummaryTable({ notesArray }) {
  const TableElement = document.getElementById("summaryTable");
  TableElement.classList.add("table");
  TableElement.innerHTML = "";
  const tableHeader = document.createElement("div");
  tableHeader.classList.add("table-header");
  tableHeader.innerHTML = `

  <div class="header-item">Note Category</div>
  <div class="header-item">Active</div>
  <div class="header-item">Archived</div>
  
  `;
  TableElement.appendChild(tableHeader);

  const summaryTemplate = [
    {
      category: "Task",
      active: 0,
      archived: 0,
    },
    {
      category: "Random Thought",
      active: 0,
      archived: 0,
    },
    {
      category: "Idea",
      active: 0,
      archived: 0,
    },
  ];

  const summaryData = notesArray.reduce((accumulator, currentItem) => {
    const index = accumulator.findIndex(
      (element) => element.category === currentItem.category,
    );

    currentItem.archived
      ? accumulator[index].archived++
      : accumulator[index].active++;

    return accumulator;
  }, summaryTemplate);

  const renderCategorySummary = (categorySummaryData) => {
    const summaryElement = document.createElement("div");

    summaryElement.classList.add("entry");
    const category = document.createElement("div");
    category.textContent = categorySummaryData.category;
    summaryElement.appendChild(category);

    const active = document.createElement("div");
    active.textContent = categorySummaryData.active;
    summaryElement.appendChild(active);

    const archived = document.createElement("div");
    archived.textContent = categorySummaryData.archived;
    summaryElement.appendChild(archived);

    TableElement.appendChild(summaryElement);
  };

  summaryData.map((categorySummaryData) =>
    renderCategorySummary(categorySummaryData),
  );
}
