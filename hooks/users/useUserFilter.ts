import { useEffect } from "react";
import { Form, FormProps } from "antd";
import { useGroupCode } from "../code";
import { FilterType, useListContext } from "@/components";
import { GetUserListParams, CmmGroupCode } from "@/types";

/**
 * User - LIST filter hook
 */
export const useUserFilter = () => {
  // Form hook
  const [form] = Form.useForm<GetUserListParams>();

  // List context
  const { options, setFilters, setShowFilterForm } = useListContext();
  const {
    data: codeList,
    isLoading,
    getCodeName,
  } = useGroupCode([CmmGroupCode.departmentType, CmmGroupCode.workStateType]);

  useEffect(() => {
    form.setFields([{ name: "name", value: (options as GetUserListParams)?.name }]);
    form.setFields([{ name: "departmentType", value: (options as GetUserListParams)?.departmentType }]);
    form.setFields([{ name: "workStateType", value: (options as GetUserListParams)?.workStateType }]);
  }, [form, options]);

  // Submit filter function
  const handleFilter: FormProps<GetUserListParams>["onFinish"] = (_e) => {
    const arr: FilterType[] = [];
    if (_e?.departmentType) {
      arr.push({
        filterName: "Хэлтэс",
        filterField: "departmentType",
        items: [{ id: _e?.departmentType + "", name: getCodeName("COM120", _e.departmentType) }],
      });
    }
    if (_e?.workStateType) {
      arr.push({
        filterName: "Хөдөлмөр эрхлэлтийн ангилал",
        filterField: "workStateType",
        items: [{ id: _e?.workStateType + "", name: getCodeName("COM122", _e.workStateType) }],
      });
    }
    if (_e?.name) {
      arr.push({
        filterName: "Ажилтны нэр",
        filterField: "name",
        items: [{ id: _e.name, name: _e.name }],
      });
    }
    setFilters(arr);
    setShowFilterForm(false);
  };

  return { form, codeList, isLoading, getCodeName, handleFilter };
};
