"use client";

import { useState } from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { List } from "@/components";
import { LoanForm } from "./Form";
import { LoanTable } from "./Table";
import { LoanFilter } from "./Filter";
import AproachForm from "./AproachForm";

const LoansPage = () => {
  //States
  const [formData, setFormData] = useState();

  //Functions
  const closeModal = () => setFormData(undefined);

  // Select list item
  const openModal = (listItem: any) => {
    setFormData(listItem);
  };

  // Render
  return (
    <List
      title="Зээлүүд"
      titleIcon={<FaHandHoldingDollar />}
      filterForm={<LoanFilter />}
      onCreateModal={<AproachForm modalType="create" />}>
      {/* Loan detail modal */}
      <LoanForm close={closeModal} formData={formData} />
      {/* List table */}
      <LoanTable onEdit={openModal} />
    </List>
  );
};

export default LoansPage;
