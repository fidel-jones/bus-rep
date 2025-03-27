// Sign Up Functions
function validateName() {
  const nameInput = document.getElementById('full-name');
  const nameError = document.getElementById('nameError');
  const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces

  if (!namePattern.test(nameInput.value)) {
    nameError.textContent = 'Only alphabetical characters are allowed.';
  } else {
    nameError.textContent = '';
  }
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|edu)$/;

  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address (ending with .com, .org, or .edu).';
  } else {
    emailError.textContent = '';
  }
}

function validatePassword() {
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordPattern.test(passwordInput.value)) {
    passwordError.textContent = 'Password must be at least 8 characters long, with uppercase, lowercase,a numerical value and special characters.';
  } else {
    passwordError.textContent = '';
  }
}

function validateConfirmPassword() {
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
  } else {
    confirmPasswordError.textContent = 'Passwords match.';
    confirmPasswordError.classList.add('success');
  }
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission for validation
  validateName();
  validateEmail();
  validatePassword();
  validateConfirmPassword();

  const nameError = document.getElementById('nameError').textContent;
  const emailError = document.getElementById('emailError').textContent;
  const passwordError = document.getElementById('passwordError').textContent;
  const confirmPasswordError = document.getElementById('confirmPasswordError').textContent;

  if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
    const formData = {
      fullName: document.getElementById('full-name').value,
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    // Store username and password in localStorage
    localStorage.setItem('username', formData.username);
    localStorage.setItem('password', formData.password);

    alert('Sign up successful! Redirecting to login page...');
    window.location.href = 'file:///Users/fidelj/Desktop/bus%20web/login.html';
  }
}

// Login Function
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission for validation
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (usernameInput === storedUsername && passwordInput === storedPassword) {
    alert('Login successful! Redirecting to the booking page...');
    window.location.href = 'file:///Users/fidelj/Desktop/bus%20web/booking.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

// Attach event listeners for real-time validation on the sign-up page
if (document.getElementById('signupForm')) {
  document.getElementById('full-name').addEventListener('input', validateName);
  document.getElementById('email').addEventListener('input', validateEmail);
  document.getElementById('password').addEventListener('input', validatePassword);
  document.getElementById('confirm-password ').addEventListener('input', validateConfirmPassword);
  document.getElementById('signupForm').addEventListener('submit', handleSubmit);
}

// Attach event listener for the login page
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
}