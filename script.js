// Function to hide the loading screen after 2 seconds
window.addEventListener('load', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    const content = document.querySelector('.content');

    // Hide the loading screen after 2 seconds
    setTimeout(function () {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // 
});



// 

// Form Submission
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You can perform form validation and submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
});
// JavaScript to add styling to the "Style Me" button when clicked
const styleButton = document.getElementById('style-button');

styleButton.addEventListener('click', function () {
    // Add your desired styles here
    styleButton.style.backgroundColor = '#434566'; // Change background color on click
    styleButton.style.color = 'blue';
});
