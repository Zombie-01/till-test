/**
 * User type
 */
export type User = {
  id?: number;
  username: string;
  updatedUserName?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone1: string;
  phone2: string;
  phone3?: string;
  activeDateFrom: string;
  activeDateTo: string;
  positionType: string;
  workStateType: string;
  departmentType: string;
  isActive?: boolean;
  verifyPassword?: string | null;
  password?: string | boolean;
  dateRange?: string[];
  // useless fields
  userTel?: string;
  lastLoginAt?: number;
  updatedAt?: number;
  createdAt?: number;
};

/**
 * User list filter type
 */
export type GetUserListParams = {
  name?: string;
  departmentType?: string;
  workStateType?: string;
  page?: number;
  size?: number;
};

/**
 * fetchGetUserList function's  response type
 */
export type GetUserListResult = {
  code: number;
  isSuccess: boolean;
  message: string;
  data: {
    content: User[];
    totalElements: number;
    totalPages: number;
  };
};

/**
 * User services response type
 */
export type SaveUserResult = {
  code: number;
  isSuccess: boolean;
  message: string;
};
