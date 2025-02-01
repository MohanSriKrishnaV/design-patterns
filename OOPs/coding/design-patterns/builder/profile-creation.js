// Step 1: Create the User class
class User {
    constructor(builder) {
      this.name = builder.name;
      this.age = builder.age;
      this.email = builder.email;
      this.phone = builder.phone;
    }
  }
  
  // Step 2: Create the Builder class
  class UserBuilder {
    constructor(name) {
      this.name = name;
    }
  
    setAge(age) {
      this.age = age;
      return this; // Return `this` to allow method chaining
    }
  
    setEmail(email) {
      this.email = email;
      return this;
    }
  
    setPhone(phone) {
      this.phone = phone;
      return this;
    }
  
    build() {
        // console.log(this,"this");        
      return this; // Pass the built object to the User constructor
    }
  }
  
  // Step 3: Usage
  const user1 = new UserBuilder("Alice")
    .setAge(25)
    .setEmail("alice@email.com")
    .setPhone("1234567890")
    .build();
  
  const user2 = new UserBuilder("Bob") // No phone number provided
    .setAge(30)
    .setEmail("bob@email.com")
    .build();
  
  console.log(user1);
  console.log(user2);
  