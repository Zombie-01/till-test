"use client";

import { useState } from "react";
import { FaSliders } from "react-icons/fa6";
import { SettingsRoleForm } from "./Form";
import { SettingsRoleTable } from "./Table";
import { SettingsRoleFilter } from "./Filter";
import { List, useListContext } from "@/components";
import { Role } from "@/types";

/**
 * Settings role list page
 */
export default function SettingsRolePage() {
  const { setShowFilterForm } = useListContext();

  const [roleData, setRoleData] = useState<Role>();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    if (roleData) setRoleData(undefined);
  };

  const openEditModal = (roleItem: any) => {
    openModal();
    setRoleData(roleItem);
  };

  return (
    <List
      title="Эрхийн удирдлага"
      createButtonText="Шинэ эрх нэмэх"
      titleIcon={<FaSliders />}
      filterForm={<SettingsRoleFilter />}
      onCreateButtonClick={openModal}
      onFilter={() => setShowFilterForm(false)}
    >
      {/* Create, Update form modal */}
      <SettingsRoleForm show={showModal} close={closeModal} roleData={roleData} />

      {/* Role list */}
      <SettingsRoleTable onEdit={openEditModal} />
    </List>
  );
}
