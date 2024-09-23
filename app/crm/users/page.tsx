"use client";

import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { UserForm } from "./Form";
import { UsersTable } from "./Table";
import { UsersFilter } from "./Filter";
import { List, useListContext } from "@/components";
import { User } from "@/types";

/**
 * User list page
 */
export default function UsersPage() {
  const { setShowFilterForm } = useListContext();

  const [userData, setUserData] = useState<User>();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    if (userData) setUserData(undefined);
  };

  const openEditModal = (userItem: any) => {
    openModal();
    setUserData(userItem);
  };

  return (
    <List
      title="Хэрэглэгчид"
      createButtonText="Хэрэглэгч нэмэх"
      titleIcon={<UserOutlined />}
      filterForm={<UsersFilter />}
      onCreateButtonClick={openModal}
      onFilter={() => setShowFilterForm(false)}
    >
      {/* Create, Update form modal */}
      <UserForm show={showModal} close={closeModal} userData={userData} />

      {/* User list */}
      <UsersTable onEdit={openEditModal} />
    </List>
  );
}
