# Client Part Of App, React JS

## HOW TO CLONE AND RUN REACT APP

Open your terminal and then type. $ git clone {the url to the GitHub repo} This clones the repo.
cd into the new folder and type. $ npm install. This installs the required dependencies.
To run the React project. $ npm start.

A well-known bicycle rental company in major Russian cities is experiencing problems with frequent theft of their property (bicycles). As a possible solution to the problem, the company wants to keep a record of these cases and track progress. Their own developers have already prepared the server side of the application, but you need to implement the client side.

The client part is designed for both company employees and ordinary users. A typical user has access to only a limited part of the functionality: the main page and a page with the ability to report a new case of theft.

## FUNCTIONAL REQUIREMENTS

### MAIN PAGE

The main page should contain a text description of the service, perhaps pictures of your choice. This page is available to all users without authorization.

![Main page](https://github.com/eugeny11/Client-Part-App-React-JS/blob/main/images/client_part_app_1.jpg)

### AUTHORIZATION FORM

You can place the authorization form on the main page, in the header of the site or on a separate page - at your discretion. Authorized users must be able to sign out of their account.

### REPORT THEFT

"Report stolen" should contain a form for submitting information about a stolen bike. The form must contain the following fields:

License number (mandatory field)
Client's full name (mandatory field)
Bike type (dropdown list with predefined options, required field)
Bicycle color
date of theft
Additional Information
The page must be accessible to all users without authorization. However, if an authorized employee fills out the form (for example, if the client reported the theft by phone), one more additional field is available to him: responsible employee. The field is a drop-down list with the ability to select from a list of all approved employees that are in the database.

### REGISTRATION PAGE

The registration page should contain a registration form with the following fields:

Email (mandatory field)
Password (required field)
Name
Surname
Client ID (required field)
When the registration form is submitted, a new employee is created in the database. The first created employee with a specific client ID will automatically receive the approved status, the rest of the employees will need to be approved manually.

### THEFT REPORTS

This page should contain a list of all known cases of theft (hint: it could be a table). It is not necessary to display service fields, for example, clientId. It should be possible to delete a post. Clicking on one message from the list should open its detailed page.

![Detailed list](https://github.com/eugeny11/Client-Part-App-React-JS/blob/main/images/client_part_app_4.jpg)

### STEALTH REPORT DETAILS PAGE

The detail page of the message should contain all the information about the specific case of theft, with the ability to edit any field except createdAt, updatedAt and clientId. For fields that can take values ​​from the list, you need to make fields of the appropriate types.

Remember that only approved employees should appear in the list of responsible employees.
The final comment field (resolution) should only be available when the status is "completed", and in this case it is mandatory. Those. you cannot change the status to "completed" without filling in the resolution field.

The detail page URL must contain the post id. Example: localhost:3000/cases/12345 will open the post page with id 12345.

###  EMPLOYEES

This page should contain a list of all available employees. Service fields (id, clientId, password) do not need to be displayed. It should be possible to remove an employee. When clicking on one record from the list, the detailed page of this employee should open.

![Officers](https://github.com/eugeny11/Client-Part-App-React-JS/blob/main/images/client_part_app_2.jpg)

### EMPLOYEE DETAILS PAGE

This page should contain detailed information on the employee with the possibility of editing. You cannot edit the email and clientId fields. It should be possible to approve/unapprove an employee (hint: you can use the checkbox field type for this).

The detail page URL must contain the employee id. Example: localhost:3000/officers/12345 will open the employee page with id 12345.

![Detailed officers list](https://github.com/eugeny11/Client-Part-App-React-JS/blob/main/images/client_part_app_3.jpg)

### INTERFACE REQUIREMENTS

In this project, there is no ready-made layout and you need to think over the user interface yourself. All design: colors, arrangement of elements, fonts - at your discretion. The interface will be evaluated according to the following criteria:

Readability: All text should be clearly visible and readable. The font size is at least 13 pixels.
Accessibility: All elements must be accessible for interaction. It is not allowed to overlap with other elements, "creep away" from the edge of the screen, etc.
Clarity: the user must clearly understand what a particular interface element is responsible for: a button, a field, a drop-down list, etc.
Responsiveness: the interface should display correctly on any screen size.
