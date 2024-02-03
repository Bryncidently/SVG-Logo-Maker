class Shape {
    constructor(logo, logoColor, letterColor) {
      this.logo = logo;
      this.logoColor = logoColor;
      this.letterColor = letterColor;
    }
  }

  class Circle extends Shape {
    render() {
      return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.logoColor}" />
      `
    
    }
}
  
class Square extends Shape {
    render() {
      return `<rect width="80" height="80" x="10" y="10" fill="${this.logoColor}" />`
    }
}

class Triangle extends Shape {
    render() {
      return `<polygon points="50,10 10,90 90,90" fill="${this.logoColor}" />`
    }
}

module.exports = { Circle, Square, Triangle };