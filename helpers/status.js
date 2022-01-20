const successMessage = { status: 'success' };
const errorMessage = { status: 'error' };
const status = {
  success: 200, // This returns a status code of 200 when a user performs a post request
  error: 500,   // when a user encounters a glitch
  notfound: 404,   // when a user tries to perform an undefined request a status code of 404 or forbidden
  unauthorized: 401, // when a user accesses a path/page without been authorized
  conflict: 409,    // when a user inputs an email that already exist
  created: 201,     // When data is created, 
  bad: 400,         // when an invalid email is provided
  nocontent: 204,   // When a user submits an empty form
};

module.exports = {
  successMessage,
  errorMessage,
  status,
};