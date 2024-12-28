# Todo List Frontend

This repository contains the frontend of a Todo List application built with **React JS**. The backend of the application is implemented in **Ruby on Rails** and is located in a separate repository.

## Key Features

- Task management (create, read, update, delete).
- Intuitive and responsive user interface.
- Communication with the backend via REST API.
- State management using Context API or Redux (depending on your implementation).
- Styled with CSS Modules or a library like TailwindCSS (adjust as per your project).

## Prerequisites

Before starting, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher).
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management.
- Access to the [backend repository](https://github.com/Btojaka/react_rails_todo) (update with the actual link).

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/usuario/todo-list-frontend.git
   cd todo-list-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

3. Configure the `.env` file with the necessary variables to connect to the backend:
   ```env
   REACT_APP_API_URL=http://localhost:3000/api/v1
   ```
   - Update the URL based on the backend configuration.

## Usage

1. Start the development server:
   ```bash
   npm start
   # or if using yarn
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Ensure the backend is running and properly configured. You can find instructions in the [backend repository](https://github.com/Btojaka/react_rails_todo).

## Project Structure

```plaintext
src/
├── api/                # API service configuration
│   └── endpoints.js    # API endpoint definitions
├── components/         # Reusable components
│   ├── AddTodo.js      # Component for adding tasks
│   ├── Todo.js         # Single task component
│   └── TodoList.js     # Component for displaying the list of tasks
├── App.css             # Global styles
├── App.js              # Main application component
├── App.test.js         # Tests for the App component
├── index.css           # Styles for the root file
├── index.js            # Entry point of the application
├── logo.svg            # Logo asset
├── reportWebVitals.js  # Performance measuring tool
└── setupTests.js       # Test setup
```

## Technologies Used

- **React JS**: Core library for building the user interface.
- **Axios**: For making HTTP requests to the backend.
- **React Router**: For routing within the application.
- **CSS Modules/TailwindCSS**: (Specify your choice).

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Useful Links

- [Backend Repository](https://github.com/Btojaka/react_rails_todo)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Rails Documentation](https://guides.rubyonrails.org/)

---

Thank you for contributing or using this application! If you have any questions, feel free to open an issue.
