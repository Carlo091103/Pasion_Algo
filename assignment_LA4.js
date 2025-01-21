 // Create an array representing the customer queue
let customerQueue = ['Elaine', 'Althea', 'Angelo', 'Lito', 'Engelbert'];

// Function to display the current queue
function displayQueue() {
  console.log("Current Queue: ");
  for (let i = 0; i < customerQueue.length; i++) {
    console.log(`${i + 1}. ${customerQueue[i]}`);
  }
}

// Function to add a customer to the queue
function addCustomer() {
  let customerName = prompt("Enter your name to join the queue:");
  customerQueue.push(customerName);
  alert(`${customerName} has been added to the queue.`);
  displayQueue();
}

// Function to service a customer based on the entered number
function serviceCustomer() {
  let customerNumber = parseInt(prompt("Enter the customer number to be serviced:"));
  
  if (customerNumber >= 1 && customerNumber <= customerQueue.length) {
    let servicedCustomer = customerQueue[customerNumber - 1];
    alert(`Now servicing: ${servicedCustomer}`);
    customerQueue.splice(customerNumber - 1, 1); // Remove the customer from the queue
    displayQueue(); // Show updated queue
  } else {
    alert("Invalid customer number.");
  }
}

// Main function to run the program
function queueSystem() {
  let continueProgram = true;

  // Initial display of the queue
  displayQueue();

  // Loop for entering customers and servicing them
  while (continueProgram) {
    let action = prompt("Choose an action: (1) Add Customer (2) Service Customer (3) Exit");
    
    switch(action) {
      case '1':
        addCustomer();
        break;
      case '2':
        serviceCustomer();
        break;
      case '3':
        alert("Exiting the program.");
        continueProgram = false;
        break;
      default:
        alert("Invalid choice. Please try again.");
        break;
    }
  }
}

// Start the queue system
queueSystem();
