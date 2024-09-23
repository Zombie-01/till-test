import { CmmCode } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchGetGroupDetailList } from "@/services";

/**
 * Code - LIST, DELETE custom hook
 */
export const useDtlCodes = ({ grpCode }: { grpCode: string }) => {
  // Detail list
  const { data, isLoading } = useQuery({
    queryKey: ["fetchGetGroupDetailList", grpCode],
    queryFn: async () => await fetchGetGroupDetailList({ grpCode }),
    enabled: true,
  });

  return { data: data?.data, isLoading };
};
