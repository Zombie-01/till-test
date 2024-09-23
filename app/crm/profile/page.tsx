"use client";

import { Button, Card, Tag } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { ReactNode, useState } from "react";
import { PasswordForm } from "./PasswordForm";
import { useTheme } from "@/providers";
import classNames from "classnames";

const ProfilePage = () => {
  const { isDark } = useTheme();
  const [showChangePassword, setShowChangePassword] = useState(false);
  return (
    <>
      {/* Change password modal form */}
      <PasswordForm show={showChangePassword} close={() => setShowChangePassword(false)} />

      {/* Profile */}
      <div className="max-w-[870px] mx-auto">
        <Card className="">
          <div className={classNames("rounded-lg h-[100px] relative p-3", isDark ? "bg-[#1D1D1D]" : "bg-gray-100")}>
            <Button icon={<LockOutlined />} className="float-end" onClick={() => setShowChangePassword(true)}>
              Нууц үг солих
            </Button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="profile picture"
              loading="lazy"
              className="rounded-full w-20 h-20 object-cover bg-gray-100 absolute -bottom-5 left-10"
              src="https://react.vristo.sbthemes.com/assets/images/user-profile.jpeg"
            />
          </div>

          <div className="grid grid-cols-3 mt-10 gap-y-5 px-10">
            <Item label="Нэвтрэх нэр">HTSADMIN</Item>
            <Item label="Овог">HTSADMIN</Item>
            <Item label="Нэр">Burendelger</Item>
            <Item label="ID хүчинтэй хугацаа">2024.01.01 - 2024.12.31</Item>
            <Item label="Ажилтны код">BURENDELGER</Item>
            <Item label="Хэлтэс">KCH</Item>
            <Item label="Албан тушаал">Оператор</Item>
            <Item label="Хөдөлмөр эрхлэлтийн ангилал">Ажиллаж байгаа.</Item>
            <Item label="Блоклогдсон эсэх">
              <Tag color="green">Үгүй</Tag>
            </Item>
            <Item label="Сүүлд нэвтэрсэн огноо">2024.09.18</Item>
            <Item label="Утасны дугаар">99 12 34 56</Item>
            <Item label="Гар утасны дугаар">99 54 32 10</Item>
            <Item label="Имейл">burendelger@iicapital.mn</Item>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProfilePage;

const Item = ({ label, children }: { label: string; children: ReactNode }) => (
  <div>
    <label className="text-gray-500 text-xs">{label}</label>
    <p className="font-medium">{children}</p>
  </div>
);
