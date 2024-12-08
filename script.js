document.addEventListener("DOMContentLoaded", () => {
    const reminders = [];
    const completedReminders = [];
    
    const dashboardList = document.querySelector("#dashboard ul");
    const completedList = document.querySelector("#completed ul");
    const reminderForm = document.querySelector("#add-reminder form");
    const reminderTitle = document.querySelector("#reminder-title");
    const reminderDescription = document.querySelector("#reminder-description");
    const reminderDate = document.querySelector("#reminder-date");
    const reminderCategory = document.querySelector("#reminder-category");
  
    const renderReminders = () => {
      dashboardList.innerHTML = "";
      reminders.forEach((reminder, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${reminder.title}</strong> - ${reminder.date}
          <p>${reminder.description} (${reminder.category})</p>
          <button class="complete" data-index="${index}">Complete</button>
          <button class="delete" data-index="${index}">Delete</button>
        `;
        dashboardList.appendChild(li);
      });
    };
  
    const renderCompletedReminders = () => {
      completedList.innerHTML = "";
      completedReminders.forEach(reminder => {
        const li = document.createElement("li");
        li.textContent = `${reminder.title} - Completed on ${reminder.completedDate}`;
        completedList.appendChild(li);
      });
    };
  
    reminderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = reminderTitle.value.trim();
      const description = reminderDescription.value.trim();
      const date = reminderDate.value;
      const category = reminderCategory.value;
  
      if (title && date) {
        reminders.push({ title, description, date, category });
        reminderForm.reset();
        renderReminders();
      } else {
        alert("Please fill in both title and date.");
      }
    });
  
    dashboardList.addEventListener("click", (e) => {
      const target = e.target;
      const index = target.dataset.index;
  
      if (target.classList.contains("complete")) {
        const completedReminder = reminders.splice(index, 1)[0];
        completedReminder.completedDate = new Date().toLocaleDateString();
        completedReminders.push(completedReminder);
        renderReminders();
        renderCompletedReminders();
      }
  
      if (target.classList.contains("delete")) {
        reminders.splice(index, 1);
        renderReminders();
      }
    });
  
    renderReminders();
    renderCompletedReminders();
  });  