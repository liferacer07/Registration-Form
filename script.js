document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting immediately

        let valid = true;

        // Validate Username
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username is required');
            valid = false;
        } else {
            clearError(usernameInput);
        }

        // Validate Email
        if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email');
            valid = false;
        } else {
            clearError(emailInput);
        }

        // Validate Password
        if (passwordInput.value.trim().length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            valid = false;
        } else {
            clearError(passwordInput);
        }

        if (valid) {
            form.submit(); // Submit the form if all fields are valid
        }
    });

    function showError(input, message) {
        const inputGroup = input.parentElement;
        const errorMessage = document.createElement('small');
        errorMessage.className = 'error-message';
        errorMessage.innerText = message;
        clearError(input); // Clear any existing error message
        inputGroup.appendChild(errorMessage);
        input.classList.add('error');
    }

    function clearError(input) {
        const inputGroup = input.parentElement;
        const errorMessage = inputGroup.querySelector('.error-message');
        if (errorMessage) {
            inputGroup.removeChild(errorMessage);
        }
        input.classList.remove('error');
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
