const notesArray = [
  {
    name: "Shopping List",
    created: new Date(2023, 7, 25),
    category: "Task",
    content: "Tomatoes, bread",
    dates: [],
    archived: true,
  },
  {
    name: "Grocery List",
    created: new Date(2023, 6, 25),
    category: "Task",
    content: "Milk, eggs, butter, 07/26/2023, 07/27/2023",
    dates: ["26/07/2023", "27/07/2023"],
    archived: false,
  },
  {
    name: "Meeting Schedule",
    created: new Date(2023, 6, 25),
    category: "Idea",
    content: "Team meeting, 08/02/2023, 08/16/2023, 08/30/2023",
    dates: ["02/08/2023", "16/08/2023", "30/08/2023"],
    archived: false,
  },
  {
    name: "Birthday Party Planning",
    created: new Date(2023, 6, 25),
    category: "Idea",
    content: "Buy decorations, cake, 09/10/2023",
    dates: ["10/09/2023"],
    archived: false,
  },
  {
    name: "Project Milestones",
    created: new Date(2023, 6, 25),
    category: "Idea",
    content: "Project kickoff, 11/01/2023, 11/15/2023, 11/30/2023",
    dates: ["01/11/2023", "15/11/2023", "30/11/2023"],
    archived: false,
  },
  {
    name: "Vacation Planning",
    created: new Date(2023, 6, 25),
    category: "Random Thought",
    content: "Book flights, 12/05/2023, 12/15/2023",
    dates: ["05/12/2023", "15/12/2023"],
    archived: false,
  },
  {
    name: "Study Schedule",
    created: new Date(2023, 6, 25),
    category: "Random Thought",
    content: "Study for exams, 01/20/2023, 01/25/2023",
    dates: ["20/01/2023", "25/01/2023"],
    archived: false,
  },
];

export default notesArray;
