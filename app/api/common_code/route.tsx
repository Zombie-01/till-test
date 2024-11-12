// pages/api/common-codes.ts
import { NextApiRequest, NextApiResponse } from "next";

// In-memory storage for groups and items
let groups: {
  group_id: string;
  group_name: string;
  group_desc: string;
}[] = [
  {
    group_id: "1",
    group_name: "Category A",
    group_desc: "Description of Category A",
  },
  {
    group_id: "2",
    group_name: "Category B",
    group_desc: "Description of Category B",
  },
];

let items: {
  item_id: string;
  parent_group: string;
  item_name: string;
}[] = [
  {
    item_id: "101",
    parent_group: "1",
    item_name: "Item 1A",
  },
  {
    item_id: "102",
    parent_group: "1",
    item_name: "Item 2A",
  },
  {
    item_id: "201",
    parent_group: "2",
    item_name: "Item 1B",
  },
];

// Helper functions
const createGroup = (groupData: any) => {
  const newGroup = {
    group_id: (groups.length + 1).toString(),
    ...groupData,
  };
  groups.push(newGroup);
  return newGroup;
};

const updateGroup = (group_id: string, updatedData: any) => {
  const groupIndex = groups.findIndex((g) => g.group_id === group_id);
  if (groupIndex === -1) return null;
  groups[groupIndex] = { ...groups[groupIndex], ...updatedData };
  return groups[groupIndex];
};

const deleteGroup = (group_id: string) => {
  const groupIndex = groups.findIndex((g) => g.group_id === group_id);
  if (groupIndex === -1) return null;
  return groups.splice(groupIndex, 1)[0];
};

const createItem = (itemData: any) => {
  const newItem = {
    item_id: (items.length + 1).toString(),
    ...itemData,
  };
  items.push(newItem);
  return newItem;
};

const updateItem = (item_id: string, updatedData: any) => {
  const itemIndex = items.findIndex((i) => i.item_id === item_id);
  if (itemIndex === -1) return null;
  items[itemIndex] = { ...items[itemIndex], ...updatedData };
  return items[itemIndex];
};

const deleteItem = (item_id: string) => {
  const itemIndex = items.findIndex((i) => i.item_id === item_id);
  if (itemIndex === -1) return null;
  return items.splice(itemIndex, 1)[0];
};

// Main API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { type, id } = req.query; // `type` can be "group" or "item"

  switch (method) {
    case "GET": {
      if (type === "group") {
        res.status(200).json(groups);
      } else if (type === "item") {
        res.status(200).json(items);
      } else {
        res.status(400).json({ message: "Invalid type parameter" });
      }
      break;
    }

    case "POST": {
      const { group_name, group_desc, parent_group, item_name } = req.body;

      if (type === "group") {
        if (!group_name || !group_desc) {
          return res
            .status(400)
            .json({ message: "group_name and group_desc are required" });
        }
        const newGroup = createGroup({ group_name, group_desc });
        res.status(201).json(newGroup);
      } else if (type === "item") {
        if (!parent_group || !item_name) {
          return res
            .status(400)
            .json({ message: "parent_group and item_name are required" });
        }
        const newItem = createItem({ parent_group, item_name });
        res.status(201).json(newItem);
      } else {
        res.status(400).json({ message: "Invalid type parameter" });
      }
      break;
    }

    case "PUT": {
      if (!id) {
        return res.status(400).json({ message: "ID is required for update" });
      }

      if (type === "group") {
        const updatedGroup = updateGroup(id as string, req.body);
        if (!updatedGroup) {
          return res.status(404).json({ message: "Group not found" });
        }
        res.status(200).json(updatedGroup);
      } else if (type === "item") {
        const updatedItem = updateItem(id as string, req.body);
        if (!updatedItem) {
          return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(updatedItem);
      } else {
        res.status(400).json({ message: "Invalid type parameter" });
      }
      break;
    }

    case "DELETE": {
      if (!id) {
        return res.status(400).json({ message: "ID is required for deletion" });
      }

      if (type === "group") {
        const deletedGroup = deleteGroup(id as string);
        if (!deletedGroup) {
          return res.status(404).json({ message: "Group not found" });
        }
        res.status(200).json(deletedGroup);
      } else if (type === "item") {
        const deletedItem = deleteItem(id as string);
        if (!deletedItem) {
          return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(deletedItem);
      } else {
        res.status(400).json({ message: "Invalid type parameter" });
      }
      break;
    }

    default: {
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
