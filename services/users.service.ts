import API from "./api";
import { GetUserListParams, GetUserListResult, User, SaveUserResult } from "@/types";

/**
 * User GET list fetch function
 */
export const fetchGetUserList = async ({
  name,
  departmentType,
  workStateType,
  page,
  size,
}: GetUserListParams): Promise<GetUserListResult> => {
  const { data } = await API.post(
    "/user/userList",
    { name, departmentType, workStateType },
    { params: { page, size } }
  );
  return data;
};

/**
 * Create user fetch function
 */
export const fetchCreateUser = async (payload: User): Promise<SaveUserResult> => {
  const { data } = await API.post(`/user/save`, payload);
  return data;
};

/**
 * Update user fetch function
 */
export const fetchUpdateUser = async (payload: User): Promise<SaveUserResult> => {
  const { data } = await API.put(`/user/update/${payload.id}`, payload);
  return data;
};

/**
 * Delete user fetch function
 */
export const fetchDeleteUser = async (_id: number): Promise<SaveUserResult> => {
  const { data } = await API.delete(`/user/${_id}`);
  return data;
};
