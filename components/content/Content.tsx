"use client";
import { theme, Typography } from "antd";
import { ReactNode } from "react";

export const Content = ({
  children,
  title,
}: {
  children?: ReactNode;
  title: string;
}) => {
  const { colorBgBase } = theme.useToken().token;
  return (
    <section
      style={{ backgroundColor: colorBgBase }}
      className="rounded-md shadow-sm p-5"
    >
      <Typography.Title level={3}>{title}</Typography.Title>
      {children}
    </section>
  );
};
export default Content;
