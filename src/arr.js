// Create array
let string = '1,2,3,4,5,6,7,8,9,10';
let array = string.split(',');

for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
};

