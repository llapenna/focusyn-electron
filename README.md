# React + TypeScript + Vite

An Electron + React starter template.

This template provides a minimal setup to get Electron + React working, powered by [Vite](https://vitejs.dev/).

## Features

- 🔥 Hot [restart](https://electron-vite.github.io/guide/features.html#hot-restart) and [reload](https://electron-vite.github.io/guide/features.html#hot-reload)
- 📦 Packaging for Windows, macOS and Linux
- 📝 TypeScript support
- 🔧 Based on the [Electron + Vite](https://electron-vite.github.io/) templates
- 📚 [Electron Builder](https://www.electron.build/) for packaging

## Getting Started

1. Clone the repository and install the dependencies:

```bash
git clone https://github.com/llapenna/electron-react-starter.git
```

2. Install dependencies:

```bash
cd electron-react-starter
npm install
```

3. Run the app:

```bash
npm run dev
```

## Packaging

To package the app for Windows, macOS and Linux:

```bash
npm run package
```

> 💡 The resulting executables will depend on the OS you build them on. For example, if you build on macOS, you'll get a `.dmg` file, a `.exe` for Windows, etc. These executables are located in the `release` folder.
