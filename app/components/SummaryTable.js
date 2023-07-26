export default function SummaryTable({ notesArray }) {

  const TableElement = document.getElementById("summaryTable");
  TableElement.innerHTML = "";
  const tableHeader = document.createElement("tr");
  tableHeader.classList.add("table-header");
  tableHeader.innerHTML = `
  <th>Note Category</th>
  <th>Active</th>
  <th>Archived</th>
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

  const summaryData = notesArray.reduce(
    (accumulator, currentItem) => {
      const index = accumulator.findIndex(
        (element) => element.category === currentItem.category,
      );
      currentItem.archived
        ? accumulator[index].archived++
        : accumulator[index].active++;
      return accumulator;
    }, summaryTemplate)

  const renderCategorySummary = (categorySummaryData) => {
    const summaryElement = document.createElement("tr");

    summaryElement.classList.add("entry");
    const category = document.createElement("td");
    category.textContent = categorySummaryData.category;
    summaryElement.appendChild(category);

    const active = document.createElement("td");
    active.textContent = categorySummaryData.active;
    summaryElement.appendChild(active);

    const archived = document.createElement("td");
    archived.textContent = categorySummaryData.archived;
    summaryElement.appendChild(archived);

    TableElement.appendChild(summaryElement);
  };
  summaryData.map((categorySummaryData) => renderCategorySummary(categorySummaryData));
}
