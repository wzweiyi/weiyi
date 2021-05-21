import { IQueryStringItem } from '@/utils/interface';
import { request } from 'umi';

// 获取专业列表
export let getMajor=()=>{
    return request("/sxpt/station/selectStationLabel")
}

// 获取table数据
export let getTableList=(params:IQueryStringItem)=>{
    return request("/sxpt/station/selectStationVersionList",{params})
}