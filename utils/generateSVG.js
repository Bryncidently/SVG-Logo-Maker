const { Circle, Square, Triangle } = require('../lib/shapes');

const shapeMapping = {
  Circle,
  Square,
  Triangle,
};

const generateSVG = (response) => {
  const ShapeClass = shapeMapping[response.shape];
  if (!ShapeClass) {
    throw new Error('Invalid shape selected');
  }

  const shape = new ShapeClass(response.logo, response.logoColor, response.letterColor);

  return `
    <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" dominant-baseline="middle"  text-anchor="middle" fill="${response.letterColor}" font-size="20">${response.logo}</text>
    </svg>
  `;
};

module.exports = { generateSVG };
