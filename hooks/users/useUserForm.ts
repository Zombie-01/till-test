import dayjs from "dayjs";
import { useEffect } from "react";
import { Form, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/providers";
import { encryptRSA } from "@/lib/encrypt";
import { useListContext } from "@/components";
import { fetchCreateUser, fetchUpdateUser } from "@/services";
import { User } from "@/types";

/**
 * User - CREATE, UPDATE custom hook
 */
export const useUserForm = ({ close, userData }: { close: () => void; userData?: User }) => {
  const [form] = Form.useForm<User>();
  const { options, setOptions } = useListContext();

  const handleCloseModal = () => {
    close();
    form.resetFields();
  };

  // Fill form
  useEffect(() => {
    if (userData) {
      form.setFields([{ name: "username", value: userData?.username }]);
      form.setFields([{ name: "firstName", value: userData?.firstName }]);
      form.setFields([{ name: "lastName", value: userData?.lastName }]);
      form.setFields([{ name: "phone1", value: userData?.phone1 }]);
      form.setFields([{ name: "phone2", value: userData?.phone2 }]);
      form.setFields([{ name: "departmentType", value: userData?.departmentType }]);
      form.setFields([{ name: "positionType", value: userData?.positionType }]);
      form.setFields([{ name: "workStateType", value: userData?.workStateType }]);
      form.setFields([{ name: "email", value: userData?.email }]);
      form.setFields([{ name: "dateRange", value: [dayjs(userData?.activeDateFrom), dayjs(userData?.activeDateTo)] }]);
    }
  }, [userData, form]);

  // Reload user list
  const reloadUserList = () => {
    setOptions((prevState) => ({ ...prevState, page: 0 }));
    queryClient.invalidateQueries({
      queryKey: ["fetchGetUserList", options],
      refetchType: "active",
    });
  };

  // Create user hook
  const { mutate: create, isPending: isPendingCreate } = useMutation({
    mutationFn: fetchCreateUser,
    onSuccess: function () {
      message.success("Амжилттай хадгаллаа.");
      reloadUserList();
      handleCloseModal();
    },
    onError: function (err: any) {
      message.error(err.response.data.message);
    },
  });

  // Update user hook
  const { mutate: update, isPending: isPendingUpdate } = useMutation({
    mutationFn: fetchUpdateUser,
    onSuccess: function () {
      message.success("Амжилттай хадгаллаа.");
      reloadUserList();
      handleCloseModal();
    },
    onError: function (err: any) {
      message.error(err.response.data.message);
    },
  });

  // Submit form function
  const submit = () => {
    form.validateFields().then((e) => {
      const payload: User = {
        firstName: e.firstName,
        lastName: e.lastName,
        phone1: e.phone1,
        phone2: e.phone2,
        departmentType: e.departmentType,
        positionType: e.positionType,
        workStateType: e.workStateType,
        email: e.email,
        username: e?.username,
        activeDateFrom: dayjs(e?.dateRange?.[0]).format("YYYY-MM-DD"),
        activeDateTo: dayjs(e?.dateRange?.[1]).format("YYYY-MM-DD"),
        verifyPassword: null,
      };

      if (userData) {
        payload.updatedUserName = e.username;
        payload.username = userData.username;

        payload.createdAt = userData?.createdAt;
        payload.lastLoginAt = userData?.lastLoginAt;
        payload.updatedAt = userData?.updatedAt;
      }

      if (!userData?.id) {
        create({ ...payload, password: encryptRSA(e.password) });
      } else {
        if (e.password) {
          payload.password = encryptRSA(e.password);
        }
        payload.id = userData.id;
        update(payload);
      }
    });
  };

  return { isPending: isPendingCreate || isPendingUpdate, form, submit, handleCloseModal };
};
