function makeBuffer() {
    let text = '';

    return function(piece) {
        if (arguments.length == 0) {
            return text;
        }
        text += piece;
    };
};

var buffer = makeBuffer();

buffer('Java Script ');
buffer('Need to be ');
buffer('Learned!');

console.log(buffer());

var buffer = makeBuffer();

buffer(0);
buffer(1);
buffer(3);

console.log(buffer());
