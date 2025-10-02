# ClimaX - Weather Forecast Application

ClimaX is a modern weather forecasting application that provides real-time weather information and 5-day forecasts for any location worldwide. Built with vanilla JavaScript and utilizing contemporary web technologies, it offers an intuitive user interface with beautiful visual design.

## Features

- **Location Search**: Search for weather information by city name
- **Multiple Units**: Support for Metric, US, and UK measurement systems
- **Dynamic UI**: Weather-condition-specific styling and icons
- **5-Day Forecast**: Detailed forecast for the next 5 days
- **Real-time Data**: Current weather conditions and detailed metrics
- **Loading States**: Smooth loading animations during data fetch
- **Error Handling**: Graceful error handling for network issues or invalid locations

## Technologies Used

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **APIs**:
  - [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) for weather data
  - [Geocode Maps API](https://geocode.maps.co/) for reverse geocoding
- **Libraries**:
  - [date-fns](https://date-fns.org/) for date formatting
- **Build Tools**: Webpack (for development server and bundling)
- **Design**: Material Symbols for icons, Tailwind CSS for styling

## Getting Started

### Prerequisites

- Modern web browser
- Internet connection
- Node.js (for development)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd climax
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Project Structure

```
climax/
├── src/
│   ├── logic/
│   │   ├── constants.js      # API keys and base URLs
│   │   ├── mapping.js        # Weather condition to UI mapping
│   │   └── service.js        # API service functions
│   ├── ui/
│   │   ├── details-card.js   # Weather details component
│   │   ├── forecast-card.js  # Forecast component
│   │   ├── form.js           # Search form handling
│   │   ├── helper.js         # DOM utility functions
│   │   ├── loading-spinner.js# Loading animation
│   │   ├── summary-card.js   # Main weather summary
│   │   └── ui.js             # Main UI controller
│   ├── main.css              # Main stylesheet
│   ├── main.html             # Main HTML file
│   └── main.js               # Application entry point
├── package.json
└── README.md
```

## How It Works

1. **User Input**: Enter a city name in the search field and select preferred units
2. **Data Fetching**: The app retrieves weather data from Visual Crossing API
3. **Location Resolution**: Reverse geocoding provides detailed location information
4. **UI Rendering**: Data is displayed in a visually appealing format with:
   - Current weather summary with dynamic background
   - Detailed metrics (humidity, wind speed, visibility, etc.)
   - 5-day forecast with daily conditions
5. **Error Handling**: If any error occurs, user-friendly error messages are displayed

## Key Components

### Weather Cards

- **Summary Card**: Displays current temperature, conditions, and location
- **Details Card**: Shows detailed weather metrics
- **Forecast Cards**: Presents 5-day weather forecast

### Dynamic Styling

The application dynamically changes its appearance based on current weather conditions using a mapping system that assigns:

- Background colors
- Text colors
- Icon representations
- Specific styling for different weather types (sunny, rainy, cloudy, etc.)

## API Integration

The application uses two main APIs:

1. **Weather Data**: Visual Crossing Weather API
   - Provides current conditions and forecast data
   - Supports multiple unit systems

2. **Location Data**: Geocode Maps API
   - Converts coordinates to readable location names
   - Provides detailed address information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is part of The Odin Project curriculum and is intended for educational purposes.

## Acknowledgments

- Weather data provided by [Visual Crossing](https://www.visualcrossing.com/)
- Geocoding services by [Geocode Maps](https://geocode.maps.co/)
- Icons from [Material Symbols](https://fonts.google.com/icons)
- UI framework powered by [Tailwind CSS](https://tailwindcss.com/)
- Date formatting with [date-fns](https://date-fns.org/)

## Author

**Muhammad Khizar** - [mhmkhizar](https://github.com/mhmkhizar)

---

_Built with ❤️ as part of The Odin Project curriculum_
