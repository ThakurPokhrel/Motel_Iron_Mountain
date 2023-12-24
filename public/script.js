// JavaScript code for handling front-end logic

// Updated customer records to store entered data
let customerRecords = [];

// Display customer records
const displayCustomerRecords = () => {
  const customerRecordsElement = document.getElementById('customer-records');
  customerRecordsElement.innerHTML = '<h2>Customer Records</h2>';

  const recordsHTML = customerRecords.map(record => `
    <p>${record.firstName} ${record.middleName ? record.middleName + ' ' : ''}${record.lastName} - Driver's License: ${record.driverLicense} - Date of Birth: ${record.dateOfBirth}</p>
  `).join('');

  customerRecordsElement.innerHTML += recordsHTML;
};

// Function to add customer
const addCustomer = () => {
  const firstName = document.getElementById('firstName').value;
  const middleName = document.getElementById('middleName').value;
  const lastName = document.getElementById('lastName').value;
  const driverLicense = document.getElementById('driverLicense').value;
  const roomNumber = document.getElementById('roomNumber').value;

  const dateOfBirth = document.getElementById('dateOfBirth').value; // Fixed ID
  const email = document.getElementById('email').value; // Fixed ID
  const phoneNumber = document.getElementById('phoneNumber').value; // Fixed ID


  // Check if required fields are filled
  if (firstName && lastName && driverLicense && dateOfBirth) {
    // Add the customer to the records
    customerRecords.push({ firstName, middleName, lastName, driverLicense, dateOfBirth });

    // Display updated customer records
    displayCustomerRecords();

    // Clear the form fields
    document.getElementById('firstName').value = '';
    document.getElementById('middleName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('driverLicense').value = '';
    document.getElementById('roomNumber').value = '';   
    document.getElementById('dateOfBirth').value = ''; // Fixed ID
    document.getElementById('email').value = ''; // Fixed ID
    document.getElementById('phoneNumber').value = ''; // Fixed ID

    

  } else {
    alert('Please fill in all required fields.');
  }
  document.getElementById('expenses-form').style.display = 'none';  //--- new code added
};

// Initial display of customer records
displayCustomerRecords();



// Function to open the Expenses page
const openExpensesPage = () => {
    // Hide the customer form and records
    document.getElementById('customer-form').style.display = 'none';
    document.getElementById('customer-records').style.display = 'none';
  
    // Show the Expenses form
    document.getElementById('expenses-form').style.display = 'block';
  };
  
  // Function to go back to the Customer page
  const goBackToCustomerPage = () => {
    // Show the customer form and records
    document.getElementById('customer-form').style.display = 'block';
    document.getElementById('customer-records').style.display = 'block';
  
    // Hide the Expenses form
    document.getElementById('expenses-form').style.display = 'none';
  };
  

//   // Function to add customer
// const addCustomer = () => {
//     // ... (your existing code)
  
//     // Clear the form fields
//     // ...
  
//     // Hide the Expenses form
//     document.getElementById('expenses-form').style.display = 'none';
//   };
  


// Updated expenses records to store entered data
let expensesRecords = [];

// Function to add expenses
const addExpenses = () => {
  const vendor = document.getElementById('vendor').value;
  const amount = document.getElementById('amount').value;
  const expenseDate = document.getElementById('expenseDate').value;

  // Check if required fields are filled
  if (vendor && amount && expenseDate) {
    // Add the expenses to the records
    expensesRecords.push({ vendor, amount, expenseDate });

    // Display updated expenses records
    displayExpensesRecords();

    // Clear the form fields
    document.getElementById('vendor').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('expenseDate').value = '';
  } else {
    alert('Please fill in all required fields.');
  }
};

// Function to display expenses records
const displayExpensesRecords = () => {
  const expensesRecordsElement = document.getElementById('expenses-records');
  expensesRecordsElement.innerHTML = '<h2>Expenses Records</h2>';

  const recordsHTML = expensesRecords.map(record => `
    <p>${record.vendor} - Amount: ${record.amount} - Date: ${record.expenseDate}</p>
  `).join('');

  expensesRecordsElement.innerHTML += recordsHTML;
};
