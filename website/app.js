const weatherAPIBaseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const weatherAPIKey = '&appid=2280079162c9c5256cba0a2e2af8ab1c&units=metric';

const server="http://localhost:8080/";


const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', performAction);

function performAction() {
    // Get the zip code and user feelings from the input fields
    const zipCode = document.getElementById('zip').value;
    const userFeelings = document.getElementById('feelings').value;

    // Call the getWeatherData function with the zip code
    getWeatherData(zipCode)
        .then(data => {
            // Extract the temperature from the retrieved data
            const temperature = data.main.temp;
            // Create a new entry object with temperature, date, and user feelings
            const newEntry = {
                temperature: temperature,
                date: getDate(),
                user_response: userFeelings
            };
            // Call the postData function to send the new entry to the server
            return postData(server +'addWeatherData', newEntry);
        })
        .then(() => {
            // Call the updateUI function to update the UI with the retrieved data
            updateUI();
        })
        .catch(error => {
            console.log(error);
        });
}

async function getWeatherData(zipCode) {
    // Fetch weather data from the OpenWeatherMap API based on the zip code
    const response = await fetch(weatherAPIBaseURL + zipCode + weatherAPIKey);
    const data = await response.json();
    return data;
}

const postData = async (url= "", data={}) => {
    const req = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    try {
        const newData = await req.json();
        console.log("Data processed",newData)
        return newData;
    }
    catch (error) {
        console.log(error);
    }
  };
  

async function updateUI() {
    // Fetch the latest data from the server
    const response = await fetch(server+'all');
    const data = await response.json();
    // Update the UI elements with the retrieved data
    document.getElementById('date').innerHTML = data.date;
    document.getElementById('temp').innerHTML = data.temperature;
    document.getElementById('content').innerHTML = data.user_response;
}

function getDate() {
    // Get the current date and format it
    const currentDate = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return currentDate.toLocaleString('en-US', options);
}
