import { useCallback } from "react";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { fetchGetDetailListByGroups } from "@/services";
import { CmmCode } from "@/types";

export const useGroupCode = (codes: string[]) => {
  const locale = useLocale();

  const { isLoading, data } = useQuery({
    queryKey: ["fetchGetDetailListByGroups", codes],
    queryFn: async () => await fetchGetDetailListByGroups({ codes }),
  });

  const getCodeName = useCallback(
    (_groupCode: string, _value: string) => {
      if (_value === null || _value === "" || _groupCode === undefined) {
        return "-";
      }
      const code = data?.data[_groupCode].find((e: CmmCode) => e.dtlCode === _value);
      if (locale === "kr") {
        return code?.cdName1 || code?.dtlName || _value;
      } else if (locale === "en") {
        return code?.cdName2 || code?.dtlName || _value;
      } else {
        return code?.dtlName || _value;
      }
    },
    [locale, data]
  );

  return { data, isLoading, getCodeName };
};
