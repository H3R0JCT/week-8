// Define a Bike class to represent individual bike objects
class Bike {
  constructor(brand, model, price) {
    this.brand = brand; // The brand of the bike
    this.model = model; // The model of the bike
    this.price = price; // The price of the bike
  }
}

// Define a Menu class to manage the bike inventory and user interactions
class Menu {
  constructor() {
    this.bikes = []; // Initialize an empty array to store bikes
  }

  // Display the main menu options to the user
  showMainMenu() { 
    return prompt('1. Add Bike\n2. View Bikes\n3. Remove Bike\n4. Exit'); // Prompt user for a selection
  }

  // Start the menu and handle user input
  start() {
    let selection = this.showMainMenu(); // Show the menu and get the user's selection
    while (selection != 4) { // Continue until the user selects "Exit"
      switch (selection) {
        case '1': // Option to add a bike
          this.addBike();
          break;
        case '2': // Option to view all bikes
          this.viewBikes();
          break;
        case '3': // Option to remove a bike
          this.removeBike();
          break;
        default: // Handle invalid input
          alert('Invalid selection. Please try again.');
      }
      selection = this.showMainMenu(); // Show the menu again after handling the selection
    }
  }

  // Add a new bike to the inventory
  addBike() {
    let brand = prompt('Enter bike brand: '); // Prompt for the bike's brand
    let model = prompt('Enter bike model: '); // Prompt for the bike's model
    let price = prompt('Enter bike price: '); // Prompt for the bike's price
    let newBike = new Bike(brand, model, price); // Create a new Bike object
    this.bikes.push(newBike); // Add the new bike to the bikes array
    alert('Bike added successfully!'); // Log a success message
  }

  // View all bikes in the inventory
  viewBikes() {
    if (this.bikes.length === 0) { // Check if there are no bikes
        alert('No bikes available.'); // Alert the user if the inventory is empty
    } else {
        let bikeList = 'Available Bikes:\n'; // Initialize a string to hold all bike details
        this.bikes.forEach((bike, index) => { // Iterate through the bikes array
            bikeList += `${index + 1}. ${bike.brand} ${bike.model} $${bike.price}\n`; // Append each bike's details
        });
        alert(bikeList); // Display all bikes in a single alert
    }
  }

  // Remove a bike from the inventory 
  removeBike() {
    let bikeIndex = prompt('Enter the bike number to remove: '); // Prompt for the bike number to remove
    if (bikeIndex > 0 && bikeIndex <= this.bikes.length) { // Check if the input is valid
      this.bikes.splice(bikeIndex - 1, 1); // Remove the bike at the specified index
      alert('Bike removed successfully!'); // Alert the user of successful removal
    } else {
      alert('Invalid bike number.'); // Alert the user if the input is invalid
    }
  }
}

// Create a new Menu instance
let menu = new Menu();

// Start the menu
menu.start();