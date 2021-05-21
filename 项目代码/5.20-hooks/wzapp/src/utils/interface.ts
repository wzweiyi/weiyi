export interface IMajorItem {
  id: string;
  name: string;
  parentId: string;
  children?: any;
}

export  interface IQueryStringItem {
  isAsc: string;
  pageNum: number;
  pageSize: number;
  searchTitle?: string;
  majorId?: string;
  status: number;
  isMyInfo: boolean;
}

export interface ITableListItem {
  stationId: string;
  stationVersionId: string;
  name: string;
  majorId: string;
  userId: string;
  userName: string;
  status: string;
  skillNum: string;
  majorName: string;
  stationVersion: number;
  stationLevelList?: any;
  labelTreeList?: any;
  skillList?: any;
  createTime: string;
}