# Indian Open Mic UI

A modern React-based web application built with TypeScript and React Router.

## 🚀 Technologies Used

### Core Stack
- **React.js** (v19.0.0) - JavaScript library for building user interfaces
- **TypeScript** (v4.9.5) - Typed superset of JavaScript
- **React Router DOM** (v7.5.3) - Client-side routing

### Development Tools
- Create React App
- Testing Libraries (@testing-library/react, @testing-library/jest-dom)
- Docker for containerization

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (latest LTS version recommended)
- npm (comes with Node.js)
- (Optional) Docker for containerized deployment

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd indian-mic-Ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm start
```
- Runs the app in development mode
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser
- The page will automatically reload when you make changes

### Production Build
```bash
npm run build
```
- Creates an optimized production build in the `build` folder
- Ready for deployment



## 🐳 Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t indian-mic-ui .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 indian-mic-ui
   ```

## 📁 Project Structure

```
indian-mic-Ui/
├── src/              # Source code directory
├── public/           # Static files
├── node_modules/     # Dependencies
├── .github/          # GitHub configuration
├── .vscode/          # VS Code settings
├── package.json      # Project configuration
├── tsconfig.json     # TypeScript configuration
├── Dockerfile        # Docker configuration
└── README.md         # Project documentation
```

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Creates a production build
- `npm run eject`: Ejects from Create React App (one-way operation)

## 📝 Features

- Modern React development with TypeScript
- Hot reloading for development
- Testing infrastructure
- Production optimization
- Docker containerization support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

