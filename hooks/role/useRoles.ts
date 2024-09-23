import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useListContext } from "@/components";
import { fetchGetRoleList } from "@/services";
import { GetRoleListParams } from "@/types";

/**
 * Role - LIST, DELETE custom hook
 */
export const useRoles = () => {
  const { options, filters } = useListContext();

  // List params
  const params = useMemo(() => {
    const result: GetRoleListParams = {
      roleCode: "",
      roleName: "",
    };
    filters?.forEach((a) => {
      if (a?.filterField && a?.items[0]?.id !== undefined) {
        (result as any)[a.filterField] = a.items[0].id;
      }
    });
    return result;
  }, [filters]);

  // List
  const { isLoading, data } = useQuery({
    queryKey: ["fetchGetRoleList", options, params],
    queryFn: async () => await fetchGetRoleList({ ...options, ...params }),
  });

  return { data: data?.data, isLoading };
};
