import {
  GetDetailListByGroupsResult,
  GetGroupListParams,
  GetCmmCodeListResult,
  GetGroupDetailListResult,
} from "@/types";
import API from "./api";

/**
 * Get detail list by group
 */
export const fetchGetDetailListByGroups = async ({
  codes,
}: {
  codes: string[];
}): Promise<GetDetailListByGroupsResult> => {
  const { data } = await API.post("/commonCode/detailListByGroups", codes);
  return data;
};

/**
 * Get group code list
 */
export const fetchGetGroupCodeList = async ({
  grpCode,
  grpName,
}: GetGroupListParams): Promise<GetCmmCodeListResult> => {
  const { data } = await API.get("/commonCode/groupCodeList", { params: { grpCode, grpName } });
  return data;
};

/**
 * Get group code detail list
 */
export const fetchGetGroupDetailList = async ({ grpCode }: { grpCode?: string }): Promise<GetGroupDetailListResult> => {
  const { data } = await API.get("/commonCode/detailCodeList", { params: { grpCode, size: 100 } });
  return data;
};
