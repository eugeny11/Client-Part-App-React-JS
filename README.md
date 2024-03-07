# Client Part Of App, React JS

## HOW TO CLONE AND RUN REACT APP

Open your terminal and then type. $ git clone {the url to the GitHub repo} This clones the repo.
cd into the new folder and type. $ npm install. This installs the required dependencies.
To run the React project. $ npm start.

# Клиентская часть приложения, React JS

## КАК СКЛОНИРОВАТЬ И ЗАПУСТИТЬ ПРИЛОЖЕНИЕ НА REACT

Откройте ваш терминал и введите:

$ git clone {URL репозитория на GitHub}

Это клонирует репозиторий.

Перейдите в новую папку и введите:

$ npm install
Это устанавливает необходимые зависимости.

Чтобы запустить проект React, введите:

$ npm start


A well-known bicycle rental company in major Russian cities is experiencing problems with frequent theft of their property (bicycles). As a possible solution to the problem, the company wants to keep a record of these cases and track progress. Their own developers have already prepared the server side of the application, but you need to implement the client side.

The client part is designed for both company employees and ordinary users. A typical user has access to only a limited part of the functionality: the main page and a page with the ability to report a new case of theft.

## FUNCTIONAL REQUIREMENTS

### MAIN PAGE

The main page should contain a text description of the service, perhaps pictures of your choice. This page is available to all users without authorization.

## ФОРМУЛИРОВКА ЗАДАЧИ
Известная компания по прокату велосипедов в крупных российских городах столкнулась с проблемой частых краж их имущества (велосипедов). В качестве возможного решения проблемы компания хочет вести учет этих случаев и отслеживать прогресс. Их собственные разработчики уже подготовили серверную часть приложения, но вам необходимо реализовать клиентскую часть.

Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. Обычный пользователь имеет доступ только к ограниченной части функциональности: главной странице и странице с возможностью сообщить о новом случае кражи.

![Main page](https://github.com/eugeny11/Client-Part-App-React-JS/blob/main/images/client_part_app_1.jpg)

### AUTHORIZATION FORM

You can place the authorization form on the main page, in the header of the site or on a separate page - at your discretion. Authorized users must be able to sign out of their account.

### ФОРМА АВТОРИЗАЦИИ

Форму авторизации можно разместить на главной странице, в заголовке сайта или на отдельной странице - по вашему усмотрению. Авторизованные пользователи должны иметь возможность выйти из своей учетной записи.

### REPORT THEFT

"Report stolen" should contain a form for submitting information about a stolen bike. The form must contain the following fields:

License number (mandatory field)
Client's full name (mandatory field)
Bike type (dropdown list with predefined options, required field)
Bicycle color
date of theft
Additional Information
The page must be accessible to all users without authorization. However, if an authorized employee fills out the form (for example, if the client reported the theft by phone), one more additional field is available to him: responsible employee. The field is a drop-down list with the ability to select from a list of all approved employees that are in the database.

### СООБЩИТЬ О КРАЖЕ

"Сообщить о краже" должно содержать форму для отправки информации о украденном велосипеде. Форма должна содержать следующие поля:

Номер лицензии (обязательное поле)
Полное имя клиента (обязательное поле)
Тип велосипеда (выпадающий список с предопределенными вариантами, обязательное поле)
Цвет велосипеда
Дата кражи
Дополнительная информация
Страница должна быть доступна всем пользователям без авторизации. Однако, если авторизованный сотрудник заполняет форму (например, если клиент сообщил о краже по телефону), для него доступно еще одно дополнительное поле: ответственный сотрудник. Это поле представляет собой выпадающий список с возможностью выбора из списка всех утвержденных сотрудников, находящихся в базе данных.

### REGISTRATION PAGE

The registration page should contain a registration form with the following fields:

Email (mandatory field)
Password (required field)
Name
Surname
Client ID (required field)
When the registration form is submitted, a new employee is created in the database. The first created employee with a specific client ID will automatically receive the approved status, the rest of the employees will need to be approved manually.

### СТРАНИЦА РЕГИСТРАЦИИ

На странице регистрации должна быть форма регистрации со следующими полями:

Email (обязательное поле)
Пароль (обязательное поле)
Имя
Фамилия
ID клиента (обязательное поле)
При отправке формы регистрации в базе данных создается новый сотрудник. Первый созданный сотрудник с определенным ID клиента автоматически получает статус утвержденного, остальных сотрудников нужно утвердить вручную.

### THEFT REPORTS

This page should contain a list of all known cases of theft (hint: it could be a table). It is not necessary to display service fields, for example, clientId. It should be possible to delete a post. Clicking on one message from the list should open its detailed page.

### ОТЧЕТЫ О КРАЖАХ

На этой странице должен быть список всех известных случаев краж (подсказка: это может быть таблица). Не обязательно отображать служебные поля, например, clientId. Должна быть возможность удалить запись. Нажатие на одно сообщение из списка должно открывать его подробную страницу.

![Detailed list](https://github.com/eugeny11/Client-Part-App-React-JS/blob/main/images/client_part_app_4.jpg)

### STEALTH REPORT DETAILS PAGE

The detail page of the message should contain all the information about the specific case of theft, with the ability to edit any field except createdAt, updatedAt and clientId. For fields that can take values ​​from the list, you need to make fields of the appropriate types.

Remember that only approved employees should appear in the list of responsible employees.
The final comment field (resolution) should only be available when the status is "completed", and in this case it is mandatory. Those. you cannot change the status to "completed" without filling in the resolution field.

The detail page URL must contain the post id. Example: localhost:3000/cases/12345 will open the post page with id 12345.

### СТРАНИЦА ДЕТАЛЕЙ ОТЧЕТА О КРАЖЕ

Страница деталей сообщения должна содержать всю информацию о конкретном случае кражи с возможностью редактировать любое поле, за исключением createdAt, updatedAt и clientId. Для полей, которые могут принимать значения из списка, необходимо создать поля соответствующих типов.

Помните, что в списке ответственных сотрудников должны отображаться только утвержденные сотрудники.
Поле для конечного комментария (решение) должно быть доступно только при статусе "выполнено" и в этом случае оно является обязательным. То есть вы не можете изменить статус на "выполнено", не заполнив поле резолюции.

URL страницы деталей должен содержать идентификатор сообщения. Пример: localhost:3000/cases/12345 откроет страницу сообщения с идентификатором 12345.

###  EMPLOYEES

This page should contain a list of all available employees. Service fields (id, clientId, password) do not need to be displayed. It should be possible to remove an employee. When clicking on one record from the list, the detailed page of this employee should open.

###  СОТРУДНИКИ

На этой странице должен быть список всех доступных сотрудников. Служебные поля (id, clientId, password) не нужно отображать. Должна быть возможность удалить сотрудника. При нажатии на одну запись из списка должна открываться детальная страница этого сотрудника.

![Officers](https://github.com/eugeny11/Client-Part-App-React-JS/blob/main/images/client_part_app_2.jpg)

### EMPLOYEE DETAILS PAGE

This page should contain detailed information on the employee with the possibility of editing. You cannot edit the email and clientId fields. It should be possible to approve/unapprove an employee (hint: you can use the checkbox field type for this).

The detail page URL must contain the employee id. Example: localhost:3000/officers/12345 will open the employee page with id 12345.

### ДЕТАЛЬНАЯ СТРАНИЦА СОТРУДНИКА

На этой странице должна содержаться подробная информация о сотруднике с возможностью редактирования. Нельзя редактировать поля электронной почты и clientId. Должна быть возможность утвердить/не утверждать сотрудника (подсказка: для этого можно использовать тип поля "флажок").

URL страницы деталей должен содержать идентификатор сотрудника. Пример: localhost:3000/officers/12345 откроет страницу сотрудника с идентификатором 12345.

![Detailed officers list](https://github.com/eugeny11/Client-Part-App-React-JS/blob/main/images/client_part_app_3.jpg)

### INTERFACE REQUIREMENTS

In this project, there is no ready-made layout and you need to think over the user interface yourself. All design: colors, arrangement of elements, fonts - at your discretion. The interface will be evaluated according to the following criteria:

Readability: All text should be clearly visible and readable. The font size is at least 13 pixels.
Accessibility: All elements must be accessible for interaction. It is not allowed to overlap with other elements, "creep away" from the edge of the screen, etc.
Clarity: the user must clearly understand what a particular interface element is responsible for: a button, a field, a drop-down list, etc.
Responsiveness: the interface should display correctly on any screen size.

### ТРЕБОВАНИЯ К ИНТЕРФЕЙСУ

В этом проекте нет готового макета, и вам нужно самостоятельно продумать пользовательский интерфейс. Весь дизайн: цвета, расположение элементов, шрифты - на ваше усмотрение. Интерфейс будет оцениваться по следующим критериям:

Читаемость: Весь текст должен быть четко видимым и читаемым. Размер шрифта составляет не менее 13 пикселей.
Доступность: Все элементы должны быть доступны для взаимодействия. Не допускается их перекрытие другими элементами, "вылезание" за край экрана и т. д.
Ясность: пользователь должен четко понимать, за что отвечает тот или иной элемент интерфейса: кнопка, поле, выпадающий список и т. д.
Отзывчивость: интерфейс должен корректно отображаться на любом размере экрана.
