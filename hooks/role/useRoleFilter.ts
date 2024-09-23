import { useEffect } from "react";
import { Form, FormProps } from "antd";
import { FilterType, useListContext } from "@/components";
import { GetRoleListParams } from "@/types";

/**
 * Role - LIST filter hook
 */
export const useRoleFilter = () => {
  // Form hook
  const [form] = Form.useForm<GetRoleListParams>();

  // List context
  const { options, setFilters, setShowFilterForm } = useListContext();

  useEffect(() => {
    form.setFields([{ name: "roleName", value: (options as GetRoleListParams)?.roleName }]);
    form.setFields([{ name: "roleCode", value: (options as GetRoleListParams)?.roleCode }]);
  }, [form, options]);

  // Submit filter function
  const handleFilter: FormProps<GetRoleListParams>["onFinish"] = (_e) => {
    const arr: FilterType[] = [];
    if (_e?.roleName) {
      arr.push({
        filterName: "Эрхийн нэр",
        filterField: "roleName",
        items: [{ id: _e?.roleName + "", name: _e.roleName }],
      });
    }
    if (_e?.roleCode) {
      arr.push({
        filterName: "Эрхийн код",
        filterField: "roleCode",
        items: [{ id: _e?.roleCode + "", name: _e.roleCode }],
      });
    }
    setFilters(arr);
    setShowFilterForm(false);
  };

  return { form, handleFilter };
};
