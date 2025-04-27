

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
function removeContact(button) {
  button.parentElement.remove();
}

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
taskForm.addEventListener("submit", function(event) {
  event.preventDefault();

  
  const taskInput = document.getElementById("task").value.trim();
  if (taskInput) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskInput}</span>
      <button onclick="markDone(this)" class="done-btn">✔️ Done</button>
      <button onclick="removeTask(this)" class="remove-btn">❌ Delete</button>
    `;
    taskList.appendChild(li);


    taskForm.reset();
  } else {
    alert("Please enter a task!");
  }
});

function markDone(button) {
  const taskItem = button.parentElement.querySelector('span');
  taskItem.style.textDecoration = "line-through";
  taskItem.style.color = "green";
}

function removeTask(button) {
  button.parentElement.remove();
}