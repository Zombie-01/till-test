import API from "./api";
import { GetRoleListParams, GetRoleListResult, Role, SaveRoleResult } from "@/types";

/**
 * GET role list function
 */
export const fetchGetRoleList = async ({ roleCode, roleName }: GetRoleListParams): Promise<GetRoleListResult> => {
  const { data } = await API.get("/roleList", { params: { roleCode, roleName } });
  return data;
};

/**
 * CREATE role function
 */
export const fetchSaveRole = async (payload: Role): Promise<SaveRoleResult> => {
  const { data } = await API.post("/saveRole", payload);
  return data;
};
