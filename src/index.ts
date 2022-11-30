import { User } from "./models/User";

const user = new User({ name: "Johnny", age: 31 });

user.set({ name: "Joao", age: 32 });

console.log(user.get("name"));
console.log(user.get("age"));
