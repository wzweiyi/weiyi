import { getMajor, getTableList } from '@/services';
import { IMajorItem, IQueryStringItem, ITableListItem } from '@/utils/interface';
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const statusList = ["全部", "草稿", "已发布", "待审核", "已驳回"]
const columns=[
    {
        title: '岗位名称',
        dataIndex: 'name',
      },
    {
        title: '专业',
        dataIndex: 'majorName',
      },
    {
        title: '版本号',
        dataIndex: 'stationVersion',
      },
    {
        title: '技能数量',
        dataIndex: 'skillNum',
      },
    {
        title: '作者',
        dataIndex: 'userName',
      },
    {
        title: '发起时间',
        dataIndex: 'createTime',
      },
    {
        title: '状态',
        dataIndex: "status"
     
      },
    {
        title: '操作',
        dataIndex:"status"

        
      },
     
]

const postSkill: React.FC = () => {
    // 头部专业的状态
    const [majorList, setMajorList] = useState<IMajorItem[]>([])
    const [queryString, setQueryString] = useState<IQueryStringItem>({ isAsc: "desc", pageNum: 1, pageSize: 10, isMyInfo: false,status:0 })
    const [majorId, setMajorId] = useState("")
    const [status, setStatus] = useState(0)
    const [tableList, setTableList] = useState<ITableListItem[]>([])
    // 类似与componentDidMount
    useEffect(() => {
        getMajor().then(res => {
            console.log(res);
            if (res.code === 200) {
                setMajorList(res.data)
            }
        })
    }, [])
    // 类似与componentDidMount
    useEffect(() => {
     
         // 拼接下参数
         let queryParams: IQueryStringItem = {} as IQueryStringItem;
         if (status) { 
             queryParams = { ...queryParams, majorId, status }
         } else {
             queryParams = { ...queryParams, majorId, status: '' as unknown as number }
         }
         getTableList(queryParams).then(res => {
             if (res.code == 200) {
                setTableList(res.rows);
             }
 
         })

        
    }, [majorId, status])
    return (
        <div>
            <section>
                <div>
                    <span>专业：</span>
                    <div>
                        <span>全部</span>
                        {
                            majorList.map(item => {
                                return <span key={item.id} className={item.id === majorId ? "active" : ""} onClick={() => setMajorId(item.id)}>{item.name}</span>
                            })
                        }
                    </div>

                </div>
            </section>
            <section>
                <div>
                    <span>状态：</span>
                    <div>
                        {
                            statusList.map((item, index) => {
                                return <span key={index} className={index === status ? "active" : ""} onClick={() => setStatus(index)}>{item}</span>
                            })
                        }
                    </div>

                </div>
            </section>
          
            <Table rowKey="stationId" columns={columns} dataSource={tableList} />
        </div>
    );
}
export default postSkill
