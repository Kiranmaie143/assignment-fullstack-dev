# Fullstack Developer Assignment
**Objective: This assignment aims to assess your fullstack development skills. This will simulate a basic library management system. You will build both the backend (PHP with Symfony + DB schema) and frontend (React) functionalities.**

### Functionality:
* Users can login to the system. (Basic authentication with a fixed credential provided for testing, no signup method required)
* Users can view a list of available books. (20 sample data entries should be enough and the data source can be taken from the [OpenLibrary.org](https://openlibrary.org/collections/greatbooks))
* Each book has a title, author, date and an additional field to show the status- "borrowed" or "free".
* Users can search for books by title and author.
* Users can borrow only one "free" book at a time. The book availability status should be updated and shown on the frontend instantaneously.
* A user can toggle between the "borrow" and the "free" buttons to borrow a free book or set the borrowed book free.
* One user cannot borrow a book already "borrowed" by the other user.
* The system should display appropriate messages (success, error) for user actions.

### Requirements/prerequisites:
* Frontend: React
* Backend: PHP with Symfony framework
* Database: MySQL (or any equivalent)

### Part 1: Database Schema Design (~1 hour)
1. Design a simple database schema for the library management system with tables for users, book details, books' availability and booking management.

### Part 2: Backend (PHP with Symfony) (~1.5 hours)
1. Create a minimal Symfony project.
2. Implement basic user login and logout functionalities, consider using a library like Symfony Security. (for at least two test users with login credentials)
3. Define models for User and Book entities.
4. Implement functionalities to:
    * List all available books
    * Search for books by title or author (using SQL or a query builder)
    * Booking a book (flag as borrowed) for borrowing.
    * Set the borrowed book free (unflag) by the user who borrowed the book.
5. Implement API endpoints for the functionalities mentioned above.

### Part 3: Frontend (React) (~1.5 hour)
1. Create a simple React application to show the login screen for non-logged-in users. Logout also redirects back to the login screen.
2. For a logged-in user, display a list of available books and a search bar.
3. Develop a component to display a list of books with date, title, author information and the book availability status- "borrowed" or "free".
4. Implement the following functionalities:
   * pagination to show 10 books at one load. And show a "next" button to load 10 more without refreshing the page.
   * a basic search bar to filter books by title and author.
   * a "borrow" button next to each record of "free" books to borrow a book.
   * toggling between the "borrow" and "free" buttons to set the borrowed book free by the logged-in user if the person has borrowed the book.
5. Display appropriate messages for successful or failed actions.
* Bonus point for responsive layout.

### Testing:
* Focus on manual testing of the functionalities for the basic app functionality.

### Notes:
* Focus on clean code practices, meaningful variables and functions naming, and basic code commenting - for both the backend and frontend.
* This is a sample assignment, and the focus should be on demonstrating core concepts and building a functional application around the approximate timeframe.
* Feel free to use additional libraries or tools as needed, but document them in your README file.

**Once completed, submit it to your GitHub account, including the SQL export file for the DB schema and sample data and provide us with the repository link. Also include a README file with instructions on how to run your application (setup, dependencies).**

## Have fun!
##########steps####
1.install npm install
2.install npm  react-paginate
3.Added Php files in library and librarian folders - I have deep understanding of MVC patterns and sql query fetching so based on that create php files though didn't have deep knowledge.
5.Created txt file for database table structure
