class Summator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log(this);
    }
    
    getSum() {
        return this.a + this.b;
    }   

    getSquare() {
        return this.getSum() * 2;
    }
};

const s1 = new Summator(1, 2);
const s2 = new Summator(3, 2);

console.log("sum", s1.getSum());
s1.a = 5;
console.log(s1.a);

// example
const user = {
    name: Maksim,
    dateOfBirth: 2001,

    getName() {
        return this.name;
    },
    calculateAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.dateOfBirth(); 
    }, 
};

console.log(user.getName);
console.log(currentYear);

