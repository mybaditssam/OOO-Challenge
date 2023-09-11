// Packages used for my logo maker
const fs = require("fs").promises;
const inquirer = require('inquirer-promise');
const { CircularShape, SquareShape, TriangularShape } = require('./lib/shapes');
const SvgLogo = require('./lib/svgLogo');

async function init() {
  console.log("Beginning init");
  let svgString = "";
  const svgFile = "logo.svg";

  const questions = [
    {
      type: "input",
      name: "userText",
      message: "Enter up to 3 Characters:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Type in a color for the Text, this could be a keyword or hexadecimal number:",
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Type in a color for the Shape, this could be a keyword or hexadecimal number:",
    },
    {
      type: "checkbox",
      name: "userShapeType",
      message: "Which pixel image would you like to use for your logo?",
      choices: ["Circle", "Square", "Triangle"],
    },
  ];

  function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]");
    fs.writeFile(fileName, data)
      .then(() => {
        console.log("Your logo.svg has been generated!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const { default: inquirer } = await import('inquirer'); // Use dynamic import

  const answers = await inquirer.prompt(questions);

  let userInputText = "";
  if (answers.userText.length > 0 && answers.userText.length < 4) {
    userInputText = answers.userText;
  } else {
    console.log("Text field is INVALID! Enter 1-3 characters");
    return;
  }
  console.log("User text: [" + userInputText + "]");

  const userInputFontColor = answers["textColor"];
  console.log("User font color: [" + userInputFontColor + "]");

  const userInputShapeColor = answers["shapeColor"];
  console.log("User shape color: [" + userInputShapeColor + "]");

  const userInputShapeType = answers["userShapeType"];
  console.log("User entered shape = [" + userInputShapeType + "]");

  let userShape;
  if (userInputShapeType.includes("Square")) {
    userShape = new SquareShape();
    console.log("User selected a Square");
  } else if (userInputShapeType.includes("Circle")) {
    userShape = new CircularShape();
    console.log("User selected a Circle");
  } else if (userInputShapeType.includes("Triangle")) {
    userShape = new TriangularShape();
    console.log("User selected a Triangle");
  } else {
    console.log("Shape invalid");
    return;
  }
  userShape.setColor(userInputShapeColor);

  const svgLogo = new SvgLogo();
  svgLogo.setShapeElement(userShape);
  svgLogo.setTextElement(userInputText, userInputFontColor);
  svgString = svgLogo.render();

  console.log("Shape:\n\n" + svgString);

  console.log("LOGO complete!");
  console.log("Writing shape to file... Enjoy :)");
  writeToFile(svgFile, svgString);
}

init();
