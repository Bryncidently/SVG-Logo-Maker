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
      return `<rect width="200" height="100" x="100" y="50" rx="20" ry="20" fill="${this.logoColor}" />`
    }
}

class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />`
    }
}