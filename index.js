// Employee object
const employee = {
    name: "Sam",
  };
  
  // Non-destructive function to update employee
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object by copying employee and adding the new key-value pair
    return { ...employee, [key]: value };
  }
  
  // Destructive function to update employee
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Directly modify the employee object
    employee[key] = value;
    return employee;
  }
  
  // Non-destructive function to delete a key from employee
  function deleteFromEmployeeByKey(employee, key) {
    // Create a copy of the employee object and delete the key from the new object
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructive function to delete a key from employee
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key from the original employee object
    delete employee[key];
    return employee;
  }
  
