// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from "next";

// Mock in-memory storage for users (replace with a database in production)
let users: {
  id: number;
  username: string;
  password: string;
  phone_number: string;
  role: string;
  email: string;
  position: string;
  last_login: Date | null;
  account_expired: boolean;
  is_active: boolean;
}[] = [
  {
    id: 1,
    username: "john_doe",
    phone_number: "1234567890",
    password: "password",
    role: "admin",
    email: "john@example.com",
    position: "Manager",
    last_login: null,
    account_expired: false,
    is_active: true,
  },
];
// Helper functions for user operations
const getUsers = () => users;

const createUser = (userData: any) => {
  const newUser = {
    id: users.length + 1,
    last_login: null,
    account_expired: false,
    is_active: true,
    ...userData,
  };
  users.push(newUser);
  return newUser;
};

const updateUser = (id: number, updatedData: any) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) return null;
  users[userIndex] = { ...users[userIndex], ...updatedData };
  return users[userIndex];
};

const deleteUser = (id: number) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) return null;
  return users.splice(userIndex, 1)[0];
};

// Main API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET": {
      // Return all users
      res.status(200).json(getUsers());
      break;
    }

    case "POST": {
      // Create a new user
      const { username, password, phone_number, role, email, position } =
        req.body;
      if (!username || !password || !role || !email) {
        return res.status(400).json({
          message: "Username, password, role, and email are required",
        });
      }
      const newUser = createUser({
        username,
        password,
        phone_number,
        role,
        email,
        position,
      });
      res.status(201).json(newUser);
      break;
    }

    case "PUT": {
      // Update an existing user
      const { id, ...updatedData } = req.body;
      if (!id) {
        return res.status(400).json({ message: "User ID is required" });
      }
      const updatedUser = updateUser(id, updatedData);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser);
      break;
    }

    case "DELETE": {
      // Delete a user
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ message: "User ID is required" });
      }
      const deletedUser = deleteUser(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(deletedUser);
      break;
    }

    default: {
      // Method not allowed
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
