import { NextApiRequest, NextApiResponse } from "next";

interface Item {
  id: string;
  support_date: string;
  input_type: string;
  arrival_type: string;
  direction_number: string;
  transfer_date: string;
  owner_name: string;
  receiver_address: string;
  is_empty: boolean;
  is_owner_empty: boolean;
  order_creation_date: string;
  customer_name: string;
  address: string;
  payment_due_date: string;
  is_cash_payment: boolean;
  payment_difference: number;
  announced_date: string;
  supervisor: string;
  payment_amount: number;
  payment_period: string;
  record_arrival_date: string;
  work_started_date: string;
  notified_time: string;
  handover_date_client: string;
  handover_date_supervisor: string;
  client_contact_date: string;
  client_feedback: string;
  record_feedback: string;
  initial_handover_date: string;
}

let cargoData: Item[] = []; // In-memory data storage

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req;

  switch (method) {
    case "GET": {
      const { id } = query;
      if (id) {
        // Retrieve single cargo item by ID
        const item = cargoData.find((item) => item.id === id);
        if (item) return res.status(200).json(item);
        return res.status(404).json({ message: "Item not found" });
      } else {
        // Return all cargo items
        return res.status(200).json(cargoData);
      }
    }

    case "POST": {
      // Create new cargo item
      const newItem: Item = { id: `${Date.now()}`, ...body };
      cargoData.push(newItem);
      return res.status(201).json(newItem);
    }

    case "PUT": {
      const { id } = query;
      if (!id) return res.status(400).json({ message: "ID is required" });

      // Update cargo item by ID
      const itemIndex = cargoData.findIndex((item) => item.id === id);
      if (itemIndex === -1)
        return res.status(404).json({ message: "Item not found" });

      cargoData[itemIndex] = { ...cargoData[itemIndex], ...body };
      return res.status(200).json(cargoData[itemIndex]);
    }

    case "DELETE": {
      const { id } = query;
      if (!id) return res.status(400).json({ message: "ID is required" });

      // Delete cargo item by ID
      const itemIndex = cargoData.findIndex((item) => item.id === id);
      if (itemIndex === -1)
        return res.status(404).json({ message: "Item not found" });

      const deletedItem = cargoData.splice(itemIndex, 1)[0];
      return res.status(200).json(deletedItem);
    }

    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
