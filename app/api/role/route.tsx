// pages/api/roles.ts
import { NextApiRequest, NextApiResponse } from "next";

// Simulate in-memory role storage for demonstration purposes.
let roles: { id: number; name: string }[] = [
  { id: 1, name: "admin" },
  { id: 2, name: "manager" },
  { id: 3, name: "user" },
];

// Helper functions for role operations
const getRoles = () => roles;

const createRole = (name: string) => {
  const newRole = { id: roles.length + 1, name };
  roles.push(newRole);
  return newRole;
};

const updateRole = (id: number, name: string) => {
  const roleIndex = roles.findIndex((role) => role.id === id);
  if (roleIndex === -1) return null;
  roles[roleIndex].name = name;
  return roles[roleIndex];
};

const deleteRole = (id: number) => {
  const roleIndex = roles.findIndex((role) => role.id === id);
  if (roleIndex === -1) return null;
  return roles.splice(roleIndex, 1)[0];
};

// API handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET": {
      // Return all roles
      res.status(200).json(getRoles());
      break;
    }

    case "POST": {
      // Create a new role
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: "Role name is required" });
      }
      const newRole = createRole(name);
      res.status(201).json(newRole);
      break;
    }

    case "PUT": {
      // Update an existing role
      const { id, name } = req.body;
      if (!id || !name) {
        return res
          .status(400)
          .json({ message: "Role ID and name are required" });
      }
      const updatedRole = updateRole(id, name);
      if (!updatedRole) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json(updatedRole);
      break;
    }

    case "DELETE": {
      // Delete a role
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ message: "Role ID is required" });
      }
      const deletedRole = deleteRole(id);
      if (!deletedRole) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json(deletedRole);
      break;
    }

    default: {
      // Method not allowed
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
