# Weather Application

A simple weather application that fetches and displays the current weather information for any city using the OpenWeatherMap API.

## Features

- Fetches real-time weather data for any city.
- Displays city name, temperature, humidity, wind speed, and weather description.
- Shows weather icon corresponding to the current weather condition.
- Updates the background image based on the city.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Setup and Usage

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Open the project in your preferred code editor.

3. Replace the `apikey` variable in the `script.js` file with your OpenWeatherMap API key:
    ```javascript
    let weather = {
      apikey: "YOUR_API_KEY_HERE",
      // rest of the code
    };
    ```

4. Open `index.html` in a web browser to see the application in action.

## File Structure

```plaintext
weather-app/
├── index.html
├── style.css
└── script.js
