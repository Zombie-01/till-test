import { useMemo } from "react";
import { message, TablePaginationConfig } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useListContext } from "@/components";
import { fetchDeleteUser, fetchGetUserList } from "@/services";
import { GetUserListParams } from "@/types";

/**
 * User - LIST, DELETE custom hook
 */
export const useUsers = () => {
  const { options, setOptions, filters } = useListContext();

  // List params
  const params = useMemo(() => {
    const result: GetUserListParams = {
      departmentType: "",
      name: "",
      workStateType: "",
    };
    filters?.forEach((a) => {
      if (a?.filterField && a?.items[0]?.id !== undefined) {
        (result as any)[a.filterField] = a.items[0].id;
      }
    });
    return result;
  }, [filters]);

  // List
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["fetchGetUserList", options, params],
    queryFn: async () => await fetchGetUserList({ ...options, ...params }),
  });

  // Delete user
  const { mutate: deleteUser, isPending } = useMutation({
    mutationFn: fetchDeleteUser,
    onSuccess: function () {
      message.success("Амжилттай устгалаа.");
      refetch();
      close();
    },
    onError: function (err) {
      message.error(err.message);
    },
  });

  // Table pagination config
  const pagination: TablePaginationConfig = useMemo(
    () => ({
      showSizeChanger: true,
      current: options.page + 1,
      total: Number(data?.data?.totalPages) * options.size,
      onChange: (index) => setOptions((prevState) => ({ ...prevState, page: index - 1 })),
      onShowSizeChange: (_, size) => setOptions((prevState) => ({ ...prevState, size: size })),
    }),
    [data, options]
  );

  return { data: data?.data, isLoading: isPending || isLoading, pagination, deleteUser };
};
