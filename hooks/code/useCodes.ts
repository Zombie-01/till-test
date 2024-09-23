import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useListContext } from "@/components";
import { fetchGetGroupCodeList } from "@/services";
import { GetGroupListParams } from "@/types";

/**
 * Code - LIST, DELETE custom hook
 */
export const useCodes = () => {
  const { filters } = useListContext();

  // List params
  const params = useMemo(() => {
    const result: GetGroupListParams = {
      grpCode: "",
      grpName: "",
    };
    filters?.forEach((a) => {
      if (a?.filterField && a?.items[0]?.id !== undefined) {
        (result as any)[a.filterField] = a.items[0].id;
      }
    });
    return result;
  }, [filters]);

  //Group list
  const { isLoading, data } = useQuery({
    queryKey: ["fetchGetGroupCodeList", params],
    queryFn: async () => await fetchGetGroupCodeList({ ...params }),
  });

  return { data: data?.data, isLoading };
};
