# Weather Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Express.js, body-parser, and cors dependencies to handle server-side functionality, and dynamically update the UI based on user input and data from a weather API.

## Instructions
To set up and run the Weather Journal App project, follow these steps:

1. Clone the project repository from GitHub.
2. Install the required dependencies by running the following command in the project directory:
   ```
   npm install express cors body-parser
   ```
3. Obtain an API key from the OpenWeatherMap API by signing up on their website.
4. Open the `server.js` file and replace `'YOUR_API_KEY'` with your actual API key in the `baseURL` variable.
5. Start the server by running the following command in the project directory:
   ```
   node server.js
   ```
6. Open your web browser and enter `http://localhost:8080` to access the application.
7. Enter a valid zip code and your feelings in the input fields and click the "Generate" button.
8. The application will fetch the current temperature based on the zip code from the OpenWeatherMap API and update the UI with the temperature, date, and your feelings.

## Extras
- The project includes a `tests.js` file that provides a template for writing and running basic tests for your code. You can use it to test your code as you progress.
- Feel free to customize the `style.css` file to match your preferred design and enhance the user interface.
- You can explore additional features like displaying weather icons, adding more weather data, or improving the UI based on your creativity and skill level.

Make sure to replace `'YOUR_API_KEY'` in the code with your actual API key to ensure the weather data retrieval works correctly.

Enjoy building and experimenting with the Weather Journal App!
