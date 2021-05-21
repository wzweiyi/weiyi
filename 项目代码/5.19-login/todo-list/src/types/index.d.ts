export interface RouterItem {
  from?: string,
  to?: string,
  path?: string,
  component?: any,
  children?: Array<RouterItem>
}

export interface ListItem {
  id: string,
  img?: string,
  tit?: string,
  desc?: string,
  isLove?: boolean,
  isFlag?: boolean,
  content?: Array<ListItem>,
  children?: Array<string>
}


export interface FloorList {
  id: string,
  tit: string,
  desc: string,
  count: number,
  isCollect?: boolean,
  isLove: boolean,
  children: Array<FloorList>
}
