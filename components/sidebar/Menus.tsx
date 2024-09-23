"use client";

import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { useTranslations } from "next-intl";

import {
  FaHandHoldingDollar,
  FaUserGroup,
  FaDollarSign,
  FaList,
  FaClock,
  FaUserTie,
  FaSliders,
  FaCode,
  FaPhone,
  FaHeadset,
} from "react-icons/fa6";

export const getMenus = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("sidebar");
  return [
    {
      key: "/crm/dashboard",
      type: "group",
      label: t("dashboard"),
      children: [
        { key: "/crm/dashboard/dialing", label: t("dialing"), icon: <FaHeadset /> },
        {
          key: "/crm/dashboard/customer",
          label: t("customer"),
          icon: <FaUserGroup />,
        },
        { key: "/crm/dashboard/loan", label: t("loan"), icon: <FaDollarSign /> },
      ],
    },

    {
      key: "/crm/customer",
      label: t("customer"),
      type: "group",
      children: [
        {
          key: "/crm/customers",
          label: t("list"),
          icon: <FaList />,
        },
        {
          key: "/crm/customer-error-history",
          label: t("error_history"),
          icon: <FaClock />,
        },
      ],
    },
    {
      key: "loan",
      label: t("loan"),
      type: "group",
      children: [
        {
          key: "/crm/loans",
          label: t("term_loan"),
          icon: <FaHandHoldingDollar />,
        },
        {
          key: "/crm/loan-error-history",
          label: t("error_history"),
          icon: <FaClock />,
        },
      ],
    },
    {
      key: "/crm/dialed",
      label: t("call_history"),
      type: "group",
      children: [
        {
          label: t("all_history"),
          key: "/crm/dialed-all-history",
          icon: <FaHeadset />,
        },
        {
          label: t("dialing_history"),
          key: "/crm/dialed-history",
          icon: <FaPhone />,
        },
      ],
    },
    {
      key: "/crm/settings",
      label: t("settings"),
      type: "group",
      children: [
        {
          key: "/crm/users",
          label: t("users"),
          icon: <FaUserTie />,
        },
        {
          key: "/crm/settings-role",
          label: t("role_management"),
          icon: <FaSliders />,
        },
        {
          key: "/crm/settings-code",
          label: t("cmm_code"),
          icon: <FaCode />,
        },
      ],
    },
  ] as ItemType<MenuItemType>[] | undefined;
};
export default getMenus;
