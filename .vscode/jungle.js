class Food {
  constructor(type) {
    this.type = type;
  }
}
class Fish extends Food {
  constructor() {
    super("Fish");
  }
}
class Grain extends Food {
  constructor() {
    super("Grain");
  }
}
class Meat extends Food {
  constructor() {
    super("Meat");
  }
}
class Animal {
  constructor(member, energy = 0) {
    this.member = member;
    this.energy = energy;
  }
  makeASound() {
    this.energy -= 3;
    return `${this.member} makes a sound.`;
  }
  eatFood(food) {
    this.energy += 5;
  }
  sleep() {
    this.energy += 10;
  }
  getEnergy() {
    return this.energy;
  }
}
class Tiger extends Animal {
  constructor() {
    super("Tiger");
  }
  sleep() {
    this.energy += 5;
  }
  eatFood(food) {
    if (food instanceof Grain) return "I can not eat that.";
    return super.eatFood();
  }
}
class Monkey extends Animal {
  constructor() {
    super("Monkey");
  }
  makeASound() {
    this.energy -= 4;
    return `Monkey makes a sound.`;
  }
  eatFood() {
    this.energy += 2;
  }
  play() {
    if (this.energy < 8) {
      return "I am too tired";
    } else {
      this.energy -= 8;
      return "Oooo Oooo";
    }
  }
}
class Snake extends Animal {
  constructor() {
    super("Snake");
  }
}
class Jungle {
  constructor() {
    this.tigers = [];
    this.monkeys = [];
    this.snakes = [];
  }
  addAnimal(animal) {
    if (animal instanceof Tiger) {
      this.tigers = [...this.tigers, animal];
    } else if (animal instanceof Monkey) {
      this.monkeys = [...this.monkeys, animal];
    } else {
      this.snakes = [...this.snakes, animal];
    }
  }
  soundOff() {
    const animalSound = [];
    this.tigers.forEach((tiger) => {
      animalSound.push(tiger.makeASound());
      tiger.getEnergy();
    });
    this.monkeys.forEach((monkey) => {
      animalSound.push(monkey.makeASound());
      monkey.getEnergy();
    });
    this.snakes.forEach((snake) => {
      animalSound.push(snake.makeASound());
      return snake.getEnergy();
    });
  }
}

const jungle = new Jungle();
const tiger = new Tiger();
const monkey = new Monkey();
const snake = new Snake();
const fish = new Fish();
const grain = new Grain();
const meat = new Meat();
jungle.addAnimal(tiger);
jungle.addAnimal(monkey);
jungle.addAnimal(snake);
tiger.eatFood(grain);
//console.log(jungle.tigers);
//console.log(snake.eatFood(meat));
console.log(jungle.soundOff());
