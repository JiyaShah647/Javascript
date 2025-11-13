        // Validate first or last name
        function validateName(name, field) {
            const trimmed = name.trim();
            if (trimmed.length === 0) return `${field} is required.`;
            if (trimmed.length < 2) return `${field} must be at least 2 characters long.`;
            const nameRegex = /^[A-Za-zÀ-ÿ' -]+$/;
            if (!nameRegex.test(trimmed)) return `${field} can only contain letters, spaces, hyphens, and apostrophes.`;
            return true;
        }

        // Validate email
        function validateEmail(email) {
            const trimmed = email.trim();
            if (trimmed.length === 0) return "Email is required.";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";
            return true;
        }

        // Validate phone number
        function validatePhone(phone) {
            const trimmed = phone.trim();
            if (trimmed.length === 0) return "Phone number is required.";
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(trimmed)) return "Phone number must be 10 digits long.";
            return true;
        }

        // Validate message
        function validateMessage(message) {
            const trimmed = message.trim();
            if (trimmed.length < 10) return "Message must be at least 10 characters long.";
            return true;
        }

        // Utility to display error
        function showError(input, errorDiv, message) {
            if (message === true) {
                errorDiv.textContent = "";
                input.style.borderColor = "green";
                return true;
            } else {
                errorDiv.textContent = message;
                input.style.borderColor = "red";
                return false;
            }
        }

        // Handle form submit
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            const firstNameInput = document.getElementById("first-name");
            const lastNameInput = document.getElementById("last-name");
            const emailInput = document.getElementById("email");
            const phoneInput = document.getElementById("Phone_no");
            const messageInput = document.getElementById("message");

            // Error message containers
            const firstNameError = document.getElementById("firstNameError");
            const lastNameError = document.getElementById("lastNameError");
            const emailError = document.getElementById("emailError");
            const phoneError = document.getElementById("phoneError");
            const messageError = document.getElementById("messageError");

            // Validate all fields
            const validFirst = showError(firstNameInput, firstNameError, validateName(firstNameInput.value, "First name"));
            const validLast = showError(lastNameInput, lastNameError, validateName(lastNameInput.value, "Last name"));
            const validEmail = showError(emailInput, emailError, validateEmail(emailInput.value));
            const validPhone = showError(phoneInput, phoneError, validatePhone(phoneInput.value));
            const validMessage = showError(messageInput, messageError, validateMessage(messageInput.value));

            // Check if all are valid
            if (validFirst && validLast && validEmail && validPhone && validMessage) {
                alert("Form submitted successfully!");

            // Reset form fields and colors
                document.getElementById("contactForm").reset();

                // Reset border colors
                [firstNameInput, lastNameInput, emailInput, phoneInput, messageInput].forEach(input => {
                    input.style.borderColor = "#ccc";
                });
            }
        });
