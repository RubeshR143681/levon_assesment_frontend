# Traffic Light Simulator with Pedestrian Crossing and Emergency Override

## Overview

This project is a Traffic Light Simulator built with React and Tailwind CSS. It includes a traffic light system with a vertical layout, pedestrian crossing functionality, and an emergency vehicle override feature. Toast notifications are used to provide feedback on user actions.

## Features

- **Traffic Light Control**: Three lights (Red, Yellow, Green) that follow a specific sequence with timers.
- **Pedestrian Crossing**: A button to request pedestrian crossing, which changes the light to Red and extends the Red duration.
- **Emergency Vehicle Override**: An emergency button that interrupts the current light sequence to allow emergency vehicles to pass.
- **Countdown Timers**: Displays remaining seconds for each light before changing.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/traffic-light-simulator.git
Navigate to the Project Directory
   cd traffic-light-simulator
   
Install Dependencies

Ensure you have Node.js installed. Then run:



    npm install
Usage
Start the Development Server


    npm start
This will start the development server and open the application in your default browser. The application will be available at http://localhost:3000.

Interacting with the Application

Traffic Light: Observe the traffic light sequence change between Green, Yellow, and Red.
Pedestrian Button: Click to request a pedestrian crossing. The traffic light will turn Red, and a toast notification will appear.
Emergency Vehicle Override: Click the button to override the traffic light sequence for emergency vehicles.
Project Structure
src/
components/
GreenLight.js: Component for displaying the green light.
YellowLight.js: Component for displaying the yellow light.
RedLight.js: Component for displaying the red light.
PedestrianButton.js: Component for requesting pedestrian crossing.
TrafficLight.js: Main component handling traffic light control and UI interactions.
context/
TrafficLightContext.js: Context and reducer for managing traffic light state and actions.
App.js: Main application component.
index.js: Entry point of the application.
Customization
Timers: Modify the timer values in the TrafficLightContext.js file to adjust how long each light stays on.
Styles: Customize the appearance of the traffic lights and buttons using Tailwind CSS classes in the component files.
Dependencies
React: Frontend library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
React Toastify: Library for displaying toast notifications.
Contributing
Feel free to open issues or submit pull requests if you have suggestions or improvements. Please follow the standard Git workflow for contributing.






