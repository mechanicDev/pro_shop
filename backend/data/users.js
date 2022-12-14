import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Bob Ross",
    email: "bob@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Scuba Steve",
    email: "steve@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
