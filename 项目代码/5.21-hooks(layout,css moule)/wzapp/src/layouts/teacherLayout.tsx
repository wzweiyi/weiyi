import React from "react"
import { Layout, Menu, Dropdown, Badge, Popover, Button } from "antd"
import "./teacherLayout.less"
import { NavLink } from "umi"
import { DownOutlined, BellOutlined } from '@ant-design/icons';
const { Header, Footer, Content } = Layout
const content = (
    <div>
        <h2>待办事项</h2>
        <p>查看全部</p>
    </div>
);
const practical = <Menu >
    <Menu.Item>
        <NavLink to="/teachers/planList">计划</NavLink>
    </Menu.Item>
    <Menu.Item>
        <NavLink to="/teachers/viewPlan">进度</NavLink>
    </Menu.Item>
    <Menu.Item>
        <NavLink to="/teachers/defence">答辩</NavLink>
    </Menu.Item>
</Menu>

const interview = <Menu >
    <Menu.Item>
        <NavLink to="/teachers/interviewList">面试记录</NavLink>
    </Menu.Item>
    <Menu.Item>
        <NavLink to="/teachers/interviewManage">面试记录管理</NavLink>
    </Menu.Item>
    <Menu.Item>
        <NavLink to="/teachers/rankList">面试排行榜</NavLink>
    </Menu.Item>
</Menu>

const question = <Menu >
    <Menu.Item>
        <NavLink to="/teachers/questionDetail">问答列表</NavLink>
    </Menu.Item>
    <Menu.Item>
        <NavLink to="/teachers/questionHandle">问答管理</NavLink>
    </Menu.Item>
</Menu>

const TeacherLayout: React.FC = (props) => {
    return <>
        <Header>
            <div className="left">
                <img className="logo" src="http://111.203.59.61:8060/static/img/w_bw.172a76e5.png" alt="" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <NavLink to="/teachers/postSkill"> 岗位</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2"><NavLink to="/teachers/proManagement"> 项目</NavLink></Menu.Item>
                    <Menu.Item key="3">
                        <Dropdown overlay={practical}><span>实训<DownOutlined /></span></Dropdown>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Dropdown overlay={interview}><span>面试<DownOutlined /></span></Dropdown>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Dropdown overlay={question}><span>回答<DownOutlined /></span></Dropdown>
                    </Menu.Item>

                </Menu>

            </div>
            <div className="right">
                <Popover content={content} placement="bottomRight" trigger="hover">
                    <Badge count={5} offset={[5, 5]}>
                        <BellOutlined />
                    </Badge>

                </Popover>

            </div>
        </Header>
        <Content>{props.children}</Content>
        <Footer >
            <div className="bw_bottom">
                <div className="b_b_detail">
                    <div className="b_b_left">
                        <div className="bw_img"> <img src="http://111.203.59.61:8060/static/img/bottom_logo.c8aa9859.png" alt="" /></div>
                        <div className="b_w_tel">400-008-0987</div>
                    </div>

                    <div className="b_b_middle">
                        <div className="middle_one middle">
                            <div className="middle_title">走进八维</div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/about.html">集团概况</a></div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/news/index.html">八维动态</a></div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/lead.html">领导关怀</a></div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/honour.html">企业荣誉</a></div>
                        </div>
                        <div className="middle_two middle"><div className="middle_title">八维文化</div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/culture.html">八维理念</a></div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/spirit.html">八维精神</a></div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/dak.html">文化驿站</a></div>
                        </div>
                        <div className="middle_three middle"><div className="middle_title">社会责任</div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/duty/public.html">社会公益</a></div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/duty/great.html">大善之举</a></div>
                        </div>
                        <div className="middle_four middle"><div className="middle_title">联系我们</div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/partners.html">业务合作</a></div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/sign_up.html">咨询报名</a></div>
                            <div className="href_a"><a href="http://bwie.cn/bwie/concact.html">联系方式</a></div>
                        </div>
                    </div>

                    <div className="b_b_right">
                        <img src="http://111.203.59.61:8060/static/img/wechat.e60a83ec.png" alt="" />
                        <div className="wechat_text">八维微信公众号</div>
                    </div>
                </div>
            </div>
            <div className="b_b_sign">京公网安备 11010802031438号 © Copyright 2020. 八维教育版权所有 | 京ICP备12008262号-12</div>
        </Footer>
    </>

}
export default TeacherLayout