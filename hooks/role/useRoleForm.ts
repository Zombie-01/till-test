import { useEffect } from "react";
import { Form, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/providers";
import { fetchSaveRole } from "@/services";
import { useListContext } from "@/components";
import { Role } from "@/types";

/**
 * Role - CREATE, UPDATE custom hook
 */
export const useRoleForm = ({ close, roleData }: { close: () => void; roleData?: Role }) => {
  const [form] = Form.useForm<Role>();
  const { options, setOptions } = useListContext();

  const handleCloseModal = () => {
    close();
    form.resetFields();
  };

  // Fill form
  useEffect(() => {
    if (roleData) {
      form.setFields([{ name: "roleCode", value: roleData?.roleCode }]);
      form.setFields([{ name: "roleName", value: roleData?.roleName }]);
      form.setFields([{ name: "useYN", value: roleData?.useYN }]);
    }
  }, [roleData, form]);

  // Reload user list
  const reloadRoleList = () => {
    setOptions((prevState) => ({ ...prevState, page: 0 }));
    queryClient.invalidateQueries({
      queryKey: ["fetchGetRoleList", options],
      refetchType: "active",
    });
  };

  // Create, update role hook
  const { mutate: saveRole, isPending } = useMutation({
    mutationFn: fetchSaveRole,
    onSuccess: function () {
      message.success("Амжилттай хадгаллаа.");
      reloadRoleList();
      handleCloseModal();
    },
    onError: function (err) {
      message.error(err.message);
    },
  });

  // Submit form function
  const submit = () => {
    form.validateFields().then((e) => {
      const payload: Role = {
        roleCode: roleData?.id ? roleData.roleCode : e.roleCode,
        roleName: e.roleName,
        useYN: e.useYN,
      };

      if (!roleData?.id) {
        saveRole(payload);
      } else {
        saveRole({ ...roleData, ...payload });
      }
    });
  };

  return { isPending, form, submit, handleCloseModal };
};
