const cancelSVG = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>`;

const submitSVG = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"/></svg>`;

import { renderNotesTable } from "../App.js";

export default function Form(handleSubmit, noteData, noteIndex) {
  // Creating the form element and populating it with initial data
  
  const form = document.createElement("form");
  form.onsubmit =  handleSubmit
  noteIndex && (form.id = noteIndex)

  // Creating and appending the input elements
  const nameInput = document.createElement("input");
  nameInput.classList.add("entry__name");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  noteData?.name && (nameInput.value= noteData.name)
  nameInput.placeholder = "Name";
  nameInput.required = true;
  form.appendChild(nameInput);

  const categorySelect = document.createElement("select");
  categorySelect.name = "category";
  categorySelect.id = "category";
  
  const taskOption = document.createElement("option");
  taskOption.value = "Task";
  taskOption.textContent = "Task";
  categorySelect.appendChild(taskOption);
  
  const randomThoughtOption = document.createElement("option");
  randomThoughtOption.value = "Random Thought";
  randomThoughtOption.textContent = "Random Thought";
  categorySelect.appendChild(randomThoughtOption);
  
  const ideaOption = document.createElement("option");
  ideaOption.value = "Idea";
  ideaOption.textContent = "Idea";
  categorySelect.appendChild(ideaOption);
  noteData?.category && (categorySelect.value=noteData.category)
  
  form.appendChild(categorySelect);

  const contentInput = document.createElement("input");
  contentInput.type = "text";
  contentInput.name = "content";
  contentInput.id = "content";
  contentInput.placeholder = "Content";
  contentInput.required = true;
  
  noteData?.content && (contentInput.value= noteData.content)
  
  form.appendChild(contentInput);

  // Creating the buttons

  const buttons = document.createElement("div");
  buttons.classList.add("entry__buttons");

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerHTML = submitSVG;
  buttons.appendChild(submitButton);

  const cancelButton = document.createElement("button");
  
  cancelButton.id = "cancel"
  cancelButton.innerHTML = cancelSVG;

  cancelButton.addEventListener("click", () => renderNotesTable())
  buttons.appendChild(cancelButton);

  form.appendChild(buttons);

  return form;
}
