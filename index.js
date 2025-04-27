

const contactForm = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  
  if (name && phone && email) {

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${name}</strong> | 📞 ${phone} | ✉️ ${email}
      <button onclick="removeContact(this)" class="remove-btn">❌</button>
    `;
    contactList.appendChild(li);
    contactForm.reset();
  } else {
    alert("Please fill in all the contact fields!");
  }
});

// Remove a contact
function removeContact(button) {
  button.parentElement.remove();
}

// --- To-Do List Functionality ---

// Select the task form and task list
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Handle task form submission
taskForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get task input
  const taskInput = document.getElementById("task").value.trim();

  // Validate input
  if (taskInput) {
    // Create a new task item
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskInput}</span>
      <button onclick="markDone(this)" class="done-btn">✔️ Done</button>
      <button onclick="removeTask(this)" class="remove-btn">❌ Delete</button>
    `;
    taskList.appendChild(li);

    // Clear the form
    taskForm.reset();
  } else {
    alert("Please enter a task!");
  }
});

// Mark task as done
function markDone(button) {
  const taskItem = button.parentElement.querySelector('span');
  taskItem.style.textDecoration = "line-through";
  taskItem.style.color = "green";
}

// Remove a task
function removeTask(button) {
  button.parentElement.remove();
}