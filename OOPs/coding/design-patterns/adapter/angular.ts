// Raw API Response (JSON)
const apiResponse = {
    user_name: "John Doe",
    user_age: 25,
    user_email: "john@example.com"
};
class User {
    constructor(
        name,
        age,
        email
    ) { }
}
// Adapter to convert API response into User model
class UserAdapter {
    static adapt(apiResponse): User {
        return new User(
            apiResponse.user_name,  // Convert `user_name` → `name`
            apiResponse.user_age,   // Convert `user_age` → `age`
            apiResponse.user_email  // Convert `user_email` → `email`
        );
    }
}

// ✅ Using the Adapter
const user = UserAdapter.adapt(apiResponse);
console.log(user);
// Output: User { name: 'John Doe', age: 25, email: 'john@example.com' }
