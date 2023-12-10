// Базовий клас Animal
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    throw new Error("This method must be implemented");
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Дочірні класи
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  makeSound() {
    return "Woof! Woof!";
  }

  getDetails() {
    return `${super.getDetails()}, Breed: ${this.breed}`;
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  makeSound() {
    return "Meow!";
  }

  getDetails() {
    return `${super.getDetails()}, Color: ${this.color}`;
  }
}

// Функція main
function main() {
  const animals = [
    new Dog("Buddy", 3, "Golden Retriever"),
    new Cat("Whiskers", 5, "Calico"),
    new Dog("Max", 2, "Labrador"),
    new Cat("Smokey", 4, "Gray"),
  ];

  for (let animal of animals) {
    console.log(`Details: ${animal.getDetails()}`);
    console.log(`Sound: ${animal.makeSound()}`);
    console.log("----------------------------------");
  }
}

main();
