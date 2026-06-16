# movie-search

A modern React application for searching movies in real time using the OMDb API.

[Live video walkthrough](https://geraldkallis.com) · Built with React, Tailwind CSS, and Vite

## What it does

Search for any movie by title and see live results as you type — poster, year, genre, and plot — without waiting for a full form submission. Built to demonstrate clean third-party API integration and a maintainable component architecture rather than one large monolithic file.

## Features

- Live search-as-you-type against the OMDb API
- Component-based architecture — search bar, results grid, and movie detail card are separated into clean, reusable components
- Fully responsive UI built with Tailwind CSS, no custom breakpoints needed
- Proper loading and empty-state handling for real API conditions (not mock data)

## Tech stack

- **React** — UI library
- **Tailwind CSS** — styling
- **Vite** — build tool and dev server
- **OMDb API** — movie data source

## Getting started

### Prerequisites

- Node.js 18+
- An OMDb API key ([get one free here](https://www.omdbapi.com/apikey.aspx))

### Installation

```bash
git clone https://github.com/GeraldKallis/movie-search.git
cd movie-search
npm install
```

### Environment setup

Create a `.env` file in the project root:

```
VITE_OMDB_API_KEY=your_api_key_here
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

## Project structure

```
src/
├── components/       # SearchBar, ResultsGrid, MovieCard
├── hooks/             # API fetching logic
├── App.jsx
└── main.jsx
```

## License

MIT
