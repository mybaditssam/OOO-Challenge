const { SquareShape, CircularShape, TriangularShape } = require("./shapes");

// CircularShape
describe('CircularShape', () => {
    test('renders correctly', () => {
        const shape = new CircularShape();
        const color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

// SquareShape
describe('SquareShape', () => {
    test('renders correctly', () => {
        const shape = new SquareShape();
        const color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

// TriangularShape
describe('TriangularShape', () => {
    test('renders correctly', () => {
        const shape = new TriangularShape();
        const color = 'orange';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});
