/**
 * Common group codes
 */
export enum CmmGroupCode {
  /**Тийм, үгүй*/
  YN = "COM001",
  /**Хэлтэс*/
  departmentType = "COM120",
  /**Албан тушаал*/
  positionType = "COM121",
  /**Хөдөлмөр эрхлэлтийн ангилал*/
  workStateType = "COM122",
}

/**
 * Common code type
 */
export type CmmCode = {
  id: number;
  grpName: string;
  dtlName: string;
  grpCode: string;
  dtlCode: string;
  cdName1: string;
  cdName2: string;
  sort: number;
};

/**
 * fetchGetCmmCodeGroup function's response type
 */
export type GetDetailListByGroupsResult = {
  code: number;
  isSuccess: boolean;
  message: string;
  data: {
    [key: string]: CmmCode[];
  };
};

export type GetGroupListParams = {
  grpCode?: string;
  grpName?: string;
};

export type GetCmmCodeListResult = {
  code: number;
  isSuccess: boolean;
  message: string;
  data: CmmCode[];
};

export type GetGroupDetailListResult = {
  code: number;
  isSuccess: boolean;
  message: string;
  data: {
    content: CmmCode[];
    totalElements: number;
    totalPages: number;
  };
};
