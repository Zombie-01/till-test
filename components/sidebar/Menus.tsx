"use client";

import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { useTranslations } from "next-intl";
import { FaTruckLoading } from "react-icons/fa";

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
import { GiCargoCrane } from "react-icons/gi";

export const getMenus = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("sidebar");
  return [
    {
      key: "/crm/dashboard",
      type: "group",
      label: t("dashboard"),
      children: [
        {
          key: "/crm/dashboard/dialing",
          label: "График",
          icon: <FaHeadset />,
        },
        {
          key: "/crm/dashboard/customer",
          label: "Алдааны мэдээлэл",
          icon: <FaUserGroup />,
        },
        {
          key: "/crm/dashboard/loan",
          label: "Нийт тайлан",
          icon: <FaDollarSign />,
        },
      ],
    },

    {
      key: "/crm/customer",
      label: "Тооцоо",
      type: "group",
      children: [
        {
          key: "/crm/customers",
          label: "Тээврийн тооцоо",
          icon: <FaList />,
        },
        {
          key: "/crm/customer-error-history",
          label: "Тайлан",
          icon: <FaClock />,
        },
      ],
    },
    {
      key: "loan",
      label: "Талбай",
      type: "group",
      children: [
        {
          key: "/crm/loans",
          label: "Талбайн бүртгэл",
          icon: <FaHandHoldingDollar />,
        },
        {
          key: "/crm/loan-error-history",
          label: "Талбайн тооцоо",
          icon: <FaClock />,
        },
      ],
    },
    {
      key: "/crm/dialed",
      label: "Aчаа",
      type: "group",
      children: [
        {
          label: "Ачаа дөхөлт",
          key: "/crm/dialed-all-history",
          icon: <FaTruckLoading />,
        },
        {
          label: "Талбайд ирснээр",
          key: "/crm/dialed-all-history",
          icon: <FaHeadset />,
        },
        {
          label: "Үлдэгдэл",
          key: "/crm/dialed-history",
          icon: <GiCargoCrane />,
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
