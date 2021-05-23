import { getMajor, getTableList } from '@/services';
import { IMajorItem, IQueryStringItem, ITableListItem } from '@/utils/interface';
import React, { useEffect, useState } from 'react';
import { Table, Input, Button } from 'antd';
import { SearchOutlined, EyeOutlined, RollbackOutlined, FormOutlined, DeliveredProcedureOutlined, DeleteOutlined } from "@ant-design/icons"
import { NavLink } from "umi"
import classnames from "classnames"
import "./postSkill.less"
// 启动css module
import styles from "./postSkill.less"

const statusList = ["全部", "草稿", "已发布", "待审核", "已驳回"]
const columns = [
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
        render: (rows: ITableListItem) => {
            return <span className={styles[`status${rows.status}`]}>{statusList[Number(rows.status)]}</span>
        }

    },
    {
        title: '操作',
        render: (rows: ITableListItem) => {
            if (rows.status === "3") {
                return <div className={styles.action}>
                    <EyeOutlined style={{ color: '#679cf6' }} />
                    <RollbackOutlined style={{ color: '#679cf6' }} />
                </div>
            } else if (rows.status === "1") {
                return <div className={styles.action}>
                    <FormOutlined style={{ color: '#679cf6' }} />
                    <DeliveredProcedureOutlined style={{ color: '#679cf6' }} />
                    <DeleteOutlined style={{ color: '#679cf6' }} />
                </div>
            }
        }


    },

]

const postSkill: React.FC = () => {
    // 头部专业的状态
    const [majorList, setMajorList] = useState<IMajorItem[]>([])
    const [queryString, setQueryString] = useState<IQueryStringItem>({ isAsc: "desc", pageNum: 1, pageSize: 10, isMyInfo: false, status: 0 })
    const [majorId, setMajorId] = useState("")
    const [status, setStatus] = useState(0)
    const [title, setTitle] = useState("")
    const [tableList, setTableList] = useState<ITableListItem[]>([])
    const [isMyInfo, setMyInfo] = useState(false)
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
        console.log(isMyInfo);
        

        // 拼接下参数
        let queryParams: IQueryStringItem = {} as IQueryStringItem;
        if (status) {
            queryParams = { ...queryParams, majorId, status, searchTitle: "" ,isMyInfo}
        } else {
            queryParams = { ...queryParams, majorId, status: '' as unknown as number, searchTitle: title,isMyInfo }
        }
        getTableList(queryParams).then(res => {
            if (res.code == 200) {
                setTableList(res.rows);
            }

        })

    }, [majorId, status, title,isMyInfo])
    return (
        <div className="main">
            <section>
                <div className="top">
                    <span>专业：</span>
                    <div className="major">

                        {
                            [{ id: "", name: "全部" }, ...majorList].map(item => {
                                return <span key={item.id}
                                    className={item.id === majorId ? classnames(styles.show, styles.statusItem) : styles.statusItem}
                                    onClick={() => setMajorId(item.id)}>{item.name}</span>
                            })
                        }
                    </div>

                </div>
            </section>
            <section>
                <div className={styles.top}>
                    <span>状态：</span>
                    <div>
                        {
                            statusList.map((item, index) => {
                                return <span key={index} className={index === status ? classnames(styles.show, styles.statusItem) : styles.statusItem} onClick={() => setStatus(index)}>{item}</span>
                            })
                        }
                    </div>

                </div>
            </section>
            <div className="search">
                <input type="checkbox" onChange={e=>setMyInfo(e.target.checked)}/><span className="onlyOne">只看我的</span>
                <Input placeholder="输入标题" suffix={<SearchOutlined />} onChange={e => setTitle(e.target.value)} value={title} onKeyDown={e => {
                    if (e.keyCode === 13) {
                        setTitle(title)
                    }
                }} />

                <NavLink to="/teachers/addPostSkill?see=false"> <Button type="primary"> +添加岗位</Button></NavLink>

            </div>
            <Table rowKey="stationId" columns={columns} dataSource={tableList} />
        </div>
    );
}
export default postSkill
