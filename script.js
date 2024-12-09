let reminders = [];
let currentIndex = -1;

const currentReminder = document.getElementById("current-reminder");
const reminderInput = document.getElementById("reminder-input");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const reminderCounter = document.getElementById("reminder-counter");
const addBtn = document.getElementById("add-btn");

function updateReminder() {
  if (currentIndex >= 0 && currentIndex < reminders.length) {
    currentReminder.textContent = reminders[currentIndex];
    reminderCounter.textContent = `${currentIndex + 1} / ${reminders.length}`;
  } else {
    currentReminder.textContent = "No reminders yet.";
    reminderCounter.textContent = "0 / 0";
  }
}

addBtn.addEventListener("click", () => {
  const newReminder = reminderInput.value.trim();
  if (newReminder) {
    reminders.push(newReminder);
    currentIndex = reminders.length - 1; // Set current reminder to the latest
    updateReminder();
    reminderInput.value = ""; // Clear input field
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateReminder();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < reminders.length - 1) {
    currentIndex++;
    updateReminder();
  }
});

updateReminder();