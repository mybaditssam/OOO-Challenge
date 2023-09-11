// Defines the ShapeClass, constructor initializes the color and then sets the color value
class ShapeClass {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }
}

// Defines the CircularShape class, extends ShapeClass and renders an SVG circle with position
class CircularShape extends ShapeClass {
  render() {
    return `<circle cx="50%" cy="50%" r="50%" fill="${this.color}"/>`;
  }
}

// Defines the SquareShape class, extends ShapeClass and renders an SVG square with position
class SquareShape extends ShapeClass {
  render() {
    return `<rect x="25%" y="25%" height="50%" width="50%" fill="${this.color}"/>`;
  }
}

// Defines the TriangularShape class, extends ShapeClass and renders an SVG triangle with position
class TriangularShape extends ShapeClass {
  render() {
    return `<polygon points="50%,100% 0,0 100%,0" fill="${this.color}"/>`;
  }
}

module.exports = {
  CircularShape: CircularShape,
  SquareShape: SquareShape,
  TriangularShape: TriangularShape
};
