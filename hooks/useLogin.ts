import { signIn } from "next-auth/react";
import { encryptRSA } from "@/lib/encrypt";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Form, FormProps, message } from "antd";

export const useLogin = () => {
  const [form] = Form.useForm<LoginSubmitTypes>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof localStorage.getItem("remember") !== "undefined") {
      form.setFieldValue("username", localStorage.getItem("username"));
      form.setFieldValue("remember", true);
    }
  }, [form]);

  const saveUsername = (username: string) => {
    localStorage.setItem("username", username);
  };
  const clearUsername = () => {
    localStorage.removeItem("username");
  };

  // Form onFinish function
  const submit: FormProps<LoginSubmitTypes>["onFinish"] = async ({
    username,
    password,
    remember,
  }) => {
    setLoading(true);
    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    setLoading(false);
    if (!res?.error) {
      if (remember) saveUsername(username);
      else clearUsername();

      router.push("/crm");
    } else {
      message.error("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  };

  return { submit, loading, form };
};

export type LoginSubmitTypes = {
  username: string;
  password: string;
  remember?: boolean;
};
