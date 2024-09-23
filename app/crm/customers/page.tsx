"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaUserGroup } from "react-icons/fa6";
import { List } from "@/components";
import { CustomersForm } from "./Form";
import { CustomersTable } from "./Table";
import { CustomersFilter } from "./Filter";

/**
 * Customer list page
 */
export default function CustomerPage() {
  // Translation
  const t = useTranslations("customer");

  // States
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<any>();

  //Functions
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(false);

  const selectListItem = (itemData: any) => {
    openModal();
    setFormData(itemData);
  };

  // Render
  return (
    <List
      title={t("customers")}
      createButtonText={t("create_new_customer")}
      onCreateButtonClick={openModal}
      titleIcon={<FaUserGroup />}
      filterForm={<CustomersFilter />}
      hideCreateButton
    >
      {/* Customer detail modal */}
      <CustomersForm show={showModal} close={closeModal} formData={formData} />

      {/* List table */}
      <CustomersTable onEdit={selectListItem} />
    </List>
  );
}
