const { SquareShape, CircularShape, TriangularShape } = require("./shapes");

// CircularShape
describe('CircularShape', () => {
    test('renders correctly', () => {
        const shape = new CircularShape();
        const color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="50%" fill="${color}"/>`);
    });
});

// SquareShape
describe('SquareShape', () => {
    test('renders correctly', () => {
        const shape = new SquareShape();
        const color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="25%" y="25%" height="50%" width="50%" fill="${color}"/>`);
    });
});

// TriangularShape
describe('TriangularShape', () => {
    test('renders correctly', () => {
        const shape = new TriangularShape();
        const color = 'orange';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="50%,100% 0,0 100%,0" fill="${color}"/>`);
    });
});
