# Pokedex

A Pokédex app built to practice React with Vite and real REST APIs.

## ✨ Features

- **Pokémon List**: Browse the full list of Pokémon loaded on startup.
- **Search Bar**: Find any Pokémon instantly by typing its name.
- **Detail View**: See the selected Pokémon's image, Pokédex number, and types.
- **Evolution Chain**: Displays the evolution line for each Pokémon, clickable to navigate.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **API**: [pokebuildapi.fr](https://pokebuildapi.fr) — Pokémon data (name, image, types, evolutions)
- **Containerization**: Docker + Apache HTTP Server 2.4

## ⚙️ Prerequisites

- A web server (Apache or Nginx), or Docker.

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/LuzRivera154/pokedex.git
cd pokedex
```

### 2. Build the Docker image

```bash
docker build -t pokedex .
```

## ▶️ Run

### 1. Start the container

```bash
docker run -p 8080:80 --name pokedex pokedex
```

### 2. Open your browser and go to:

```
http://localhost:8080
```

## ⏹️ Stop the app

```bash
docker stop pokedex
```

## 🗑️ Remove the container

```bash
docker rm pokedex
```

## 💻 Local Development (without Docker)

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.
