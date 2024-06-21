class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
}


class Boxer extends Character {
    constructor(name, health, strength, weapon, power) {
        super(name, health, strength);
        this.weapon = weapon;
        this.power = power;
    }
    showAbilities() {
        console.log(`${this.name} has a health of ${this.health} and his strength is ${this.strength}, he uses his ${this.weapon} and his power is ${this.power}`);
    }
}

const boxer = new Boxer("Mohammed Ali", 100, 100, "fists", 100);

boxer.showAbilities();

class Kid extends Character {
    constructor(name, health, strength, weapon, power) {
        super(name, health, strength);
        this.weapon = weapon;
        this.power = power;
    }
    showAbilities() {
        console.log(`${this.name} has a health of ${this.health} and his strength is ${this.strength}, he uses his ${this.weapon} and his power is ${this.power}`);
    }
}

const kid = new Kid("Karate Kid", 100, 70, "roundhouse kick", 70);

kid.showAbilities();


class Fighter extends Character {
    constructor(name, health, strength, weapon, power) {
        super(name, health, strength);
        this.weapon = weapon;
        this.power = power;
    }
    showAbilities() {
        console.log(`${this.name} has a health of ${this.health} and his strength is ${this.strength}, he uses ${this.weapon} and his power is ${this.power}`);
    }
}

const fighter = new Fighter("Bruce Lee", 100, 100, "mixed martial arts", 100);

fighter.showAbilities();

// The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.