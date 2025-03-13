# BeerCritics: A review site for beers

## Description
BeerCritics is a web application for people that loves beer. It allows users to critique, review and find the best beers. 
When entering the website, the user is greeted with a homepage consisting of many beers, together with a search bar and also a navigation bar. 
Clicking on a specific beer allows you to see the associated reviews. A user does not need to be logged in, in order to browse beers and view reviews. 
You do need to be logged in however to write a review, and to access "My reviews".

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
