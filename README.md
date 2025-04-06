
# Smart Calculator

A modern web application that combines the power of Optical Character Recognition (OCR) with mathematical expression evaluation. Built using React, TypeScript, and Tailwind CSS, it allows users to draw mathematical expressions on a canvas, extracts those expressions using Tesseract.js, evaluates them with mathjs, and displays the result.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Configuration](#configuration)
8. [Contributing](#contributing)
9. [License](#license)

## Overview

Smart Calculator is designed to simplify mathematical calculations by allowing users to draw expressions directly on a canvas. This intuitive approach makes it easier for users to perform calculations without typing complex expressions.

## Features

- **Canvas Input**: Draw mathematical expressions directly on a canvas.
- **OCR with Tesseract.js**: Recognizes and extracts expressions using OCR.
- **Expression Evaluation**: Uses mathjs to evaluate mathematical expressions.
- **Responsive Design**: Styled with Tailwind CSS for a modern UI.
- **Modular Architecture**: Built with reusable React components.

## Technologies Used

- **Frontend**:
  - **React**: For building UI components.
  - **TypeScript**: For static type checking.
  - **Tailwind CSS**: For utility-first styling.
  - **Tesseract.js**: For Optical Character Recognition.
  - **mathjs**: For math expression parsing and evaluation.

- **Development Tools**:
  - **Node.js**
  - **npm** or **yarn**

## Getting Started

To set up and run the Smart Calculator locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ajit421/Smart_calculator.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd Smart_calculator
   ```
3. **Create a .env file**
   ```bash
   mkdir .env
   cd .env
   ```
   **Paste your google gemini api key**
   ```
   VITE_GEMINI_API_KEY=Abc12*******************************b4
   ```

4. **Install Dependencies:**
   ```bash
   npm install
   ```

5. **Start the Application:**
   ```bash
   npm run dev
   ```

6. **View in Browser:**
   Open `http://localhost:3000` in your browser.

## view in online click on this link 👉 https://smart-cal.netlify.app

## Project Structure

```
Smart_calculator/
├── node_modules/           # Node.js dependencies
├── public/                 # Public assets
│   └── index.html
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   └── Canvas.tsx      # Canvas for drawing
│   ├── App.tsx             # Main App component
│   ├── index.tsx           # Entry point
│   └── ...
├── .gitignore              # Ignored files
├── package.json            # Project metadata and scripts
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind CSS config
└── README.md               # This file
```

## Usage

1. **Draw an Expression** on the canvas using your mouse or finger.
2. **Recognition**: The app uses OCR to convert it into a math expression.
3. **Evaluation**: The expression is evaluated and the result is displayed.
4. **Clear** the canvas to enter a new expression.

## Configuration

- **Tesseract.js**: OCR settings can be modified in the canvas-processing component.
- **Tailwind CSS**: Customize design via `tailwind.config.js`.

## Contributing

Contributions are welcome! Feel free to fork and enhance the project.

1. **Fork the Repository** on GitHub.

2. **Clone Your Fork:**
   ```bash
   git clone https://github.com/your-username/Smart_calculator.git
   ```

3. **Create a Branch:**
   ```bash
   git checkout -b feature/your-feature
   ```

4. **Make Changes & Commit:**
   ```bash
   git commit -m "Add: your feature"
   ```

5. **Push and Submit a Pull Request:**
   ```bash
   git push origin feature/your-feature
   ```
