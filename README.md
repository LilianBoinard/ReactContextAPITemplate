# Vite + React + TypeScript (REST API Template)

[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB.svg?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Axios](https://img.shields.io/badge/HTTP%20Client-axios-5A29E4.svg?logo=axios)](https://axios-http.com/)

This project is a **personal template** for React applications who use **REST API**. It provides a basic setup for fetching data from a REST API. The template is **not intended to receive contributions**—feel free to use it or adapt it for your own projects.

---

## Features

- **Vite** for fast development and bundling.
- **React** and **TypeScript** for robust, type-safe UI development.
- **Axios** for making HTTP requests to REST APIs.
- Clean project structure with custom hooks for API logic.

---

## Prerequisites

- **Node.js** (version 16 or above recommended)
- **npm** or **yarn** as a package manager

---

## Getting Started

1. **Clone the repository** (or copy the template files if you’re integrating this into an existing setup).

   ```bash
   git clone https://github.com/your-username/ReactContextAPITemplate.git
   ```

2. **Install dependencies**:

   ```bash
   cd ReactContextAPITemplate
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the project root (or use `.env.local` for local development) with the necessary API keys/URLs. For example:

   ```bash
   VITE_OPEN_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/onecall
   VITE_OPEN_WEATHER_API_ID=YOUR_OPEN_WEATHER_API_KEY
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173/) by default.

5. **Build for production**:

   ```bash
   npm run build
   # or
   yarn build
   ```

   This will create an optimized production build in the `dist` folder.

---

## Disclaimer

This template is meant for **personal use** as a starting point for projects that integrate with a REST API.  
It is **not open to public contributions**, but you are welcome to fork, modify, or extend it to fit your own needs.

---

## License

[MIT](https://opensource.org/licenses/MIT)

---

**Happy coding!** If you have any questions regarding this setup, feel free to reach out (though this repository is not officially supported for contributions).

