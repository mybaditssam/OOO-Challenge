# LogoMaker: Create Custom SVG Logos

## Overview
LogoMaker is a Node.js command-line application that allows you to create custom SVG logos by choosing the shape, text, and colors of your logo. This project uses the following packages:

fs.promises: To handle file operations asynchronously.
inquirer-promise: To prompt the user for input in a user-friendly manner.
Custom JavaScript modules for defining shapes and generating SVG logos.

## Features
Create SVG logos with customizable text, text color, and shape color.
Choose from three shapes: Circle, Square, and Triangle.
Ensure your text is 1-3 characters long for a personalized logo.

## Usage
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install project dependencies.
4. run node index.js
5. Follow the on-screen prompts to customize your logo.
6. Your logo will be saved as logo.svg in the project directory.

## Example
Here's an example of how LogoMaker can be used:
- Enter the desired text (up to 3 characters).
- Choose a color for the text (keyword or hexadecimal).
- Choose a color for the shape (keyword or hexadecimal).
- Select the shape for your logo (Circle, Square, or Triangle).
- Logo is generated and saved as logo.svg.

## Dependencies
- fs.promises: File system operations in a promise-based manner.
- inquirer-promise: A user-friendly CLI prompt for Node.js.
- Custom JavaScript modules for defining shapes and generating SVG logos.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

