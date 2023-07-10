/* Global Variables */

// Define the base URL and API key for OpenWeatherMap API
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let key = ',&appid=2280079162c9c5256cba0a2e2af8ab1c&units=metric';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

// Add an event listener to the button with id 'generate'
document.getElementById('generate').addEventListener('click', performAction);

// Function called when the button is clicked
function performAction(e){
    // Get the values from input fields
    const postCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    
    // Call the getTemp function with the required parameters
    getTemp(baseURL, postCode, key)
    .then(function (data){
        // Add data to POST request
        postData('http://localhost:8080/addWeatherData', {temperature: data.main.temp, date: newDate, user_response: feelings })
        // Function which updates UI
        .then(function() {
            updateUI()
        })
    })
}

// Async function to get temperature data from OpenWeatherMap API
const getTemp = async (baseURL, code, key)=>{
    const response = await fetch(baseURL + code  + key)
    try {
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log('error', error);
    }
}

// Async function to post data to a local server
const postData = async (url = '', data = {}) => {
    const postRequest = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await postRequest.json();
        return newData;
    }
    catch (error) {
        console.log('Error', error);
    }
}

// Update user interface with the retrieved data
const updateUI = async () => {
    const request = await fetch('http://localhost:8080/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temperature;
        document.getElementById('content').innerHTML = allData.user_response;
    }
    catch (error) {
        console.log('error', error);
    }
}
