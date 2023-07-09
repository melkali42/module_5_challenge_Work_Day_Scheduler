$(document).ready(function() {
  // Handle form submission to add a task
  $("#task-form").submit(function(event) {
    event.preventDefault();
    const taskInput = $("#task-input").val();
    if (taskInput !== "") {
      addTask(taskInput);
      $("#task-input").val("");
    }
  });

  // Function to add a task to the schedule display
  function addTask(task) {
    const taskElement = $("<div>").text(task);
    $("#schedule-display").append(taskElement);
  }
});

$(document).ready(function() {
  // Update current time and date
  function updateDateTime() {
    const currentTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = currentTime.toLocaleDateString(undefined, options);
    const currentFormattedTime = currentTime.toLocaleTimeString();

    $("#current-time").text("Current Time: " + currentFormattedTime);
    $("#current-date").text("Current Date: " + currentDate);
  }

  // Initial update
  updateDateTime();

  // Handle form submission to add a task
  $("#task-form").submit(function(event) {
    event.preventDefault();
    const taskInput = $("#task-input").val();
    if (taskInput !== "") {
      addTask(taskInput);
      $("#task-input").val("");
    }
  });

  // Function to add a task to the schedule display
  function addTask(task) {
    const taskElement = $("<div>").text(task);
    $("#schedule-display").append(taskElement);
  }
});

$(document).ready(function() {
  // Update current time and date
  function updateDateTime() {
    const currentTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = currentTime.toLocaleDateString(undefined, options);
    const currentFormattedTime = currentTime.toLocaleTimeString();

    $("#current-time").text("Current Time: " + currentFormattedTime);
    $("#current-date").text("Current Date: " + currentDate);
  }

  // Initial update
  updateDateTime();

  // Handle form submission to add a task
  $("#task-form").submit(function(event) {
    event.preventDefault();
    const taskInput = $("#task-input").val();
    if (taskInput !== "") {
      addTask(taskInput);
      $("#task-input").val("");
    }
  });

  // Function to add a task to the schedule display
  function addTask(task) {
    const taskElement = $("<div>").text(task);
    const currentTime = new Date();
    const taskTime = currentTime.getHours() + 1; // Use a specific time for demonstration
    const timeBlockClass = getTimeBlockClass(currentTime.getHours(), taskTime);
    taskElement.addClass(timeBlockClass);
    $("#schedule-display").append(taskElement);
  }

  // Function to determine the class for the time block
  function getTimeBlockClass(currentHour, taskHour) {
    if (taskHour < currentHour) {
      return "past";
    } else if (taskHour === currentHour) {
      return "present";
    } else {
      return "future";
    }
  }
});

// Function to fetch stored data from localStorage
function fetchStoredData() {
  // Loop through each time block
  for (let i = 8; i <= 17; i++) {
    // Get the stored data for the current time block from localStorage
    const storedData = localStorage.getItem(`timeblock-${i}`);
    if (storedData) {
      // If data is found, populate the corresponding textarea with the stored value
      const textarea = document.querySelector(`#hour-${i} textarea`);
      textarea.value = storedData;
    }
  }
}

// Call the fetchStoredData function when the page loads
window.addEventListener('load', fetchStoredData);

