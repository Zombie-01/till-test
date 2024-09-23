export type Role = {
  id?: string;
  roleName: string;
  roleCode?: string;
  roleDesc?: string;
  isActive?: true;
  useYN: string;
  createdAt?: string;
  createdBy?: number;
  createdUserName?: string;
  updatedAt?: string;
  updatedBy?: number;
  updatedUserName?: string;
};

export type GetRoleListParams = {
  roleCode?: string;
  roleName?: string;
};

/**
 * fetchGetRoleList function's  response type
 */
export type GetRoleListResult = {
  code: number;
  isSuccess: boolean;
  message: string;
  data: Role[];
};

/**
 * Role services response type
 */
export type SaveRoleResult = {
  code: number;
  isSuccess: boolean;
  message: string;
};
