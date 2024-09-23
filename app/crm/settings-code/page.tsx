"use client";

import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Space, Typography } from "antd";
import { FaArrowDown, FaCode, FaCodeBranch } from "react-icons/fa6";
import { CmmCode } from "@/types";
import { List, useListContext } from "@/components";
import { SettingsCodeForm } from "./Form";
import { SettingsCodeTable } from "./Table";
import { SettingsCodeFilter } from "./Filter";
import { SettingsCodeDtlForm } from "./DtlForm";
import { SettingsCodeDtlTable } from "./DtlTable";

/**
 * Settings role list page
 */
export default function SettingsCodePage() {
  const { setShowFilterForm } = useListContext();

  // Common states
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [showDtlModal, setShowDtlModal] = useState(false);

  const [selectedGrp, setSelectedGrp] = useState<CmmCode>();
  const [groupFormData, setGroupFormData] = useState();
  const [dtlFormData, setDtlFormData] = useState();

  // Group code modal functions
  const openGroupModal = () => {
    setShowGroupModal(true);
  };
  const closeGroupModal = () => {
    setShowGroupModal(false);
    if (groupFormData) setGroupFormData(undefined);
  };
  const openGroupEditModal = (groupItem: any) => {
    openGroupModal();
    setGroupFormData(groupItem);
  };

  // Detail code modal functions
  const openDtlModal = () => {
    setShowDtlModal(true);
  };
  const closeDtlModal = () => {
    setShowDtlModal(false);
    if (groupFormData) setDtlFormData(undefined);
  };
  const openDtlEditModal = (dtlItem: any) => {
    setShowDtlModal(true);
    setDtlFormData(dtlItem);
  };

  return (
    <List
      title="Нийтлэг код"
      createButtonText="Шинэ код нэмэх"
      titleIcon={<FaCode />}
      filterForm={<SettingsCodeFilter />}
      onCreateButtonClick={openGroupModal}
      onFilter={() => setShowFilterForm(false)}
    >
      {/* Create, Update form modal */}
      <SettingsCodeForm show={showGroupModal} close={closeGroupModal} formData={groupFormData} />
      {/*Group code list */}
      <SettingsCodeTable
        onEdit={openGroupEditModal}
        selectedGrp={selectedGrp}
        onSelectRow={(_rowData) => setSelectedGrp(_rowData)}
      />

      <Divider>
        <FaArrowDown className="text-[#1677ff]" />
      </Divider>

      {/*Detail header*/}
      <div className="mb-2 flex justify-between">
        <Space>
          <FaCodeBranch />
          <Typography.Text>GROUP_NAME:</Typography.Text>
          <Typography.Title level={5} className="!m-0">
            {selectedGrp?.grpName}
          </Typography.Title>
        </Space>
        <Button type="primary" icon={<PlusOutlined />} onClick={openDtlModal}>
          Нэмэх
        </Button>
      </div>

      {/* Create, Update detail form modal */}
      <SettingsCodeDtlForm show={showDtlModal} close={closeDtlModal} formData={dtlFormData} />
      {/*Detail code list */}
      <SettingsCodeDtlTable onEdit={openDtlEditModal} grpCode={selectedGrp?.grpCode ?? ""} />
    </List>
  );
}
