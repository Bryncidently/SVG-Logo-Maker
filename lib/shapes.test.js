const {Circle, Square, Triangle} = require('./shapes.js')

describe('Triangle', () => {
    it('should be a triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });


  describe('Circle', () => {
    it('should be a circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue" />');
    });
  });

  describe('Square', () => {
    it('should be a square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="200" height="100" x="100" y="50" rx="20" ry="20" fill="blue" />');
    });
  });