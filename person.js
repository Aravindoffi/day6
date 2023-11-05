class Person {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    // Getter methods to access properties
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  
    // Setter methods to modify properties
    setName(name) {
      this.name = name;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    // Method to introduce the person
    introduce() {
      console.log(`Hi, I'm ${this.name}, ${this.age} years old, and you can reach me at ${this.email}.`);
    }
  }
  
  // Example usage:
  const person1 = new Person("Aravind", 25, "aravinde@example.com");
  const person2 = new Person("Babu", 27, "bob@example.com");
  
  person1.introduce();
  person2.introduce();
  
  // Access properties using getters
   console.log(person1.getName());
  // console.log(person1.getAge());
  // console.log(person1.getEmail());
  
  // Modify properties using setters
   person1.setName("Ajith");
  person1.setAge(31);
   person1.setEmail("ajith@example.com");
   person1.introduce();
  person1.getName()
  