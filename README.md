# React Form with Local Storage and Validation

This is a React-based project that implements a form with the following features:

  - Validation for each input field.
  - LocalStorage integration to store and manage user data.
  - A modular design using three separate components for enhanced maintainability.

# Table of Contents
  1. Features
  2. Usage
  3. Components
  4. Screenshots

# Features
  - Input validation for form fields like Username, Email, Password, etc.
  - Data persistence using LocalStorage.
  - Real-time display of the submitted data in a table format.
  - Edit and delete functionality for managing user data.

# Usage
  1. Open the form in your browser at http://localhost:5173 (or the specified port).
  2. Fill in the required fields with valid data.
  3. Submit the form. The data will be validated, stored in LocalStorage, and displayed in the table below.
  4. Use the "Edit" or "Delete" actions to modify or remove records.

# Components
  1. Form.jsx
      - Handles user input fields with validation logic for fields like:
          - Username
          - Email
          - Password
          - Phone Number
          - Stores validated data into LocalStorage.
  2. View.jsx
      - Fetches data from LocalStorage.
      - Displays the data in a table format with options to edit and delete entries.
  3. Checkbox.jsx
      - Handles the checkbox functionality.

# Screenshots
- Form 
![image](https://github.com/user-attachments/assets/4f1e0a6c-5a44-468a-850e-b42d8d1c4c9e)

- Form Validation
![image](https://github.com/user-attachments/assets/20e8de70-bda8-4269-8f54-f9bcb7288c7e)

- Edit Functionality
![image](https://github.com/user-attachments/assets/4b7db4c4-7e6a-4132-955b-cb3b5953f794)
![image](https://github.com/user-attachments/assets/7ffd3d9a-f27a-4400-bf70-8839b185ea2c)
![image](https://github.com/user-attachments/assets/58bc309a-8c94-42e5-9cf4-9310c62de7a8)

-Delete Functionality
![image](https://github.com/user-attachments/assets/609bbab4-eaea-4083-ae10-266b0609c1db)





