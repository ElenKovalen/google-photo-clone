class Summator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    getSum() {
        return this.a + this.b;
    }
}

const s1 = new Summator(1, 1);
const s2 = new Summator(2, 2);

console.log(document.querySelector('.edit-button'));

console.log(s2.getSum);


