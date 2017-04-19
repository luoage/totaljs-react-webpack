# Total.js + React with webpack

Available commands to run with `npm run`:

 - `start`: build the production package and run the production server (no universal)
 - `start:dev`: build the dev package and run the server in dev mode (no universal rendering ‚Äî¬†auto-restarts on changes)
 - `build`: build the production package
 - `build:dev`: build the dev package
 - `build:dev:watch`: build the dev package in watch mode (listen for changes and re-build immediately)

## Installation

1. Install the total.js, webpack and babel modules
  
  ```
npm install
  ```
2. Generate bundled react files using webpack, files will be copy to /public

  ```
  npm run build
  ```

3. Start the server from the root directory of project

  ```
  node server
  ```

4. Visit http://localhost:8000

