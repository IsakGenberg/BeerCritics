# BeerCritics: A review site for beers

## Description
BeerCritics is a web application for people that loves beer. It allows users to critique, review and find the best beers. 
When entering the website, the user is greeted with a homepage consisting of many beers, together with a search bar and also a navigation bar. 
Clicking on a specific beer allows you to see the associated reviews. A user does not need to be logged in, in order to browse beers and view reviews. 
You do need to be logged in however to write a review, and to access "My reviews".

## Folder Structure

### client/
Contains the frontend code for the BeerCritics application.

- `.gitignore`: Specifies files and directories to be ignored by Git.
- `eslint.config.js`: ESLint configuration file.
- `index.html`: The main HTML file for the client.
- `jest.config.js`: Jest configuration file for testing.
- `jest.setup.ts`: Jest setup file.
- `package.json`: Contains metadata about the project and its dependencies.
- `README.md`: Readme file for the client.
- `tsconfig.json`: TypeScript configuration file.
- `tsconfig.node.json`: TypeScript configuration file for Node.js.
- `vite.config.ts`: Vite configuration file.
- `.github/`: Contains GitHub issue templates.
- `public/`: Contains static assets such as images for beers and logos.
- `src/`: Contains the source code for the client.

### data/
Contains JSON files with sample data for beers, reviews, and users.

- `beers.json`: Sample data for beers.
- `reviews.json`: Sample data for reviews.
- `users.json`: Sample data for users.

### server/
Contains the backend code for the BeerCritics application.

- `.env`: Environment variables file.
- `jest.config.js`: Jest configuration file for testing.
- `package.json`: Contains metadata about the project and its dependencies.
- `tsconfig.json`: TypeScript configuration file.
- `db/`: Contains database-related code.
- `src/`: Contains the source code for the server.

## Where do i find the project report?
The project report can be found on the canvas page associated with group 25.

## How do i run the application?
1) Create a .env file in the root of the server directory.
2) Add SESSION_SECRET and DATABASE_URL to the env file.
3) Start Docker Desktop.
4) Open a powershell terminal and run the following commands

   - Navigate to server directory
     ```sh
     cd server
     ```
   - Install node modules
     ```sh
     npm install
     ```
   - Start the server
     ```sh
     npm run dev
     ```
5) Open a second powershell terminal and run the following commands

    - Navigate to client directory
       ```sh
       cd client
       ```
   - Install node modules
     ```sh
     npm install
     ```
   - Start the client
     ```sh
     npm run dev
     ```
6) Navigate to http://localhost:5173/ and you should see the homepage of BeerCritics
