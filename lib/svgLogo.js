class SvgLogo {
  constructor() {
    this.shapeElement = null;
    this.textElement = null;
  }

  setShapeElement(shape) {
    this.shapeElement = shape;
  }

  setTextElement(text, fontColor) {
    this.textElement = { text, fontColor };
  }

  render() {
    const shapeSvg = this.shapeElement ? this.shapeElement.render() : '';
    const textSvg = this.textElement ? this.createTextSvg() : '';

    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
        ${shapeSvg}
        ${textSvg}
      </svg>
    `;
  }

  createTextSvg() {
    const { text, fontColor } = this.textElement;
    return `
      <text x="50%" y="50%" font-size="30" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}">${text}</text>
    `;
  }
}

module.exports = SvgLogo;
