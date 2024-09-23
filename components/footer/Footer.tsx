import { Typography } from "antd";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("sidebar");
  return (
    <section className="mx-3 md:mx-6 text-xs pb-5">
      <Typography.Text>
        © {new Date().getFullYear()}. {t("title")}, {t("copyright")}
      </Typography.Text>
    </section>
  );
};
export default Footer;
