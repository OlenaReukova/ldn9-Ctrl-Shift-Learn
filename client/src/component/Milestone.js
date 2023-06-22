import "./Home.js";


document.addEventListener("DOMContentLoaded", function() {
    // Create a module object
    const module = {
      name: "Final Project",
      deadline: new Date("2023-07-08"),
    };

    // Calculate the remaining days to the deadline
    const currentDate = new Date();
    const timeDiff = module.deadline.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // Update the HTML elements with module information
    document.getElementById("module-name").textContent += module.name;
    document.getElementById("deadline").textContent += module.deadline.toDateString();
    document.getElementById("remaining-days").textContent += remainingDays + " days to deadline";
  });
