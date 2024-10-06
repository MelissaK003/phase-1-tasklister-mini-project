document.addEventListener("DOMContentLoaded", () => {

  // ELEMENTS FIELD
const taskForm = document.getElementById("create-task-form")
const tasks = document.getElementById("tasks")
const AscButton = document.getElementById("sort-asc")
// const DescButton = document.getElementById("sort-desc")

// Prevent form submission
taskForm.addEventListener('submit',(event) => {event.preventDefault()

// Form Input Fields
const taskDescription = document.getElementById("new-task-description").value;
const priority = document.getElementById("priority").value;
const dueDate = document.getElementById("due-date").value;  

// Displaying list of items - We have created a new Element
const taskItem = document.createElement('li')
taskItem.innerHTML = 
`<span class="${priority}">${taskDescription} (DueDate: ${dueDate})</span>
  <button class = "edit-btn" >Edit</button>
  <button class = "delete-btn" >Delete</button>`

// Priority Display Color
switch(priority){
  case 'High':
  taskItem.style.color = 'Red'
  break;
  case 'Medium':
  taskItem.style.color = 'Orange'
  break;
  case 'Low':
  taskItem.style.color = 'Green'
  break;
  default:
  taskItem.style.color = 'Black'
}
tasks.appendChild(taskItem); // - Ensures that our new list item is visible on the page
taskForm.reset();

// Editing a task
taskItem.querySelector(".edit-btn").addEventListener('click',() => {
  document.getElementById("new-task-description").value = taskDescription;
  document.getElementById("priority").value = priority;
  document.getElementById("due-date").value = dueDate; 
  tasks.removeChild(taskItem);
})
// Deleting a task
taskItem.querySelector(".delete-btn").addEventListener('click',() => {tasks.removeChild(taskItem)})
} )

// Sorting tasks based on priority
function priorityOrder(priority){
  switch(priority){
    case 'High':
      return 3
      case 'Medium':
        return 2
        case 'Low':
          return 1
          default:
            return 0
  }}

function sortTaskAscending() {
  const taskslist = Array.from(tasks.children)
  taskslist.sort((a,b)=>{
    const priorityA = a.querySelector('span').className;
    const priorityB = b.querySelector('span').className;

    return priorityOrder(priorityB) - priorityOrder(priorityA);
});
  while (tasks.firstChild) {
    tasks.removeChild(tasks.firstChild);
  }

  taskslist.forEach(task => {
    tasks.appendChild(task); 
  });
}

AscButton.addEventListener('click',() => {sortTaskAscending()});

});




