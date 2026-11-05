# 🛰️ CELESTIK-TRAINING — ISS Tracker

A simple web application built with **React, TypeScript, and Vite** to retrieve orbital data and calculate the current position of the International Space Station (ISS).

This project is a learning environment developed alongside **CELESTIK**, a satellite tracking web application.

## 🎯 Project Objectives

The main objectives are to:

- Learn React and TypeScript through practical development.
- Understand the architecture of a modern web application.
- Retrieve and process satellite orbital data (TLE).
- Calculate satellite positions using orbital propagation.
- Connect scientific calculations to an interactive web interface.

## 🚀 Features

- Retrieve ISS Two-Line Element (TLE) data from CelesTrak.
- Propagate the ISS orbit using the SGP4 model through `satellite.js`.
- Convert satellite coordinates from ECI to geodetic coordinates.
- Display latitude, longitude, and altitude.
- Calculate the ISS position on demand using an interactive button.
- Present orbital information in a responsive interface.

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Application logic and type safety |
| Vite | Development server and build tool |
| satellite.js | Orbital propagation and coordinate transformations |
| CSS | Interface styling |
| CelesTrak | Satellite TLE data source |

## 📁 Project Structure

```text
CELESTIK-TRAINING/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── iss.ts
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
└── README.md
```

### Main Files

**`src/iss.ts`**

Handles the scientific calculations:

1. Fetches ISS TLE data from CelesTrak.
2. Parses the orbital elements.
3. Initializes the SGP4 propagation model.
4. Calculates the ISS position at the current time.
5. Converts ECI coordinates into latitude, longitude, and altitude.

**`src/App.tsx`**

Manages the React interface, calls the orbital calculation function, stores the resulting position using `useState`, and displays the coordinates.

**`src/App.css`**

Defines the appearance and layout of the ISS Tracker interface.

## ⚙️ Installation

### Prerequisites

- Node.js
- npm
- Git

### Clone the repository

```bash
git clone https://github.com/kawers64/CELESTIK-TRAINING.git
cd CELESTIK-TRAINING
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal (usually `http://localhost:5173`).

## 🌍 How It Works

The application follows a simple processing pipeline:

```text
CelesTrak API
     |
     v
ISS TLE Data
     |
     v
satellite.js (SGP4)
     |
     v
ECI Coordinates
     |
     v
Geodetic Conversion
     |
     v
Latitude / Longitude / Altitude
     |
     v
React Interface
```

When the user clicks **Calculate Position**, the application retrieves orbital data, computes the ISS position, and updates the interface.

## 📚 Learning Focus

This repository is primarily an educational project designed to develop a deeper understanding of:

- React components and state management.
- TypeScript functions and asynchronous operations.
- API requests and data processing.
- Orbital mechanics and coordinate systems.
- Frontend application architecture.

## 🔭 Future Improvements

Potential improvements include:

- Displaying the ISS position on an interactive map.
- Visualizing satellite trajectories.
- Supporting multiple satellites.
- Improving error handling and loading indicators.
- Separating orbital calculations into reusable modules.

## 👨‍💻 Author

Developed by [kawers64](https://github.com/kawers64) as part of the CELESTIK learning and development process.

## 📡 Data Source

Orbital elements are retrieved from [CelesTrak](https://celestrak.org/).

Satellite propagation and coordinate transformations are performed using [satellite.js](https://github.com/shashwatak/satellite-js).
