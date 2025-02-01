// Step 1: Define the Base Class
class User {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  
    getPermissions() {
      throw new Error("getPermissions() must be implemented by subclasses");
    }
  }
  
  // Step 2: Define Specific User Types
  class Admin extends User {
    constructor(name) {
      super(name, "Admin");
    }
  
    getPermissions() {
      return ["Manage Users", "Manage Posts", "View Reports", "Full Access"];
    }
  }
  
  class Moderator extends User {
    constructor(name) {
      super(name, "Moderator");
    }
  
    getPermissions() {
      return ["Manage Posts", "Manage Comments", "View Reports"];
    }
  }
  
  class RegularUser extends User {
    constructor(name) {
      super(name, "RegularUser");
    }
  
    getPermissions() {
      return ["Post Content", "Comment on Posts"];
    }
  }
  
  // Step 3: Create a Factory Class
  class UserFactory {
    static createUser(name, role) {
      switch (role) {
        case "Admin":
          return new Admin(name);
        case "Moderator":
          return new Moderator(name);
        case "RegularUser":
          return new RegularUser(name);
        default:
          throw new Error("Invalid user role");
      }
    }
  }
  
  // Step 4: Usage Example
  const adminUser = UserFactory.createUser("Alice", "Admin");
  console.log(adminUser.name, "-", adminUser.role, "Permissions:", adminUser.getPermissions());
  
  const modUser = UserFactory.createUser("Bob", "Moderator");
  console.log(modUser.name, "-", modUser.role, "Permissions:", modUser.getPermissions());
  
  const normalUser = UserFactory.createUser("Charlie", "RegularUser");
  console.log(normalUser.name, "-", normalUser.role, "Permissions:", normalUser.getPermissions());
  