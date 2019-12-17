function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

const whiteRabbit = { type: 'white', speak };
const hungryRabbit = { type: 'hungry', speak };

whiteRabbit.speak(`Oh my ears and whiskers, "how late it's getting!`);
// The white rabbit says 'Oh my ears and whiskers, how late
// it's getting!'

hungryRabbit.speak('I could use a carrot right now.');
// The hungry rabbit says 'I could use a carrot right now.'

speak.call(hungryRabbit, "Burp!");
// The hungry rabbit says 'Burp!'

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5 }); // [0, 0.4, 0.6]

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = newRabbit("weird");

class BetterRabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new BetterRabbit("killer");

let blackRabbit = new BetterRabbit("black");

// A ridiculous way to write classes!
const object = new class {
    getWord() { return 'hello'; }
}();

console.log(object.getWord()); // hello

letkillerRabbit = newRabbit("killer");
letblackRabbit = newRabbit("black");

Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth); // small
killerRabbit.teeth = 'long, sharp, and bloody';
console.log(killerRabbit.teeth); // long, sharp, and bloody
console.log(blackRabbit.teeth); // small
console.log(Rabbit.prototype.teeth); // small

class Temperature {
    constructor(celsius) { this.celsius = celsius; }
    get fahrenheit() { returnthis.celsius * 1.8 + 32; }
    set fahrenheit(value) { this.celsius = (value - 32) / 1.8; }
    static fromFahrenheit(value) { return new Temperature((value - 32) / 1.8); }
}
const temp = new Temperature(22);
console.log(temp.fahrenheit); // 71.6
temp.fahrenheit = 86; // Calls fahrenheit(value)
console.log(temp.celsius); // 30

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (lety = 0; y < height; y++) {
            for (letx = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next() {
        if (this.y === this.matrix.height) return { done: true };
        constvalue = { x: this.x, y: this.y, value: this.matrix.get(this.x, this.y) };
        this.x++;
        if (this.x === this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return { value, done: false };
    }
}

const matrix = newMatrix(2, 2, (x, y) => `value ${x},${y}`);
for (const { x, y, value }
    of matrix) {
    console.log(x, y, value);
}
// 0 0 value 0,0
// 1 0 value 1,0
// 0 1 value 0,1
// 1 1 value 1,1

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) returnelement(y, x);
            returnelement(x, y);
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) { super.set(y, x, value); }
    }
}
const matrix2 = newSymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3)); // 3,2