# Weather-Dashboard

A full-stack Weather Application built with **React** for the frontend and **Node.js + Express** for the backend. This app fetches real-time weather data from the OpenWeatherMap API and displays it in a clean, responsive UI.

---

## 📁 Project Structure

```bash
weather-app/
├── client/       # React Frontend
├── server/       # Node.js Backend
├── README.md
├── .gitignore

```

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Display temperature, humidity, wind speed, and weather condition
- 📦 Express backend to handle API requests securely
- 🎨 Responsive and clean design
- ✅ Error handling and loading states

---

## 🛠️ Setup & Installation

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository

```bash

git clone https://github.com/pvarshney2004/Weather-Dashboard.git
cd weather-dashboard
```

### 2. Set up the Backend (Server)

```bash
cd server
npm install
```

#### Create a .env file inside the server/ directory:

```ini
API_KEY=your_openweathermap_api_key
```

#### Run the server

```bash
npx nodemon
```

### 3. Set up the Frontend (Client)

#### Open a new terminal window and run:

```bash
cd client
npm install
npm start
```

### 4. Configure Backend URL in Frontend (Manual Step)
#### If you are running the backend server on a port other than 5000, you need to update the frontend API URL manually.


### Steps:
#### Open the file
```bash
client/src/App.js
```

#### Locate the fetchData function:
Change the port number according to your backend server port.
For example, if your backend runs on port 7000, update it to:
```javascript
`http://localhost:7000/weather?city=${city}`
```

