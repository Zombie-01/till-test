// pages/api/enterprises.ts
import { NextApiRequest, NextApiResponse } from "next";

// Mock in-memory storage for enterprise data (replace with a database in production)
let enterprises: {
  id: number;
  company_name: string;
  key_company_name: string;
  company_phone: string;
  first_balance: number;
  last_balance: number;
  debut: Date;
  account: string;
  cash: number;
  non_cash: number;
  e_barimt: string;
  transaction_user: string;
  payer: string;
  date: Date;
}[] = [
  {
    id: 1,
    company_name: "Company A",
    key_company_name: "Key A",
    company_phone: "123-456-7890",
    first_balance: 1000,
    last_balance: 1200,
    debut: new Date("2021-01-01"),
    account: "A123456",
    cash: 500,
    non_cash: 700,
    e_barimt: "12345",
    transaction_user: "Admin",
    payer: "Customer A",
    date: new Date(),
  },
  {
    id: 2,
    company_name: "Company B",
    key_company_name: "Key B",
    company_phone: "987-654-3210",
    first_balance: 2000,
    last_balance: 2200,
    debut: new Date("2021-06-01"),
    account: "B654321",
    cash: 1000,
    non_cash: 1200,
    e_barimt: "54321",
    transaction_user: "Manager",
    payer: "Customer B",
    date: new Date(),
  },
  // Add more enterprises as needed
];

// Helper functions for CRUD operations and pagination
const getEnterprises = (page: number, limit: number) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return enterprises.slice(startIndex, endIndex);
};

const getTotalCash = () => {
  return enterprises.reduce((total, enterprise) => total + enterprise.cash, 0);
};

const getTotalNonCash = () => {
  return enterprises.reduce(
    (total, enterprise) => total + enterprise.non_cash,
    0
  );
};

const createEnterprise = (enterpriseData: any) => {
  const newEnterprise = {
    id: enterprises.length + 1,
    ...enterpriseData,
  };
  enterprises.push(newEnterprise);
  return newEnterprise;
};

const updateEnterprise = (id: number, updatedData: any) => {
  const enterpriseIndex = enterprises.findIndex((e) => e.id === id);
  if (enterpriseIndex === -1) return null;
  enterprises[enterpriseIndex] = {
    ...enterprises[enterpriseIndex],
    ...updatedData,
  };
  return enterprises[enterpriseIndex];
};

const deleteEnterprise = (id: number) => {
  const enterpriseIndex = enterprises.findIndex((e) => e.id === id);
  if (enterpriseIndex === -1) return null;
  return enterprises.splice(enterpriseIndex, 1)[0];
};

// Main API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { page = 1, limit = 10 } = req.query;

  switch (method) {
    case "GET": {
      const pageNumber = parseInt(page as string, 10);
      const limitNumber = parseInt(limit as string, 10);

      const paginatedEnterprises = getEnterprises(pageNumber, limitNumber);
      const totalCash = getTotalCash();
      const totalNonCash = getTotalNonCash();
      const totalCount = enterprises.length;

      res.status(200).json({
        data: paginatedEnterprises,
        totalCash,
        totalNonCash,
        totalCount,
      });
      break;
    }

    case "POST": {
      const {
        company_name,
        key_company_name,
        company_phone,
        first_balance,
        last_balance,
        debut,
        account,
        cash,
        non_cash,
        e_barimt,
        transaction_user,
        payer,
        date,
      } = req.body;

      if (!company_name || !key_company_name || !company_phone) {
        return res
          .status(400)
          .json({
            message: "Company name, key company name, and phone are required",
          });
      }

      const newEnterprise = createEnterprise({
        company_name,
        key_company_name,
        company_phone,
        first_balance,
        last_balance,
        debut,
        account,
        cash,
        non_cash,
        e_barimt,
        transaction_user,
        payer,
        date,
      });
      res.status(201).json(newEnterprise);
      break;
    }

    case "PUT": {
      const { id, ...updatedData } = req.body;
      if (!id) {
        return res.status(400).json({ message: "Enterprise ID is required" });
      }
      const updatedEnterprise = updateEnterprise(id, updatedData);
      if (!updatedEnterprise) {
        return res.status(404).json({ message: "Enterprise not found" });
      }
      res.status(200).json(updatedEnterprise);
      break;
    }

    case "DELETE": {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ message: "Enterprise ID is required" });
      }
      const deletedEnterprise = deleteEnterprise(id);
      if (!deletedEnterprise) {
        return res.status(404).json({ message: "Enterprise not found" });
      }
      res.status(200).json(deletedEnterprise);
      break;
    }

    default: {
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
